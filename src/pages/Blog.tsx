import { Calendar, Clock, ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";

const blogPosts = [
  {
    id: 1,
    title: "Understanding Homomorphic Encryption for Cloud Security",
    excerpt:
      "Explore how homomorphic encryption enables privacy-preserving computations on encrypted data, revolutionizing cloud security.",
    date: "Jan 10, 2026",
    readTime: "8 min read",
    category: "Security",
    url: "https://www.cloudflare.com/learning/security/what-is-homomorphic-encryption/",
  },
  {
    id: 2,
    title: "AI Revolution 2026: What's Changing This Year",
    excerpt:
      "From GPT-5 rumors to autonomous agents - a deep dive into the AI developments reshaping technology and society in 2026.",
    date: "Jan 11, 2026",
    readTime: "10 min read",
    category: "Current Affairs",
    url: "https://www.technologyreview.com/topic/artificial-intelligence/",
  },
  {
    id: 3,
    title: "India's Digital Public Infrastructure: A Global Model",
    excerpt:
      "How India's UPI, Aadhaar, and ONDC are becoming blueprints for digital transformation worldwide.",
    date: "Jan 8, 2026",
    readTime: "7 min read",
    category: "Current Affairs",
    url: "https://www.weforum.org/agenda/2023/09/india-digital-public-infrastructure/",
  },
  {
    id: 4,
    title: "The Future of Agentic AI in Healthcare",
    excerpt:
      "How autonomous AI agents are transforming patient care through proactive health monitoring and intelligent decision-making.",
    date: "Dec 28, 2025",
    readTime: "10 min read",
    category: "AI",
    url: "https://www.nature.com/articles/d41586-024-00135-7",
  },
  {
    id: 5,
    title: "Climate Tech 2026: Innovations Fighting Global Warming",
    excerpt:
      "Latest breakthroughs in carbon capture, renewable energy, and sustainable tech that are making a real impact.",
    date: "Jan 6, 2026",
    readTime: "9 min read",
    category: "Current Affairs",
    url: "https://www.bbc.com/future/article/20231114-climate-tech",
  },
  {
    id: 6,
    title: "Building Modern React Applications with TypeScript",
    excerpt:
      "A comprehensive guide to structuring React applications with TypeScript for better type safety and developer experience.",
    date: "Jan 5, 2026",
    readTime: "12 min read",
    category: "Development",
    url: "https://react.dev/learn/typescript",
  },
  {
    id: 7,
    title: "Space Exploration Updates: Mars Mission 2026",
    excerpt:
      "NASA and SpaceX's latest milestones in the journey to Mars and what it means for humanity's future in space.",
    date: "Jan 3, 2026",
    readTime: "8 min read",
    category: "Current Affairs",
    url: "https://www.nasa.gov/humans-in-space/moon-to-mars/",
  },
  {
    id: 8,
    title: "Designing for Mental Wellness: UI/UX Best Practices",
    excerpt:
      "Key principles for creating calming, supportive interfaces in mental health applications that prioritize user wellbeing.",
    date: "Dec 20, 2025",
    readTime: "6 min read",
    category: "Design",
    url: "https://uxdesign.cc/designing-for-mental-health-5-principles-5f1ad5b3c9c4",
  },
];

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    Security: "bg-red-500/10 text-red-400 border-red-500/20",
    Development: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    AI: "bg-green-500/10 text-green-400 border-green-500/20",
    Design: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    "Current Affairs": "bg-orange-500/10 text-orange-400 border-orange-500/20",
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
              <h1 className="section-title">Blog & Current Affairs</h1>
              <p className="text-muted-foreground leading-relaxed">
                Thoughts, tutorials, current affairs, and insights on technology,
                AI, and the world around us.
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
