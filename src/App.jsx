import { useState, useEffect } from "react";

const PROJECTS = [
  {
    title: "AIESEC Ruhuna Web Application",
    desc: "A complete event & member management system with role-based dashboards, merchandise module, and registration analytics.",
    tech: ["React", "Spring Boot", "MYSQL"],
    link: "https://github.com/hewageumesha/AIESEC_Ruhuna",
    
  },
  {
    title: "Medicine Stock Management System",
    desc: "A modern full-stack inventory system to computerize PHI medicine distribution with batch tracking, stock alerts, and a clean UI.",
    tech: ["React", "Node.js", "JavaScript"],
    link: "https://github.com/ishara425/medicine-stock-management",
    
  },
  {
    title: "FOT-Tecmis",
    desc: "A collaborative Java-based technical management information system for the Faculty of Technology.",
    tech: ["Java"],
    link: "https://github.com/ishara425",
    
  },
  {
    title: "Terraform Infrastructure",
    desc: "Cloud infrastructure automation using Terraform — provisioning and managing cloud resources as code.",
    tech: ["Terraform", "Cloud", "IaC"],
    link: "https://github.com/ishara425/terraform-infra",
    
  },
];

const SKILLS = [
  { name: "React.js", icon: "⚛️" },
  { name: "Node.js", icon: "🟢" },
  { name: "Java", icon: "☕" },
  { name: "Spring Boot", icon: "🍃" },
  { name: "JavaScript", icon: "🟨" },
  { name: "MYSQL", icon: "🐘" },
  { name: "Terraform", icon: "🏗️" },
  { name: "Cloud (AWS)", icon: "☁️" },
  { name: "Git & GitHub", icon: "🐙" },
  { name: "AI / ML", icon: "🤖" },
];

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [typed, setTyped] = useState("");
  const [cursor, setCursor] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const roles = ["Full Stack Developer", "ICT Undergraduate", "Cloud Enthusiast", "AI Explorer"];
  const [rIdx, setRIdx] = useState(0);
  const [cIdx, setCIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const cur = roles[rIdx];
    const t = setTimeout(() => {
      if (!deleting && cIdx < cur.length) { setTyped(cur.slice(0, cIdx + 1)); setCIdx(c => c + 1); }
      else if (!deleting && cIdx === cur.length) { setTimeout(() => setDeleting(true), 1600); }
      else if (deleting && cIdx > 0) { setTyped(cur.slice(0, cIdx - 1)); setCIdx(c => c - 1); }
      else { setDeleting(false); setRIdx(i => (i + 1) % roles.length); }
    }, deleting ? 45 : 90);
    return () => clearTimeout(t);
  }, [cIdx, deleting, rIdx]);

  useEffect(() => {
    const b = setInterval(() => setCursor(v => !v), 500);
    return () => clearInterval(b);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) { setActiveSection(id); break; }
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleCVDownload = () => {
    alert("CV will be available soon! Please contact me directly in the meantime.");
  };

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: "#0d0d0d", color: "#e2e2e2", minHeight: "100vh" }}>
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Fira+Code:wght@400;500&display=swap" rel="stylesheet" />
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-thumb { background: #f97316; border-radius: 4px; }

        @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes glowRing { 0%,100% { box-shadow: 0 0 18px rgba(249,115,22,0.35); } 50% { box-shadow: 0 0 38px rgba(249,115,22,0.65); } }
        @keyframes ping { 0% { transform: scale(1); opacity: 1; } 75%,100% { transform: scale(2.2); opacity: 0; } }

        .fade-up { animation: fadeUp 0.7s ease both; }
        .d1 { animation-delay: 0.05s; } .d2 { animation-delay: 0.2s; }
        .d3 { animation-delay: 0.35s; } .d4 { animation-delay: 0.5s; }
        .d5 { animation-delay: 0.65s; }

        .nav-item { cursor: pointer; font-size: 12px; font-weight: 700; color: #666;
          transition: color 0.2s; letter-spacing: 0.07em; text-transform: uppercase; }
        .nav-item:hover, .nav-item.active { color: #f97316; }

        .btn-orange { background: #f97316; color: white; border: none; cursor: pointer;
          font-family: inherit; font-weight: 700; font-size: 14px;
          padding: 12px 26px; border-radius: 8px; transition: all 0.25s;
          display: inline-flex; align-items: center; gap: 8px; }
        .btn-orange:hover { background: #ea580c; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(249,115,22,0.3); }

        .btn-ghost { background: transparent; color: #f97316; border: 1.5px solid rgba(249,115,22,0.5);
          cursor: pointer; font-family: inherit; font-weight: 700; font-size: 14px;
          padding: 12px 26px; border-radius: 8px; transition: all 0.25s;
          display: inline-flex; align-items: center; gap: 8px; }
        .btn-ghost:hover { background: rgba(249,115,22,0.07); border-color: #f97316; transform: translateY(-2px); }

        .card { background: #141414; border: 1px solid #222; border-radius: 14px; transition: all 0.3s; }
        .card:hover { border-color: rgba(249,115,22,0.4); transform: translateY(-5px); box-shadow: 0 20px 44px rgba(0,0,0,0.5); }

        .skill-pill { background: #141414; border: 1px solid #222; border-radius: 100px;
          padding: 9px 18px; font-size: 13px; font-weight: 600; color: #bbb;
          display: inline-flex; align-items: center; gap: 8px; transition: all 0.25s; }
        .skill-pill:hover { border-color: #f97316; color: #f97316; background: rgba(249,115,22,0.05); }

        .social-link { display: flex; align-items: center; gap: 12px; padding: 14px 18px;
          border-radius: 10px; background: #141414; border: 1px solid #222;
          color: #ccc; font-size: 14px; font-weight: 600; text-decoration: none; transition: all 0.25s; }
        .social-link:hover { border-color: #f97316; color: #f97316; transform: translateX(5px); }

        .tag { font-size: 11px; font-family: 'Fira Code', monospace;
          background: rgba(249,115,22,0.09); color: #fb923c;
          border: 1px solid rgba(249,115,22,0.22); padding: 3px 10px; border-radius: 4px; }

        .photo-wrap { width: 200px; height: 200px; border-radius: 50%;
          border: 3px solid #f97316; overflow: hidden; flex-shrink: 0;
          animation: glowRing 3s ease-in-out infinite, float 5s ease-in-out infinite;
          background: #1a1a1a; display: flex; align-items: center; justify-content: center; }

        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hero-layout { flex-direction: column-reverse !important; align-items: center !important; text-align: center; }
          .hero-btns { justify-content: center !important; }
          .projects-grid { grid-template-columns: 1fr !important; }
          .skills-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .about-grid { grid-template-columns: 1fr !important; }
          .footer-inner { flex-direction: column; align-items: center; text-align: center; gap: 16px; }
        }
      `}</style>

      {/* ── NAVBAR ── */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 999,
        background: "rgba(13,13,13,0.92)", backdropFilter: "blur(18px)",
        borderBottom: "1px solid #1c1c1c", padding: "0 6%" }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto", display: "flex",
          alignItems: "center", justifyContent: "space-between", height: "62px" }}>
          <span style={{ fontWeight: 800, fontSize: "17px", cursor: "pointer", letterSpacing: "-0.02em" }}
            onClick={() => scrollTo("home")}>
           
          </span>
          <div className="desktop-nav" style={{ display: "flex", gap: "30px" }}>
            {["home","about","skills","projects","contact"].map(s => (
              <span key={s} className={`nav-item ${activeSection===s?"active":""}`} onClick={() => scrollTo(s)}>{s}</span>
            ))}
          </div>
         
        </div>
      </nav>

      {/* ── HERO ── */}
      <section id="home" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "100px 6% 60px" }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto", width: "100%",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          gap: "48px" }} className="hero-layout">

          {/* Text */}
          <div style={{ flex: 1 }}>
           

            <h1 className="fade-up d2" style={{ fontSize: "clamp(38px, 5.5vw, 68px)", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.03em", marginBottom: "14px" }}>
              Hi, I'm<br />
              <span style={{ color: "#f97316" }}>Ishara</span><br />
              <span style={{ color: "#e8e8e8" }}>Palangasinghe</span>
            </h1>

            <div className="fade-up d3" style={{ fontFamily: "'Fira Code', monospace", fontSize: "clamp(13px, 1.8vw, 17px)", color: "#777", marginBottom: "18px", minHeight: "26px" }}>
              <span style={{ color: "#f97316" }}>$ </span>
              <span style={{ color: "#c8c8c8" }}>{typed}</span>
              <span style={{ opacity: cursor ? 1 : 0, color: "#f97316" }}>▋</span>
            </div>

            <p className="fade-up d4" style={{ fontSize: "15px", color: "#6a6a6a", lineHeight: 1.85, maxWidth: "480px", marginBottom: "30px" }}>
              ICT Undergraduate building modern web apps. Exploring React, Node.js, Java, Spring Boot, Cloud & AI. Open to collaborations and always learning.
            </p>

            <div className="fade-up d5 hero-btns" style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <button className="btn-orange" onClick={() => scrollTo("projects")}>View Projects →</button>
              <button className="btn-ghost" onClick={() => scrollTo("contact")}>Contact Me</button>
              <button className="btn-ghost" onClick={handleCVDownload} style={{ borderStyle: "dashed", opacity: 0.7 }}>CV</button>
            </div>
          </div>

          {/* Photo + Stats */}
          <div className="fade-up d3" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
            <div className="photo-wrap">
              {/* ↓ Replace this src with your actual photo path e.g. src="/photo.jpg" */}
              <img src="/src/assets/ishara.jpeg"
                alt="Ishara Palangasinghe"
                style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
           
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{ padding: "80px 6%", borderTop: "1px solid #1a1a1a" }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <p style={{ fontFamily: "'Fira Code', monospace", fontSize: "12px", color: "#f97316", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "8px" }}>// about me</p>
          <h2 style={{ fontSize: "clamp(28px,4vw,42px)", fontWeight: 800, letterSpacing: "-0.02em" }}>About</h2>
          <div style={{ width: "38px", height: "3px", background: "linear-gradient(90deg,#f97316,transparent)", borderRadius: "2px", marginTop: "10px" }} />

          <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "48px", marginTop: "44px" }}>
            <div>
              <p style={{ fontSize: "15px", color: "#888", lineHeight: 1.9, marginBottom: "18px" }}>
                I'm <span style={{ color: "#f97316", fontWeight: 700 }}>Ishara Palangasinghe</span>, an ICT Undergraduate passionate about full-stack development and cloud technologies.
              </p>
              <p style={{ fontSize: "15px", color: "#888", lineHeight: 1.9, marginBottom: "18px" }}>
                Currently building the <span style={{ color: "#ddd" }}>AIESEC Ruhuna Web App</span> and a <span style={{ color: "#ddd" }}>Medicine Stock Management System</span>. Always learning, always building.
              </p>
              <p style={{ fontSize: "15px", color: "#888", lineHeight: 1.9 }}>
                Open to collaborating on modern web apps and excited about AI intersecting with cloud infrastructure.
              </p>
              <div style={{ marginTop: "28px", display: "flex", flexDirection: "column", gap: "10px" }}>
                {[
                  { icon: "🎓", label: "Degree", val: "BSc. ICT (Undergraduate)" },
                  { icon: "🌍", label: "Location", val: "Sri Lanka" },
                  { icon: "💡", label: "Learning", val: "React · Node · Java · Cloud · AI" },
                  { icon: "🤝", label: "Status", val: "Open to Collaborations" },
                ].map(item => (
                  <div key={item.label} style={{ display: "flex", gap: "12px", fontSize: "13px", alignItems: "flex-start" }}>
                    <span>{item.icon}</span>
                    <span style={{ color: "#444", minWidth: "80px" }}>{item.label}</span>
                    <span style={{ color: "#c8c8c8" }}>{item.val}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <p style={{ fontFamily: "'Fira Code', monospace", fontSize: "11px", color: "#444", marginBottom: "4px" }}>// connect with me</p>
              {[
                { icon: "💼", label: "LinkedIn", sub: "ishara-palangasinghe", href: "https://linkedin.com/in/ishara-palangasinghe" },
                { icon: "🐙", label: "GitHub", sub: "github.com/ishara425", href: "https://github.com/ishara425" },
                { icon: "📧", label: "Email", sub: "ishara425@email.com", href: "mailto:ishara425@email.com" },
              ].map(item => (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="social-link">
                  <span style={{ fontSize: "20px" }}>{item.icon}</span>
                  <div>
                    <div style={{ fontWeight: 700 }}>{item.label}</div>
                    <div style={{ fontSize: "11px", color: "#555" }}>{item.sub}</div>
                  </div>
                  <span style={{ marginLeft: "auto", opacity: 0.3, fontSize: "16px" }}>→</span>
                </a>
              ))}

              {/* CV Card */}
              <div style={{ marginTop: "8px", background: "linear-gradient(135deg, rgba(249,115,22,0.07), rgba(249,115,22,0.02))",
                border: "1px solid rgba(249,115,22,0.22)", borderRadius: "12px", padding: "20px" }}>
                <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "14px" }}>
                  <span style={{ fontSize: "28px" }}>📄</span>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "14px", color: "#f0f0f0" }}>Curriculum Vitae</div>
                    <div style={{ fontSize: "11px", color: "#555", marginTop: "2px" }}>Coming soon</div>
                  </div>
                </div>
                <button className="btn-orange" style={{ width: "100%", justifyContent: "center", fontSize: "13px", padding: "10px" }} onClick={handleCVDownload}>
                  ↓ Download CV
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" style={{ padding: "80px 6%", background: "#090909", borderTop: "1px solid #1a1a1a", borderBottom: "1px solid #1a1a1a" }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <p style={{ fontFamily: "'Fira Code', monospace", fontSize: "12px", color: "#f97316", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "8px" }}>// languages & tools</p>
          <h2 style={{ fontSize: "clamp(28px,4vw,42px)", fontWeight: 800, letterSpacing: "-0.02em" }}>Skills</h2>
          <div style={{ width: "38px", height: "3px", background: "linear-gradient(90deg,#f97316,transparent)", borderRadius: "2px", marginTop: "10px", marginBottom: "36px" }} />
          <div className="skills-grid" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "12px" }}>
            {SKILLS.map(skill => (
              <div key={skill.name} className="skill-pill" style={{ justifyContent: "center" }}>
                <span>{skill.icon}</span>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" style={{ padding: "80px 6%", borderTop: "1px solid #1a1a1a" }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <p style={{ fontFamily: "'Fira Code', monospace", fontSize: "12px", color: "#f97316", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "8px" }}>// featured projects</p>
          <h2 style={{ fontSize: "clamp(28px,4vw,42px)", fontWeight: 800, letterSpacing: "-0.02em" }}>Projects</h2>
          <div style={{ width: "38px", height: "3px", background: "linear-gradient(90deg,#f97316,transparent)", borderRadius: "2px", marginTop: "10px", marginBottom: "40px" }} />

          <div className="projects-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "20px" }}>
            {PROJECTS.map(proj => (
              <div key={proj.title} className="card" style={{ padding: "26px", display: "flex", flexDirection: "column", gap: "14px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div style={{ width: "46px", height: "46px", background: "rgba(249,115,22,0.09)",
                    border: "1px solid rgba(249,115,22,0.2)", borderRadius: "10px",
                    display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px" }}>
                    {proj.emoji}
                  </div>
                  <a href={proj.link} target="_blank" rel="noreferrer"
                    style={{ color: "#444", fontSize: "16px", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={e => e.currentTarget.style.color = "#f97316"}
                    onMouseLeave={e => e.currentTarget.style.color = "#444"}>
                    ↗
                  </a>
                </div>
                <div>
                  <h3 style={{ fontSize: "15px", fontWeight: 700, color: "#efefef", marginBottom: "8px", lineHeight: 1.4 }}>{proj.title}</h3>
                  <p style={{ fontSize: "13px", color: "#666", lineHeight: 1.75 }}>{proj.desc}</p>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "auto" }}>
                  {proj.tech.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
                <a href={proj.link} target="_blank" rel="noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#f97316", fontWeight: 600, textDecoration: "none", transition: "gap 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.gap = "10px"}
                  onMouseLeave={e => e.currentTarget.style.gap = "6px"}>
                  🐙 View on GitHub →
                </a>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "32px" }}>
            <a href="https://github.com/ishara425" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
              <button className="btn-ghost">See all repositories →</button>
            </a>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ padding: "80px 6%", background: "#090909", borderTop: "1px solid #1a1a1a" }}>
        <div style={{ maxWidth: "560px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontFamily: "'Fira Code', monospace", fontSize: "12px", color: "#f97316", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "8px" }}>// get in touch</p>
          <h2 style={{ fontSize: "clamp(28px,4vw,42px)", fontWeight: 800, letterSpacing: "-0.02em" }}>Let's Connect</h2>
          <div style={{ width: "38px", height: "3px", background: "linear-gradient(90deg,#f97316,transparent)", borderRadius: "2px", margin: "10px auto 0" }} />
          <p style={{ fontSize: "15px", color: "#666", lineHeight: 1.8, margin: "24px 0 36px" }}>
            Open to collaborations, internships, or just a chat about tech. Reach out anytime!
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "28px" }}>
            {[
              { icon: "📧", label: "Email", val: "ishara425@email.com", href: "mailto:ishara425@email.com" },
              { icon: "💼", label: "LinkedIn", val: "linkedin.com/in/ishara-palangasinghe", href: "https://linkedin.com/in/ishara-palangasinghe" },
              { icon: "🐙", label: "GitHub", val: "github.com/ishara425", href: "https://github.com/ishara425" },
            ].map(item => (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="social-link">
                <span style={{ fontSize: "22px" }}>{item.icon}</span>
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontWeight: 700 }}>{item.label}</div>
                  <div style={{ fontSize: "12px", color: "#555" }}>{item.val}</div>
                </div>
                <span style={{ marginLeft: "auto", opacity: 0.3 }}>→</span>
              </a>
            ))}
          </div>

          <button className="btn-orange" style={{ width: "100%", justifyContent: "center", padding: "14px" }} onClick={handleCVDownload}>
            ↓ Download My CV
          </button>
          <p style={{ fontSize: "11px", color: "#3a3a3a", marginTop: "8px" }}>PDF will be available soon</p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ borderTop: "1px solid #1a1a1a", padding: "26px 6%" }}>
        <div className="footer-inner" style={{ maxWidth: "1080px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <span style={{ fontWeight: 800, fontSize: "15px" }}>
            <span style={{ color: "#e8e8e8" }}>ishara</span><span style={{ color: "#f97316" }}>.dev</span>
          </span>
          <span style={{ fontSize: "12px", color: "#383838" }}>© 2025 Ishara Palangasinghe · Built with ❤️</span>
          <div style={{ display: "flex", gap: "20px" }}>
            {[{l:"GitHub",h:"https://github.com/ishara425"},{l:"LinkedIn",h:"https://linkedin.com/in/ishara-palangasinghe"},{l:"Email",h:"mailto:ishara425@email.com"}].map(s => (
              <a key={s.l} href={s.h} target="_blank" rel="noreferrer"
                style={{ fontSize: "12px", color: "#444", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => e.target.style.color = "#f97316"}
                onMouseLeave={e => e.target.style.color = "#444"}>{s.l}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}