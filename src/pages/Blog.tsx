import { Calendar, Clock, ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";

const blogPosts = [
  {
    id: 1,
    title: "Apple Vision Pro 2: What We Know So Far in 2026",
    excerpt:
      "Apple's next-gen mixed reality headset promises lighter design, improved displays, and new developer tools for spatial computing.",
    date: "Jan 13, 2026",
    readTime: "7 min read",
    category: "Tech",
    url: "https://www.apple.com/apple-vision-pro/",
  },
  {
    id: 2,
    title: "OpenAI's GPT-5: The Next Leap in AI Reasoning",
    excerpt:
      "Early reports suggest GPT-5 brings unprecedented reasoning capabilities and multimodal understanding to AI assistants.",
    date: "Jan 12, 2026",
    readTime: "9 min read",
    category: "AI",
    url: "https://openai.com/",
  },
  {
    id: 3,
    title: "React 19 Features You Should Know About",
    excerpt:
      "From Actions to improved Suspense - explore the game-changing features in the latest React release.",
    date: "Jan 11, 2026",
    readTime: "10 min read",
    category: "Development",
    url: "https://react.dev/blog",
  },
  {
    id: 4,
    title: "NVIDIA's Blackwell GPUs: Reshaping AI Training",
    excerpt:
      "The new Blackwell architecture delivers 4x faster AI training, making large language models more accessible than ever.",
    date: "Jan 10, 2026",
    readTime: "8 min read",
    category: "Tech",
    url: "https://www.nvidia.com/en-us/data-center/",
  },
  {
    id: 5,
    title: "GitHub Copilot X: AI-Powered Development Gets Smarter",
    excerpt:
      "The latest Copilot update brings voice commands, automated PR reviews, and context-aware code explanations.",
    date: "Jan 9, 2026",
    readTime: "6 min read",
    category: "Development",
    url: "https://github.com/features/copilot",
  },
  {
    id: 6,
    title: "Tesla Optimus Gen 3: Humanoid Robots in Production",
    excerpt:
      "Tesla's latest humanoid robot is now being deployed in factories, marking a new era in automation.",
    date: "Jan 8, 2026",
    readTime: "7 min read",
    category: "Tech",
    url: "https://www.tesla.com/optimus",
  },
  {
    id: 7,
    title: "The Future of Agentic AI in Healthcare",
    excerpt:
      "How autonomous AI agents are transforming patient care through proactive health monitoring and intelligent decision-making.",
    date: "Jan 7, 2026",
    readTime: "10 min read",
    category: "AI",
    url: "https://www.nature.com/articles/d41586-024-00135-7",
  },
  {
    id: 8,
    title: "Tailwind CSS v4: Performance & DX Improvements",
    excerpt:
      "The new Tailwind release brings native CSS variables, faster builds, and improved developer experience.",
    date: "Jan 6, 2026",
    readTime: "6 min read",
    category: "Development",
    url: "https://tailwindcss.com/blog",
  },
];

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    Tech: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    Development: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    AI: "bg-green-500/10 text-green-400 border-green-500/20",
    Design: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  };
  return colors[category] || "bg-primary/10 text-primary border-primary/20";
};

const Blog = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-2xl mb-12">
              <h1 className="section-title">Tech Blog</h1>
              <p className="text-muted-foreground leading-relaxed">
                Latest updates, tutorials, and insights on technology,
                AI, and software development.
              </p>
            </div>
          </ScrollReveal>

          {/* Featured Post */}
          <ScrollReveal delay={0.1}>
            <div className="mb-12">
              <a
                href={blogPosts[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="block project-card group p-8 cursor-pointer hover:border-primary/50 transition-all"
              >
                <span
                  className={`inline-block px-3 py-1 text-xs font-medium rounded-full border mb-4 ${getCategoryColor(
                    blogPosts[0].category
                  )}`}
                >
                  {blogPosts[0].category}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {blogPosts[0].title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6 max-w-3xl">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {blogPosts[0].date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {blogPosts[0].readTime}
                    </span>
                  </div>
                  <span className="flex items-center gap-2 text-primary group-hover:gap-3 transition-all">
                    Read Article
                    <ExternalLink size={16} />
                  </span>
                </div>
              </a>
            </div>
          </ScrollReveal>

          {/* Other Posts Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {blogPosts.slice(1).map((post, index) => (
              <ScrollReveal key={post.id} delay={(index + 2) * 0.08}>
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block project-card group h-full cursor-pointer hover:border-primary/50 transition-all"
                >
                  <span
                    className={`inline-block px-3 py-1 text-xs font-medium rounded-full border mb-4 ${getCategoryColor(
                      post.category
                    )}`}
                  >
                    {post.category}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {post.readTime}
                      </span>
                    </div>
                    <ExternalLink
                      size={14}
                      className="text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>

          {/* CTA */}
          <ScrollReveal delay={0.6}>
            <div className="text-center mt-16">
              <p className="text-muted-foreground mb-4">
                Want to collaborate or discuss ideas?
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)]"
              >
                Get in Touch
                <ArrowRight size={18} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
