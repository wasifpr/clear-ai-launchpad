/**
 * Clear AI — Blog Content
 * -----------------------------------------------------------------------------
 * Add new posts by appending to the `posts` array below. Each post uses a
 * structured block system so styling stays consistent without a markdown
 * runtime dependency.
 */

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "quote"; text: string; cite?: string }
  | { type: "code"; lang?: string; text: string }
  | { type: "list"; items: string[] };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string; // ISO
  readingMinutes: number;
  category: string;
  cover: string; // gradient css OR image url
  featured?: boolean;
  content: Block[];
};

// Cover uses a CSS gradient string — no image assets required.
const gradientA =
  "linear-gradient(135deg, oklch(0.35 0.18 295) 0%, oklch(0.25 0.14 265) 55%, oklch(0.18 0.08 240) 100%)";
const gradientB =
  "linear-gradient(135deg, oklch(0.30 0.20 320) 0%, oklch(0.22 0.15 280) 60%, oklch(0.15 0.06 250) 100%)";
const gradientC =
  "linear-gradient(135deg, oklch(0.32 0.16 250) 0%, oklch(0.24 0.12 275) 55%, oklch(0.16 0.08 295) 100%)";
const gradientD =
  "linear-gradient(135deg, oklch(0.34 0.19 300) 0%, oklch(0.20 0.10 260) 100%)";

export const posts: Post[] = [
  {
    slug: "7-prompts-that-feel-illegal",
    title: "7 Prompts That Feel Illegal to Know (But Aren't)",
    excerpt:
      "These copy-paste prompts turn any capable model into a research analyst, code reviewer, and personal editor — in under 60 seconds each.",
    author: "The Clear AI Team",
    date: "2026-08-30",
    readingMinutes: 6,
    category: "Prompt Engineering",
    cover: gradientA,
    featured: true,
    content: [
      {
        type: "p",
        text: "The gap between a mediocre AI answer and a jaw-dropping one is almost never the model — it's the prompt. These seven prompts are the ones our power users keep coming back to. They work on GLM-4.7, DeepSeek-V4, and Qwen3.5 out of the box. Copy them verbatim and fill in the brackets.",
      },
      { type: "h2", text: "1. The Brutal Editor" },
      {
        type: "code",
        lang: "text",
        text: `Act as a ruthless senior editor. Read the text below and return:
1. The weakest paragraph and WHY it fails
2. Every sentence that can be cut without losing meaning
3. A rewritten version that is 30% shorter and 2x punchier

TEXT: [paste your draft]`,
      },
      {
        type: "p",
        text: "Most people ask AI to 'improve' their writing and get polite nothing. Asking for what's broken first forces the model to actually evaluate instead of flatter.",
      },
      { type: "h2", text: "2. The 60-Second Expert" },
      {
        type: "code",
        lang: "text",
        text: `I need to sound credible about [topic] in a meeting in one hour.
Give me:
- The 5 concepts I must understand
- The 3 questions a real expert would ask
- The 2 common misconceptions I should never repeat
Use plain language. No fluff.`,
      },
      { type: "h2", text: "3. The Code Autopsy" },
      {
        type: "code",
        lang: "text",
        text: `Review this code like a staff engineer doing a hostile code review.
Find: bugs, security issues, performance traps, and one thing you'd
refuse to merge. Rank findings by severity. Be specific, cite line numbers.

CODE: [paste code]`,
      },
      {
        type: "p",
        text: "'Hostile' is the magic word. Without it, models default to gentle suggestions. With it, you get the review your code actually needs.",
      },
      { type: "h2", text: "4. The Decision Matrix" },
      {
        type: "code",
        lang: "text",
        text: `I'm deciding between [option A] and [option B].
Build a decision matrix with criteria I haven't thought of.
Score both options, then argue FOR the loser to stress-test the winner.
End with a clear recommendation and the one condition that would flip it.`,
      },
      { type: "h2", text: "5. The Explanation Ladder" },
      {
        type: "code",
        lang: "text",
        text: `Explain [concept] five times:
1. To a 5-year-old
2. To a high schooler
3. To a college student
4. To a professional in the field
5. To an expert who thinks it's overrated`,
      },
      {
        type: "p",
        text: "This one is a cheat code for learning. If you can follow all five rungs, you actually understand the concept.",
      },
      { type: "h2", text: "6. The Objection Crusher" },
      {
        type: "code",
        lang: "text",
        text: `Here is my [sales page / proposal / pitch].
List the 10 strongest objections a skeptical reader would have.
Then rewrite the pitch so each objection is answered BEFORE it's raised.

PITCH: [paste text]`,
      },
      { type: "h2", text: "7. The Second-Order Thinker" },
      {
        type: "code",
        lang: "text",
        text: `I'm planning to [decision].
Don't tell me if it's a good idea. Instead:
1. What happens immediately after I do this?
2. What happens in 6 months because of that?
3. What happens in 2 years because of THAT?
Map the full chain of consequences, including the ones nobody mentions.`,
      },
      { type: "h2", text: "Why these work everywhere" },
      {
        type: "p",
        text: "Every prompt here does the same three things: assigns a sharp role, demands a specific output shape, and removes the model's escape hatch of generic advice. That's the entire formula. Save these seven, and you'll never stare at a blank chat box again.",
      },
      {
        type: "quote",
        text: "The model isn't the moat. The prompt is.",
      },
    ],
  },
  {
    slug: "what-is-an-ai-agent-explained",
    title: "AI Agents Explained Like You're Busy: What They Are and Why Everyone's Talking About Them",
    excerpt:
      "No jargon, no hype. A plain-English breakdown of what 'agentic AI' actually means, what it can do for you today, and where the hype ends.",
    author: "The Clear AI Team",
    date: "2026-08-23",
    readingMinutes: 7,
    category: "AI Basics",
    cover: gradientB,
    content: [
      {
        type: "p",
        text: "You've seen the word 'agentic' everywhere this year. Here's the honest version of what it means — no marketing, no computer science degree required.",
      },
      { type: "h2", text: "Chatbot vs. agent: the one-sentence difference" },
      {
        type: "p",
        text: "A chatbot answers. An agent acts. Ask a chatbot to 'summarize this article' and it summarizes. Ask an agent to 'research competitors and put a comparison table in my docs' and it plans the steps, searches, reads, compares, and writes the table — checking its own work along the way.",
      },
      {
        type: "quote",
        text: "A chatbot is a very smart answering machine. An agent is a very fast junior employee.",
      },
      { type: "h2", text: "The three ingredients of every AI agent" },
      {
        type: "list",
        items: [
          "A GOAL — what you want done, stated as an outcome",
          "TOOLS — things it can use (search, code execution, files, APIs)",
          "A LOOP — plan, act, check the result, adjust, repeat",
        ],
      },
      {
        type: "p",
        text: "That loop is the whole trick. Instead of one shot at an answer, the model gets to try, see what happened, and try again. It's the same reason a human with Google beats a genius in an empty room.",
      },
      { type: "h2", text: "What agents are genuinely good at today" },
      {
        type: "list",
        items: [
          "Research: reading 20 sources and handing you the 5 that matter",
          "Coding: writing, running, and fixing scripts until they work",
          "Data cleanup: turning messy exports into clean, formatted tables",
          "Drafting: producing first drafts of documents from scattered notes",
          "Monitoring: watching a feed or inbox and flagging what matters",
        ],
      },
      { type: "h2", text: "Where the hype runs ahead of reality" },
      {
        type: "p",
        text: "Agents still fumble tasks with lots of hidden steps, ambiguous instructions, or no clear 'done' state. 'Plan my whole business launch' fails. 'Find me 10 venues in Dubai under AED 5,000 with capacity for 80 people and put them in a table' works beautifully. Specificity is everything.",
      },
      { type: "h2", text: "How to get useful results from an agent today" },
      {
        type: "list",
        items: [
          "State the outcome, not the process — 'a table comparing X' beats 'look into X'",
          "Give it the tools it needs and say what they're called",
          "Define what 'done' looks like before it starts",
          "Start small: one task, one loop, then chain tasks together",
        ],
      },
      {
        type: "p",
        text: "On Clear AI, models like GLM-4.7 and DeepSeek-V4 are built for exactly this kind of multi-step reasoning — and with up to 512K context, you can hand them entire document sets instead of snippets. The agent era isn't coming. It's already sitting in your chat box, waiting for a goal worth pursuing.",
      },
    ],
  },
  {
    slug: "agentic-prompts-deepseek-v4",
    title: "How to Write Agentic Prompts for DeepSeek-V4",
    excerpt:
      "A field guide to structuring goal-oriented prompts that unlock DeepSeek-V4's planning and tool-use behavior instead of chatty responses.",
    author: "The Clear AI Team",
    date: "2026-06-28",
    readingMinutes: 8,
    category: "Prompt Engineering",
    cover: gradientA,
    featured: true,
    content: [
      {
        type: "p",
        text: "DeepSeek-V4 rewards structure. When you give it a role, a goal, and a set of tools, it plans before it answers. When you give it a vague question, it chats. This guide shows the exact scaffold we use internally at Clear AI to consistently coax agentic behavior from V4-class models.",
      },
      { type: "h2", text: "The four blocks of an agentic prompt" },
      {
        type: "p",
        text: "Every reliable agentic prompt we ship is built from the same four blocks, in this order:",
      },
      {
        type: "list",
        items: [
          "ROLE — who the model is playing",
          "GOAL — the single outcome we want",
          "CONSTRAINTS — the hard limits (time, cost, tools)",
          "OUTPUT — the exact shape of the reply",
        ],
      },
      { type: "h3", text: "Minimal template" },
      {
        type: "code",
        lang: "text",
        text: `ROLE: You are a senior data engineer.
GOAL: Design a nightly ETL that syncs Postgres -> BigQuery.
CONSTRAINTS:
  - Budget: <$50/mo
  - Tools available: dbt, Airflow, Fivetran
  - Must handle 30M rows/day
OUTPUT:
  1. Architecture diagram (ascii)
  2. Cost breakdown
  3. Risks + mitigations`,
      },
      { type: "h2", text: "Why this works" },
      {
        type: "p",
        text: "Agentic models score every token against the plan they've committed to. If the plan is empty, the model fills it with pleasantries. Give it a plan and it fills it with execution.",
      },
      {
        type: "quote",
        text: "Structure is the shortcut to reasoning. Every constraint you add removes a branch the model has to guess.",
        cite: "Internal Clear AI eval, June 2026",
      },
      { type: "h2", text: "Common failure modes" },
      { type: "h3", text: "1. Overloading the ROLE block" },
      {
        type: "p",
        text: "One role per prompt. A model told it is simultaneously a lawyer, a poet, and a Kubernetes admin will hedge on all three.",
      },
      { type: "h3", text: "2. Skipping OUTPUT" },
      {
        type: "p",
        text: "Without an explicit output shape, DeepSeek-V4 defaults to prose. Explicit outputs unlock JSON, code, tables — whatever downstream systems actually consume.",
      },
      { type: "h2", text: "Tool-use tip: name the function, not the intent" },
      {
        type: "p",
        text: "Instead of saying 'search the web for pricing', say 'call web_search(query: str) with the vendor name'. Named calls trigger V4's tool-planning path.",
      },
      {
        type: "code",
        lang: "python",
        text: `# Bad — intent only
prompt = "Find current pricing for Neon Postgres."

# Good — names the tool contract
prompt = """
Call web_search(query: str) exactly once with 'Neon Postgres pricing'.
Return the cheapest paid tier as JSON: {tier, price_usd, url}.
"""`,
      },
      { type: "h2", text: "Wrapping up" },
      {
        type: "p",
        text: "Agentic prompting isn't a secret incantation. It's the same discipline you'd use writing a ticket for a junior engineer: give them a role, a goal, the tools, and the output. Do that and DeepSeek-V4 will meet you where you are.",
      },
    ],
  },
  {
    slug: "256k-context-actually-means",
    title: "What a 256K Context Window Actually Buys You",
    excerpt:
      "Context length is marketed as a raw number. The useful question is: which workflows collapse from multi-step to single-step at 256K?",
    author: "The Clear AI Team",
    date: "2026-06-14",
    readingMinutes: 6,
    category: "Research",
    cover: gradientB,
    content: [
      {
        type: "p",
        text: "A 256K context window is roughly 190,000 words. That is longer than most novels. But raw capacity is not the story — the story is which multi-step workflows collapse into a single call.",
      },
      { type: "h2", text: "The workflows that change" },
      {
        type: "list",
        items: [
          "Whole-repo code review in a single request",
          "Full-book editing without chunking",
          "Legal contract diffs across entire agreements",
          "Multi-session research memory without a vector store",
        ],
      },
      { type: "h2", text: "The workflows that don't" },
      {
        type: "p",
        text: "Anything you already solved with retrieval doesn't magically get better. Retrieval + 32K is usually still cheaper than raw 256K. The unlock is problems where retrieval was the wrong tool to begin with.",
      },
      {
        type: "quote",
        text: "Long context isn't a bigger bucket. It's a different shape of problem you can now attempt.",
      },
      { type: "h3", text: "Rule of thumb" },
      {
        type: "p",
        text: "If your task genuinely needs the model to reason across the whole input at once — a merge conflict, a novel's plot consistency, a full codebase migration — long context earns its keep. Otherwise, keep using retrieval.",
      },
    ],
  },
  {
    slug: "refusals-are-a-ux-bug",
    title: "Refusals Are a UX Bug, Not a Safety Feature",
    excerpt:
      "There's a difference between refusing illegal content and refusing productivity. Most consumer models can't tell them apart. Here's what we do differently.",
    author: "The Clear AI Team",
    date: "2026-05-30",
    readingMinutes: 5,
    category: "Product",
    cover: gradientC,
    content: [
      {
        type: "p",
        text: "The vast majority of refusals users hit are not safety events. They are pattern-match failures — the model saw a word it associated with risk and bailed out before checking the actual request.",
      },
      { type: "h2", text: "Categories of refusal" },
      {
        type: "list",
        items: [
          "Correct refusal (strictly illegal content) — rare",
          "Cautious refusal (adult but legal) — very common",
          "Confused refusal (misread the request) — most common",
        ],
      },
      { type: "h2", text: "What Clear AI does" },
      {
        type: "p",
        text: "We run our own evals against the third bucket. If a model refuses a request that a competent human professional would happily answer, we treat it as a failure and route to a different backend.",
      },
      {
        type: "quote",
        text: "The floor is 'no strictly illegal content'. The ceiling is 'answer everything else without a lecture'.",
      },
    ],
  },
  {
    slug: "choosing-between-glm-and-llama",
    title: "GLM-5.1 vs Llama-3.3: Choosing Your Default Model",
    excerpt:
      "Both flagships ship on the Power tier. This is a straight comparison of when each one wins — no marketing, just observed behavior.",
    author: "The Clear AI Team",
    date: "2026-05-18",
    readingMinutes: 7,
    category: "Guides",
    cover: gradientD,
    content: [
      {
        type: "p",
        text: "Both models are on the Power tier, so the practical question is which one to reach for by default. Short answer: GLM-5.1 for structured reasoning, Llama-3.3 for open-ended writing.",
      },
      { type: "h2", text: "GLM-5.1 wins at" },
      {
        type: "list",
        items: [
          "Multi-step math and formal logic",
          "Tool selection when many tools are available",
          "JSON output under a strict schema",
        ],
      },
      { type: "h2", text: "Llama-3.3 wins at" },
      {
        type: "list",
        items: [
          "Long-form prose without slop phrases",
          "Following an unusual persona for many turns",
          "Following instructions that push against safety training",
        ],
      },
      { type: "h3", text: "Our default" },
      {
        type: "p",
        text: "GLM-5.1 as the router default. Llama-3.3 when the request is explicitly creative or when GLM refused a legal-but-edgy request.",
      },
      {
        type: "code",
        lang: "javascript",
        text: `// Router snippet used inside Clear AI
function pickModel(req) {
  if (req.needsSchema) return "glm-5.1";
  if (req.tone === "creative") return "llama-3.3-uncensored";
  if (req.previousRefusal) return "llama-3.3-uncensored";
  return "glm-5.1";
}`,
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getFeaturedPost(): Post {
  return posts.find((p) => p.featured) ?? posts[0];
}

export function getOtherPosts(): Post[] {
  const featuredSlug = getFeaturedPost().slug;
  return posts.filter((p) => p.slug !== featuredSlug);
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
