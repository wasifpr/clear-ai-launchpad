import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import posthog from "posthog-js";

const PostHogContext = createContext<typeof posthog | null>(null);

export function PostHogProvider({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const apiKey = import.meta.env.VITE_LOVABLE_CONNECTOR_POSTHOG_API_KEY;
    const region = import.meta.env.VITE_LOVABLE_CONNECTOR_POSTHOG_REGION || "us";

    if (!apiKey) {
      console.warn("[PostHog] VITE_LOVABLE_CONNECTOR_POSTHOG_API_KEY is not set");
      return;
    }

    const apiHost =
      region === "eu" ? "https://eu.i.posthog.com" : "https://us.i.posthog.com";

    posthog.init(apiKey, {
      api_host: apiHost,
      capture_pageview: true,
      capture_pageleave: true,
      debug: true,
      loaded: () => setReady(true),
    });

    return () => {
      posthog.shutdown();
    };
  }, []);

  return (
    <PostHogContext.Provider value={posthog}>
      {children}
    </PostHogContext.Provider>
  );
}

export function usePostHog() {
  return useContext(PostHogContext);
}

/**
 * Global click tracker. Captures:
 * - cta_clicked (Get Started, Subscribe, Send Message, etc.)
 * - pricing_clicked (pricing links / buttons)
 * - signup_clicked (chat.clearaiagents.com or signup text)
 * - contact_clicked (contact links)
 */
export function PostHogClickTracker() {
  console.log("[PostHog] ClickTracker render");
  const posthogClient = usePostHog();

  useEffect(() => {
    console.log("[PostHog] ClickTracker effect", { hasClient: !!posthogClient });
    if (!posthogClient) return;

    const handleClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest("a,button");
      if (!el) return;

      const text = (el.textContent || "").trim();
      const textLower = text.toLowerCase();
      const href = el.getAttribute("href") || "";
      const dataEvent = el.getAttribute("data-ph-event");

      const props = {
        text,
        href,
        element: el.tagName.toLowerCase(),
        ...(dataEvent ? { event_name: dataEvent } : {}),
      };

      // Explicit data attribute wins
      if (dataEvent) {
        posthogClient.capture(dataEvent, props);
        return;
      }

      // CTA clicks
      if (
        textLower.includes("get started") ||
        textLower.includes("subscribe") ||
        textLower.includes("start free") ||
        textLower.includes("send message")
      ) {
        posthogClient.capture("cta_clicked", props);
      }

      // Pricing
      if (
        href.includes("#pricing") ||
        textLower.includes("view pricing") ||
        textLower.includes("pricing")
      ) {
        posthogClient.capture("pricing_clicked", props);
      }

      // Signup / chat app
      if (
        href.includes("chat.clearaiagents.com") ||
        textLower.includes("sign up") ||
        textLower.includes("signup") ||
        textLower.includes("chat")
      ) {
        posthogClient.capture("signup_clicked", props);
      }

      // Contact
      if (href.includes("#contact") || textLower.includes("contact")) {
        posthogClient.capture("contact_clicked", props);
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [posthogClient]);

  return null;
}

/**
 * Tracks when a section enters the viewport once.
 * Use inside the element you want to track.
 */
export function TrackSectionView({
  event,
  properties,
  threshold = 0.3,
}: {
  event: string;
  properties?: Record<string, string | number | boolean>;
  threshold?: number;
}) {
  const posthogClient = usePostHog();
  const ref = useRef<HTMLDivElement>(null);
  const captured = useRef(false);

  useEffect(() => {
    if (!posthogClient || !ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !captured.current) {
            captured.current = true;
            posthogClient.capture(event, properties ?? {});
          }
        });
      },
      { threshold }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [posthogClient, event, properties, threshold]);

  return <div ref={ref} aria-hidden className="pointer-events-none absolute inset-0 -z-10" />;
}
