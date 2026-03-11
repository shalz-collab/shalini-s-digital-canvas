import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Github, Linkedin, Mail, Menu, X, Rocket, Calendar } from "lucide-react";
import VideoBackground from "./VideoBackground";
import ContactModal from "./ContactModal";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "Know Me" },
    { path: "/projects", label: "Missions" },
    { path: "/blog", label: "Holocron" },
    { path: "/contact", label: "Transmit" },
    { path: "/contact#nebula-rush", label: "Nebula Rush", icon: Rocket },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      <VideoBackground />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-primary/10">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link flex items-center gap-1 ${location.pathname === link.path ? "nav-link-active" : ""}`}
              >
                {link.icon && <link.icon size={14} />}
                {link.label}
              </Link>
            ))}
          </div>

          {/* Action Buttons (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://calendly.com/shalinim1434-sse-saveetha/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-border text-foreground text-xs font-bold rounded tracking-wider uppercase hover:border-primary hover:text-primary transition-all font-display"
            >
              <Calendar size={14} />
              Book a Call
            </a>
            <button
              onClick={() => setContactModalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2 bg-primary text-primary-foreground text-xs font-bold rounded tracking-wider uppercase hover:bg-primary/90 transition-all hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)] font-display"
            >
              <Mail size={14} />
              Transmit
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-foreground hover:text-primary transition-colors p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-primary/10 animate-fade-in">
            <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`nav-link text-sm py-2 flex items-center gap-2 ${location.pathname === link.path ? "nav-link-active" : ""}`}
                >
                  {link.icon && <link.icon size={16} />}
                  {link.label}
                </Link>
              ))}
              <a
                href="https://calendly.com/shalinim1434-sse-saveetha/30min"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-border text-foreground text-xs font-bold rounded tracking-wider uppercase hover:border-primary hover:text-primary transition-all font-display"
              >
                <Calendar size={16} />
                Book a Call
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setContactModalOpen(true);
                }}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-primary text-primary-foreground text-xs font-bold rounded tracking-wider uppercase hover:bg-primary/90 transition-all font-display"
              >
                <Mail size={16} />
                Transmit
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-16 min-h-screen overflow-y-auto">{children}</main>

      {/* Footer */}
      <footer className="border-t border-primary/10 py-8 mt-20 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs font-display tracking-wider uppercase">
            © 2026 Shalini MK · May the Force be with you
          </p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/shalz-collab" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/shalini-mk-b3b67b273" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:shalinimuthukumar1434@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>

      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} />
    </div>
  );
};

export default Layout;
