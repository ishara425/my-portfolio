import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["Home", "About", "Skills", "Projects", "Contact"];

const SKILLS = [
  { name: "AWS", icon: "☁️", level: 90, category: "Cloud" },
  { name: "Azure", icon: "🔷", level: 85, category: "Cloud" },
  { name: "Google Cloud", icon: "🌐", level: 80, category: "Cloud" },
  { name: "Terraform", icon: "🏗️", level: 88, category: "IaC" },
  { name: "Kubernetes", icon: "⚙️", level: 82, category: "DevOps" },
  { name: "Docker", icon: "🐳", level: 90, category: "DevOps" },
  { name: "CI/CD Pipelines", icon: "🔄", level: 85, category: "DevOps" },
  { name: "Linux", icon: "🐧", level: 92, category: "Systems" },
  { name: "Python", icon: "🐍", level: 80, category: "Dev" },
  { name: "Networking", icon: "🔗", level: 78, category: "Infra" },
  { name: "Security & IAM", icon: "🔐", level: 83, category: "Security" },
  { name: "Monitoring", icon: "📊", level: 79, category: "Ops" },
];

const PROJECTS = [
  {
    title: "Multi-Region AWS Infrastructure",
    description: "Designed and deployed a fault-tolerant, multi-region AWS architecture using Terraform with auto-scaling, load balancing, and disaster recovery strategies.",
    tags: ["AWS", "Terraform", "EC2", "RDS", "Route 53"],
    icon: "🌍",
    status: "Production",
  },
  {
    title: "Kubernetes Microservices Platform",
    description: "Built a production-grade Kubernetes cluster on GKE with Helm charts, ingress controllers, and GitOps-based deployment pipelines using ArgoCD.",
    tags: ["GKE", "Kubernetes", "Helm", "ArgoCD", "Docker"],
    icon: "⚙️",
    status: "Live",
  },
  {
    title: "Cloud Cost Optimization Tool",
    description: "Developed an automated AWS cost monitoring and optimization system that identifies idle resources and rightsizes instances, reducing cloud spend by 35%.",
    tags: ["AWS Lambda", "Python", "CloudWatch", "SNS"],
    icon: "💰",
    status: "Active",
  },
  {
    title: "Zero-Trust Security Framework",
    description: "Implemented a zero-trust network architecture on Azure with conditional access policies, microsegmentation, and automated compliance auditing.",
    tags: ["Azure", "Zero Trust", "IAM", "Security Center"],
    icon: "🔐",
    status: "Enterprise",
  },
];

const CERTIFICATIONS = [
  { name: "AWS Solutions Architect", org: "Amazon Web Services", color: "#FF9900" },
  { name: "Azure Administrator", org: "Microsoft", color: "#0078D4" },
  { name: "CKA - Kubernetes", org: "CNCF", color: "#326CE5" },
  { name: "HashiCorp Terraform", org: "HashiCorp", color: "#844FBA" },
];

export default function Portfolio() {
  const [typedText, setTypedText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [visibleSkills, setVisibleSkills] = useState(false);
  const skillsRef = useRef(null);

  const titles = ["Cloud Engineer", "DevOps Specialist", "Infrastructure Architect", "AWS Enthusiast"];
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIndex];
    const speed = deleting ? 50 : 100;
    const timer = setTimeout(() => {
      if (!deleting && charIndex < current.length) {
        setTypedText(current.slice(0, charIndex + 1));
        setCharIndex(c => c + 1);
      } else if (deleting && charIndex > 0) {
        setTypedText(current.slice(0, charIndex - 1));
        setCharIndex(c => c - 1);
      } else if (!deleting && charIndex === current.length) {
        setTimeout(() => setDeleting(true), 1800);
      } else if (deleting && charIndex === 0) {
        setDeleting(false);
        setTitleIndex(i => (i + 1) % titles.length);
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [charIndex, deleting, titleIndex]);

  useEffect(() => {
    const blink = setInterval(() => setCursorVisible(v => !v), 530);
    return () => clearInterval(blink);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisibleSkills(true); }, { threshold: 0.2 });
    if (skillsRef.current) obs.observe(skillsRef.current);
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ fontFamily: "'Syne', sans-serif", background: "#0a0a0a", color: "#e8e8e8", minHeight: "100vh", overflowX: "hidden" }}>
      <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet" />

      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0a0a0a; }
        ::-webkit-scrollbar-thumb { background: #f97316; border-radius: 2px; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes float { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-12px); } }
        @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.4; } }
        @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
        @keyframes rotateSlow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes barGrow { from { width: 0; } to { width: var(--target-w); } }
        .hero-anim { animation: fadeUp 0.9s ease forwards; }
        .hero-anim-2 { animation: fadeUp 0.9s 0.2s ease both; }
        .hero-anim-3 { animation: fadeUp 0.9s 0.4s ease both; }
        .hero-anim-4 { animation: fadeUp 0.9s 0.6s ease both; }
        .float-el { animation: float 5s ease-in-out infinite; }
        .nav-link { position: relative; cursor: pointer; transition: color 0.25s; }
        .nav-link::after { content: ''; position: absolute; left: 0; bottom: -3px; width: 0; height: 2px; background: #f97316; transition: width 0.3s; }
        .nav-link:hover::after { width: 100%; }
        .nav-link:hover { color: #f97316; }
        .card-hover { transition: transform 0.3s, box-shadow 0.3s; }
        .card-hover:hover { transform: translateY(-6px); box-shadow: 0 20px 50px rgba(249,115,22,0.15); }
        .btn-primary { background: linear-gradient(135deg, #f97316, #ea580c); border: none; cursor: pointer; transition: all 0.3s; position: relative; overflow: hidden; }
        .btn-primary::after { content: ''; position: absolute; inset: 0; background: linear-gradient(135deg, #ea580c, #c2410c); opacity: 0; transition: opacity 0.3s; }
        .btn-primary:hover::after { opacity: 1; }
        .btn-primary span { position: relative; z-index: 1; }
        .btn-outline { background: transparent; border: 1.5px solid #f97316; cursor: pointer; transition: all 0.3s; color: #f97316; }
        .btn-outline:hover { background: rgba(249,115,22,0.1); }
        .tag { background: rgba(249,115,22,0.12); border: 1px solid rgba(249,115,22,0.3); color: #fb923c; border-radius: 4px; padding: 3px 10px; font-size: 11px; font-family: 'JetBrains Mono', monospace; }
        .section-enter { animation: fadeUp 0.7s ease forwards; }
        .grid-bg { background-image: linear-gradient(rgba(249,115,22,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.04) 1px, transparent 1px); background-size: 50px 50px; }
        .glow-text { text-shadow: 0 0 40px rgba(249,115,22,0.4); }
        .shimmer-text { background: linear-gradient(90deg, #f97316, #fbbf24, #f97316); background-size: 200% auto; -webkit-background-clip: text; -webkit-text-fill-color: transparent; animation: shimmer 3s linear infinite; }
        .cert-card:hover { transform: scale(1.03); border-color: rgba(249,115,22,0.5) !important; }
        .cert-card { transition: all 0.3s; }
        .orbit-ring { border: 1px solid rgba(249,115,22,0.15); border-radius: 50%; position: absolute; }
        input, textarea { outline: none; font-family: inherit; }
        input:focus, textarea:focus { border-color: #f97316 !important; }
      `}</style>

      {/* NAVBAR */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(10,10,10,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(249,115,22,0.1)" : "none",
        transition: "all 0.4s", padding: "18px 5%", display: "flex", alignItems: "center", justifyContent: "space-between"
      }}>
        <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "20px" }}>
          <span style={{ color: "#e8e8e8" }}>ishara</span>
          <span style={{ color: "#f97316" }}>.cloud</span>
        </div>
        <div style={{ display: "flex", gap: "36px", alignItems: "center" }}>
          {NAV_LINKS.map(link => (
            <span key={link} className="nav-link" onClick={() => scrollTo(link)} style={{ fontSize: "14px", fontWeight: 600, color: "#aaa", letterSpacing: "0.05em" }}>{link}</span>
          ))}
        </div>
        <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "rgba(249,115,22,0.15)", border: "1px solid rgba(249,115,22,0.3)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: "12px", fontFamily: "'JetBrains Mono', monospace", color: "#f97316" }}>
          ◎
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="grid-bg" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "0 5%", position: "relative", overflow: "hidden" }}>
        {/* Orbit decorations */}
        <div className="orbit-ring" style={{ width: "600px", height: "600px", top: "50%", right: "-100px", transform: "translateY(-50%)", animation: "rotateSlow 30s linear infinite" }} />
        <div className="orbit-ring" style={{ width: "400px", height: "400px", top: "50%", right: "50px", transform: "translateY(-50%)", animation: "rotateSlow 20s linear infinite reverse" }} />

        {/* Glow blobs */}
        <div style={{ position: "absolute", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)", top: "50%", left: "30%", transform: "translate(-50%,-50%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: "760px", position: "relative", zIndex: 2 }}>
          <div className="hero-anim" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.25)", borderRadius: "100px", padding: "6px 16px", marginBottom: "28px" }}>
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#f97316", animation: "pulse 2s infinite", display: "inline-block" }} />
            <span style={{ fontSize: "12px", color: "#fb923c", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.08em" }}>Available for Cloud Roles</span>
          </div>

          <h1 className="hero-anim-2" style={{ fontSize: "clamp(44px, 7vw, 88px)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: "20px" }}>
            Hi, I'm<br />
            <span className="shimmer-text">Ishara</span><br />
            <span style={{ color: "#e8e8e8" }}>Palangasinghe</span>
          </h1>

          <div className="hero-anim-3" style={{ fontSize: "clamp(18px, 2.5vw, 26px)", fontFamily: "'JetBrains Mono', monospace", color: "#aaa", marginBottom: "24px", height: "40px" }}>
            <span style={{ color: "#f97316" }}>$ </span>
            <span style={{ color: "#e8e8e8" }}>{typedText}</span>
            <span style={{ opacity: cursorVisible ? 1 : 0, color: "#f97316" }}>|</span>
          </div>

          <p className="hero-anim-3" style={{ fontSize: "16px", color: "#888", lineHeight: 1.8, maxWidth: "580px", marginBottom: "40px" }}>
            Passionate about designing and deploying scalable, resilient cloud infrastructure. Specializing in AWS, Azure, Kubernetes, and Infrastructure as Code — turning complex architectural challenges into elegant cloud solutions.
          </p>

          <div className="hero-anim-4" style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <button className="btn-primary" onClick={() => scrollTo("Projects")} style={{ padding: "14px 32px", borderRadius: "8px", fontWeight: 700, fontSize: "15px", color: "white", letterSpacing: "0.02em" }}>
              <span>View Projects →</span>
            </button>
            <button className="btn-outline" onClick={() => scrollTo("Contact")} style={{ padding: "14px 32px", borderRadius: "8px", fontWeight: 700, fontSize: "15px", letterSpacing: "0.02em" }}>
              Contact Me
            </button>
          </div>

          <div className="hero-anim-4" style={{ display: "flex", gap: "32px", marginTop: "52px", paddingTop: "36px", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
            {[{ v: "3+", l: "Years Experience" }, { v: "20+", l: "Cloud Projects" }, { v: "4", l: "Certifications" }].map(s => (
              <div key={s.l}>
                <div style={{ fontSize: "32px", fontWeight: 800, color: "#f97316" }}>{s.v}</div>
                <div style={{ fontSize: "12px", color: "#666", marginTop: "4px" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating cloud icon cluster */}
        <div className="float-el" style={{ position: "absolute", right: "8%", top: "50%", transform: "translateY(-50%)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", opacity: 0.9 }}>
          {["☁️", "⚙️", "🔐", "📦", "🌐", "🔄"].map((icon, i) => (
            <div key={i} style={{
              width: "72px", height: "72px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(249,115,22,0.15)",
              borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "28px",
              animationDelay: `${i * 0.3}s`, backdropFilter: "blur(10px)",
              animation: `float ${4 + i * 0.5}s ease-in-out infinite`
            }}>{icon}</div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: "100px 5%", maxWidth: "1200px", margin: "0 auto" }}>
        <SectionHeader label="about.me" title="Who I Am" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center", marginTop: "56px" }}>
          <div>
            <p style={{ fontSize: "17px", color: "#aaa", lineHeight: 1.9, marginBottom: "24px" }}>
              I'm <span style={{ color: "#f97316", fontWeight: 700 }}>Ishara Palangasinghe</span>, a Cloud Engineer with a strong foundation in designing, deploying, and managing cloud-native infrastructure at scale.
            </p>
            <p style={{ fontSize: "17px", color: "#aaa", lineHeight: 1.9, marginBottom: "24px" }}>
              My expertise spans multi-cloud environments (AWS, Azure, GCP), container orchestration with Kubernetes, and Infrastructure as Code using Terraform. I thrive on solving complex infrastructure challenges and automating everything possible.
            </p>
            <p style={{ fontSize: "17px", color: "#aaa", lineHeight: 1.9, marginBottom: "36px" }}>
              When I'm not architecting cloud solutions, I'm exploring new DevOps tooling, contributing to open-source projects, or mentoring aspiring cloud engineers.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { label: "📍 Location", value: "Sri Lanka" },
                { label: "🎓 Education", value: "BSc. Computer Science" },
                { label: "💼 Status", value: "Open to Opportunities" },
                { label: "🌐 Focus", value: "Cloud & DevOps Engineering" },
              ].map(item => (
                <div key={item.label} style={{ display: "flex", gap: "16px", fontSize: "14px" }}>
                  <span style={{ color: "#666", minWidth: "140px", fontFamily: "'JetBrains Mono', monospace" }}>{item.label}</span>
                  <span style={{ color: "#e8e8e8" }}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "13px", background: "#111", border: "1px solid rgba(249,115,22,0.2)", borderRadius: "12px", overflow: "hidden" }}>
              <div style={{ background: "#1a1a1a", padding: "12px 16px", display: "flex", gap: "8px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                {["#ff5f57", "#febc2e", "#28c840"].map(c => <div key={c} style={{ width: "12px", height: "12px", borderRadius: "50%", background: c }} />)}
                <span style={{ marginLeft: "8px", color: "#555", fontSize: "12px" }}>ishara@cloud ~ profile.yml</span>
              </div>
              <div style={{ padding: "24px", lineHeight: 2 }}>
                {[
                  { key: "name", val: '"Ishara Palangasinghe"', color: "#fbbf24" },
                  { key: "role", val: '"Cloud Engineer"', color: "#34d399" },
                  { key: "clouds", val: '["AWS", "Azure", "GCP"]', color: "#60a5fa" },
                  { key: "tools", val: '["Terraform", "K8s", "Docker"]', color: "#60a5fa" },
                  { key: "languages", val: '["Python", "Bash", "YAML"]', color: "#60a5fa" },
                  { key: "mindset", val: '"automate_everything: true"', color: "#c084fc" },
                  { key: "available", val: "true", color: "#f97316" },
                ].map(line => (
                  <div key={line.key}>
                    <span style={{ color: "#f97316" }}>{line.key}</span>
                    <span style={{ color: "#666" }}>: </span>
                    <span style={{ color: line.color }}>{line.val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certs */}
            <div style={{ marginTop: "24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              {CERTIFICATIONS.map(cert => (
                <div key={cert.name} className="cert-card" style={{ background: "#111", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "10px", padding: "14px 16px" }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: cert.color, marginBottom: "8px" }} />
                  <div style={{ fontSize: "12px", fontWeight: 700, color: "#e8e8e8", lineHeight: 1.4 }}>{cert.name}</div>
                  <div style={{ fontSize: "11px", color: "#555", marginTop: "3px" }}>{cert.org}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" ref={skillsRef} style={{ padding: "100px 5%", background: "rgba(249,115,22,0.02)", borderTop: "1px solid rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <SectionHeader label="tech.stack" title="Skills & Expertise" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "16px", marginTop: "56px" }}>
            {SKILLS.map((skill, i) => (
              <div key={skill.name} className="card-hover" style={{ background: "#111", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "12px", padding: "20px 24px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                  <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                    <span style={{ fontSize: "20px" }}>{skill.icon}</span>
                    <span style={{ fontWeight: 700, fontSize: "14px" }}>{skill.name}</span>
                  </div>
                  <span className="tag">{skill.category}</span>
                </div>
                <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: "100px", height: "5px", overflow: "hidden" }}>
                  <div style={{
                    height: "100%", borderRadius: "100px",
                    background: "linear-gradient(90deg, #f97316, #fbbf24)",
                    width: visibleSkills ? `${skill.level}%` : "0%",
                    transition: `width 1.2s ${i * 0.07}s ease`,
                  }} />
                </div>
                <div style={{ textAlign: "right", fontSize: "11px", color: "#666", marginTop: "6px", fontFamily: "'JetBrains Mono', monospace" }}>{skill.level}%</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ padding: "100px 5%", maxWidth: "1200px", margin: "0 auto" }}>
        <SectionHeader label="my.work" title="Featured Projects" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(520px, 1fr))", gap: "24px", marginTop: "56px" }}>
          {PROJECTS.map((proj, i) => (
            <div key={proj.title} className="card-hover" style={{ background: "#111", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "16px", padding: "32px", display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div style={{ width: "52px", height: "52px", background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.25)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px" }}>{proj.icon}</div>
                <span style={{ background: "rgba(52,211,153,0.1)", border: "1px solid rgba(52,211,153,0.25)", color: "#34d399", fontSize: "11px", padding: "4px 12px", borderRadius: "100px", fontFamily: "'JetBrains Mono', monospace" }}>● {proj.status}</span>
              </div>
              <div>
                <h3 style={{ fontSize: "20px", fontWeight: 800, marginBottom: "10px" }}>{proj.title}</h3>
                <p style={{ fontSize: "14px", color: "#777", lineHeight: 1.8 }}>{proj.description}</p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "auto" }}>
                {proj.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
              <div style={{ display: "flex", gap: "12px", marginTop: "8px" }}>
                <button className="btn-outline" style={{ padding: "8px 20px", borderRadius: "6px", fontSize: "13px", fontWeight: 600, fontFamily: "'Syne', sans-serif" }}>View Details</button>
                <button className="btn-primary" style={{ padding: "8px 20px", borderRadius: "6px", fontSize: "13px", fontWeight: 600, fontFamily: "'Syne', sans-serif", color: "white" }}><span>GitHub →</span></button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "100px 5%", background: "rgba(249,115,22,0.02)", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <SectionHeader label="get.in.touch" title="Let's Build Something" centered />
          <p style={{ color: "#777", fontSize: "16px", lineHeight: 1.8, margin: "24px auto 52px", maxWidth: "520px" }}>
            Looking for a Cloud Engineer to architect your next big infrastructure project? Let's connect and discuss how I can help.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "40px" }}>
            {[{ label: "📧 Email", value: "ishara@cloud.dev", icon: "✉" }, { label: "💼 LinkedIn", value: "linkedin.com/in/ishara-p", icon: "in" }, { label: "🐙 GitHub", value: "github.com/ishara-p", icon: "⎔" }, { label: "📍 Location", value: "Sri Lanka (Remote Ready)", icon: "◎" }].map(item => (
              <div key={item.label} className="card-hover cert-card" style={{ background: "#111", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "12px", padding: "20px", textAlign: "left" }}>
                <div style={{ fontSize: "11px", color: "#555", marginBottom: "8px", fontFamily: "'JetBrains Mono', monospace" }}>{item.label}</div>
                <div style={{ fontSize: "14px", color: "#e8e8e8", fontWeight: 600 }}>{item.value}</div>
              </div>
            ))}
          </div>

          <div style={{ background: "#111", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "16px", padding: "36px", textAlign: "left" }}>
            <h3 style={{ fontSize: "20px", fontWeight: 800, marginBottom: "24px", color: "#f97316" }}>Send a Message</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
              {["Your Name", "Your Email"].map(ph => (
                <input key={ph} placeholder={ph} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px", padding: "14px 16px", color: "#e8e8e8", fontSize: "14px", fontFamily: "'Syne', sans-serif", transition: "border-color 0.3s" }} />
              ))}
            </div>
            <input placeholder="Subject" style={{ width: "100%", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px", padding: "14px 16px", color: "#e8e8e8", fontSize: "14px", fontFamily: "'Syne', sans-serif", marginBottom: "16px", transition: "border-color 0.3s" }} />
            <textarea placeholder="Your message..." rows={5} style={{ width: "100%", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px", padding: "14px 16px", color: "#e8e8e8", fontSize: "14px", fontFamily: "'Syne', sans-serif", resize: "vertical", marginBottom: "20px", transition: "border-color 0.3s" }} />
            <button className="btn-primary" style={{ padding: "14px 40px", borderRadius: "8px", fontWeight: 700, fontSize: "15px", color: "white", width: "100%" }}>
              <span>Send Message ✈</span>
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "32px 5%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontWeight: 800, fontSize: "16px" }}>
          <span style={{ color: "#e8e8e8" }}>ishara</span><span style={{ color: "#f97316" }}>.cloud</span>
        </div>
        <div style={{ fontSize: "13px", color: "#444" }}>© 2025 Ishara Palangasinghe · Built with ☁️</div>
        <div style={{ display: "flex", gap: "16px" }}>
          {["GitHub", "LinkedIn", "Twitter"].map(s => (
            <span key={s} style={{ fontSize: "12px", color: "#555", cursor: "pointer", transition: "color 0.2s", fontFamily: "'JetBrains Mono', monospace" }}
              onMouseEnter={e => e.target.style.color = "#f97316"}
              onMouseLeave={e => e.target.style.color = "#555"}>{s}</span>
          ))}
        </div>
      </footer>
    </div>
  );
}

function SectionHeader({ label, title, centered }) {
  return (
    <div style={{ textAlign: centered ? "center" : "left" }}>
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", color: "#f97316", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "12px" }}>
        ◆ {label}
      </div>
      <h2 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1 }}>{title}</h2>
      <div style={{ width: "48px", height: "3px", background: "linear-gradient(90deg, #f97316, transparent)", borderRadius: "2px", marginTop: "16px", ...(centered ? { margin: "16px auto 0" } : {}) }} />
    </div>
  );
}