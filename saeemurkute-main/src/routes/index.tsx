import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ArrowRight, Download, Mail, Phone, MapPin, Github, Linkedin,
  Cpu, CircuitBoard, Zap, Wrench, Layers, Activity,
  Send, Briefcase, GraduationCap, Sparkles, Loader2,
} from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import emailjs from "@emailjs/browser";
import portraitAsset from "@/assets/saee-portrait.asset.json";
import waterAlarmSchematic from "@/assets/water-alarm-schematic.png.asset.json";
import waterAlarmPcb from "@/assets/water-alarm-pcb.png.asset.json";
import waterAlarm3d from "@/assets/water-alarm-3d.png.asset.json";
import lm7805Schematic from "@/assets/lm7805-schematic.png.asset.json";
import lm7805Pcb from "@/assets/lm7805-pcb.png.asset.json";
import lm78053d from "@/assets/lm7805-3d.png.asset.json";
import ne555Schematic from "@/assets/ne555-schematic.png.asset.json";
import ne555Pcb from "@/assets/ne555-pcb.png.asset.json";
import ne5553d from "@/assets/ne555-3d.png.asset.json";
import { PCBBackground } from "@/components/PCBBackground";

const EMAILJS_SERVICE_ID = "service_njvwffp";
const EMAILJS_TEMPLATE_ID = "template_19yl1ll";
const EMAILJS_PUBLIC_KEY = "t-Ode05fcZc5fY3bt";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Saee Murkute — PCB & Electronics Design Engineer" },
      { name: "description", content: "MSc Microelectronics student at Newcastle University specializing in PCB design, circuit simulation, embedded systems and 3D PCB visualization." },
      { property: "og:title", content: "Saee Murkute — PCB & Electronics Design Engineer" },
      { property: "og:description", content: "Portfolio: KiCad PCB design, LTspice simulation, ESP32 embedded systems, power electronics." },
    ],
  }),
  component: Portfolio,
});

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster theme="dark" position="bottom-right" />
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Services />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

/* ---------- NAV ---------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    ["Home", "#home"], ["About", "#about"], ["Experience", "#experience"],
    ["Skills", "#skills"], ["Projects", "#projects"], ["Contact", "#contact"],
  ];
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`}>
      <div className={`mx-auto max-w-7xl px-6 transition-all ${scrolled ? "glass rounded-2xl mx-4 md:mx-8" : ""}`}>
        <div className="flex items-center justify-between py-2">
          <a href="#home" className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground">
              <CircuitBoard className="h-5 w-5" />
            </span>
            <span>Saee<span className="text-primary">.</span></span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {links.map(([label, href]) => (
              <a key={href} href={href} className="text-muted-foreground hover:text-foreground transition-colors relative group">
                {label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>
          <a href="#contact" className="hidden md:inline-flex items-center gap-2 rounded-full border border-primary/40 px-5 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition">
            <Send className="h-4 w-4" /> Let's Talk
          </a>
        </div>
      </div>
    </header>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  const highlights = ["PCB Design & Layout", "Circuit Simulation", "Embedded Systems", "Power Electronics", "3D Visualization"];
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-16">
      <PCBBackground />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-primary/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="lg:col-span-7 space-y-7">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-mono uppercase tracking-widest">
            <span className="h-2 w-2 rounded-full bg-accent animate-blink" />
            Available for Engineering Roles
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05]">
            <span className="text-primary glow-text">Hello,</span> I'm Saee<br />
            <span className="text-foreground">PCB & Electronics</span><br />
            <span className="bg-gradient-to-r from-primary via-accent to-cyan bg-clip-text text-transparent">Design Engineer</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            MSc Microelectronics student at Newcastle University. Passionate about schematic capture,
            PCB layout, circuit simulation and 3D verification — building reliable hardware for
            embedded, industrial and power electronics applications. Experienced with KiCad, DesignSpark and LTspice.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:shadow-glow-lg transition-all">
              View Projects <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
            </a>
            <a href="#resume" className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-6 py-3 text-sm font-semibold backdrop-blur hover:border-primary transition">
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-2 py-3 text-sm font-semibold text-muted-foreground hover:text-primary transition">
              Contact Me <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="flex flex-wrap gap-2 pt-4">
            {highlights.map((h) => (
              <span key={h} className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-mono text-primary/90">
                {h}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Portrait */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.2 }} className="lg:col-span-5 relative">
          <div className="relative mx-auto aspect-square max-w-md">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary via-accent to-cyan blur-2xl opacity-40 animate-pulse-glow" />
            <div className="absolute inset-2 rounded-full border-2 border-primary/40" />
            <div className="absolute inset-0 rounded-full border border-accent/30 [mask-image:linear-gradient(135deg,black,transparent)]" />
            <div className="relative h-full w-full rounded-full overflow-hidden border-4 border-primary/60 shadow-glow-lg">
              <img src={portraitAsset.url} alt="Saee Purushottam Murkute" className="h-full w-full object-cover" width={896} height={1152} />
            </div>
            {/* floating tags */}
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -left-6 top-12 glass rounded-xl px-4 py-3 shadow-glow">
              <div className="flex items-center gap-2 text-xs font-mono">
                <Cpu className="h-4 w-4 text-accent" /> KiCad 8
              </div>
            </motion.div>
            <motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -right-4 top-1/3 glass rounded-xl px-4 py-3 shadow-glow">
              <div className="flex items-center gap-2 text-xs font-mono">
                <Activity className="h-4 w-4 text-primary" /> LTspice
              </div>
            </motion.div>
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4.5, repeat: Infinity }} className="absolute -left-2 bottom-16 glass rounded-xl px-4 py-3 shadow-glow">
              <div className="flex items-center gap-2 text-xs font-mono">
                <Zap className="h-4 w-4 text-cyan" /> ESP32
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- ABOUT ---------- */
function About() {
  const stats = [
    { v: "4+", l: "PCB Projects" },
    { v: "2", l: "Internships" },
    { v: "0", l: "ERC / DRC Errors" },
    { v: "MSc", l: "Microelectronics" },
  ];
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div {...fadeUp} className="relative">
          <div className="aspect-[4/5] relative rounded-3xl overflow-hidden glass">
            <div className="absolute inset-0 grid-bg opacity-40" />
            <div className="absolute inset-6 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/20 grid place-items-center">
              <CircuitBoard className="h-40 w-40 text-primary/70" strokeWidth={1} />
            </div>
            <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-5">
              <div className="font-mono text-xs text-primary/80 uppercase tracking-widest">Currently</div>
              <div className="font-display text-xl font-semibold mt-1">MSc @ Newcastle University</div>
              <div className="text-sm text-muted-foreground">Expected graduation · Sept 2026</div>
            </div>
          </div>
        </motion.div>

        <motion.div {...fadeUp} className="space-y-6">
          <div className="font-mono text-sm text-primary uppercase tracking-widest">// About Me</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
            Designing reliable electronics from <span className="text-primary">schematic to silicon</span>.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            I'm an electronics engineering graduate and postgraduate student at Newcastle University,
            with a deep interest in PCB design, signal-conditioning circuits, embedded systems and
            power electronics.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            My goal is to become a PCB / Electronics Design Engineer who takes products end-to-end —
            schematic capture, layout, simulation, manufacturing outputs and 3D verification — with
            uncompromising precision.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
            {stats.map((s) => (
              <div key={s.l} className="glass rounded-xl p-4">
                <div className="font-display text-2xl font-bold text-primary">{s.v}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- EXPERIENCE ---------- */
function Experience() {
  const items = [
    {
      role: "PCB Design Volunteer",
      org: "Northern Power Electronics",
      loc: "Newcastle upon Tyne, UK",
      period: "Current",
      tools: ["DesignSpark PCB"],
      points: [
        "Designed schematics from scratch and completed PCB layouts independently",
        "Generated manufacturing-ready Gerber files and 3D PCB visualizations",
        "Collaborated directly with engineering management on power electronics applications",
      ],
    },
    {
      role: "Electronics Simulation Intern",
      org: "Refu Drive Pvt Ltd",
      loc: "Pune, India",
      period: "3 Months",
      tools: ["LTspice"],
      points: [
        "Designed industrial-grade signal conditioning circuits",
        "Developed PT100 / PT1000 RTD sensor interface circuits",
        "Performed transient and DC operating point analysis for motor control / EV drive",
      ],
    },
    {
      role: "Education — MSc Microelectronics",
      org: "Newcastle University",
      loc: "United Kingdom",
      period: "2025 – 2026",
      tools: ["Semiconductor Devices", "Embedded Systems"],
      points: ["Focus on microelectronics, semiconductor devices, embedded and electronic system design."],
      isEdu: true,
    },
    {
      role: "B.E. Electronics & Telecommunication",
      org: "AISSMS College of Engineering",
      loc: "Pune, India",
      period: "2021 – 2025",
      tools: [],
      points: ["Foundation in analog/digital electronics, communication systems and embedded design."],
      isEdu: true,
    },
  ];

  return (
    <section id="experience" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div {...fadeUp} className="text-center mb-16 space-y-4">
          <div className="font-mono text-sm text-primary uppercase tracking-widest">// Journey</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold">Experience & Education</h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
          <div className="space-y-12">
            {items.map((it, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className={`relative grid md:grid-cols-2 gap-8 items-center ${i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"}`}
              >
                <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="glass rounded-2xl p-6 hover:border-primary/60 transition-all hover:shadow-glow">
                    <div className="flex items-center gap-2 text-xs font-mono text-primary/80 uppercase tracking-widest mb-2 md:justify-start">
                      {it.isEdu ? <GraduationCap className="h-4 w-4" /> : <Briefcase className="h-4 w-4" />}
                      {it.period}
                    </div>
                    <h3 className="font-display text-xl font-bold">{it.role}</h3>
                    <div className="text-primary text-sm mt-1">{it.org}</div>
                    <div className="text-muted-foreground text-xs mb-4">{it.loc}</div>
                    <ul className="space-y-2 text-sm text-muted-foreground text-left">
                      {it.points.map((p, k) => (
                        <li key={k} className="flex gap-2">
                          <span className="text-primary mt-1">▸</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                    {it.tools.length > 0 && (
                      <div className={`mt-4 flex flex-wrap gap-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                        {it.tools.map((t) => (
                          <span key={t} className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-xs font-mono">{t}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 grid place-items-center">
                  <div className="h-4 w-4 rounded-full bg-primary shadow-glow ring-4 ring-background" />
                </div>
                <div />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- SKILLS ---------- */
function Skills() {
  const groups = [
    { icon: CircuitBoard, title: "PCB Design", items: [["KiCad", 90], ["DesignSpark PCB", 85], ["PCB Layout & Routing", 88], ["Gerber Generation", 92]] },
    { icon: Cpu, title: "Circuit Design", items: [["Schematic Capture", 92], ["Analog Electronics", 85], ["Power Electronics", 80], ["Sensor Interfaces", 82]] },
    { icon: Activity, title: "Simulation", items: [["LTspice", 90], ["Transient Analysis", 85], ["DC Analysis", 88], ["Validation", 86]] },
    { icon: Zap, title: "Embedded", items: [["ESP32", 82], ["Microcontrollers", 80], ["Hardware Integration", 85], ["3D PCB Rendering", 88]] },
  ];
  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div {...fadeUp} className="text-center mb-16 space-y-4">
          <div className="font-mono text-sm text-primary uppercase tracking-widest">// Toolkit</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold">Skills & Expertise</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          {groups.map((g, i) => (
            <motion.div key={g.title} {...fadeUp} transition={{ duration: 0.6, delay: i * 0.1 }} className="glass rounded-3xl p-8 hover:shadow-glow transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/15 text-primary">
                  <g.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-2xl font-bold">{g.title}</h3>
              </div>
              <div className="space-y-4">
                {g.items.map(([name, val]) => (
                  <div key={name as string}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="font-medium">{name}</span>
                      <span className="text-primary font-mono text-xs">{val}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${val}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-primary to-cyan"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SERVICES ---------- */
function Services() {
  const services: Array<{ icon: typeof Cpu; t: string; d: string; badge?: string; proof?: string; link?: boolean }> = [
    { icon: CircuitBoard, t: "PCB Design & Layout", d: "From schematic to manufacturing-ready Gerbers, with ground-plane optimization and DRC validation." },
    { icon: Cpu, t: "Electronic Circuit Design", d: "Custom analog, digital and mixed-signal circuits tailored to your application.", badge: "Analog & Digital", proof: "3 custom designs", link: true },
    { icon: Wrench, t: "Schematic Capture", d: "Industry-standard schematics with full ERC verification and clean documentation.", badge: "KiCad 8", proof: "ERC Verified", link: true },
    { icon: Activity, t: "Circuit Simulation", d: "LTspice-based transient and DC analysis to validate before fabrication.", badge: "LTspice", proof: "Transient & DC Analysis", link: true },
    { icon: Layers, t: "3D PCB Visualization", d: "Detailed 3D renders for mechanical fit checks and stakeholder presentation." },
    { icon: Sparkles, t: "Hardware Prototyping", d: "From breadboard to functional prototype with embedded firmware integration." },
  ];
  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section id="services" className="relative py-28">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div {...fadeUp} className="text-center mb-16 space-y-4">
          <div className="font-mono text-sm text-primary uppercase tracking-widest">// Services</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold">What I Build</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div key={s.t} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.07 }} className="group glass rounded-2xl p-7 hover:border-primary transition-all hover:-translate-y-1 hover:shadow-glow relative overflow-hidden">
              <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-primary/20 blur-2xl opacity-0 group-hover:opacity-100 transition" />
              <div className="relative">
                <div className="grid h-14 w-14 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-glow mb-5">
                  <s.icon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-xl font-bold mb-2">{s.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                {(s.badge || s.proof || s.link) && (
                  <div className="mt-5 pt-4 border-t border-border/50 space-y-3">
                    {(s.badge || s.proof) && (
                      <div className="flex items-center justify-between gap-3 flex-wrap">
                        {s.badge && (
                          <span className="inline-flex items-center rounded-md border border-primary/30 bg-primary/10 px-2 py-0.5 font-mono text-[11px] uppercase tracking-wider text-primary">
                            {s.badge}
                          </span>
                        )}
                        {s.proof && (
                          <span className="text-xs text-muted-foreground">{s.proof}</span>
                        )}
                      </div>
                    )}
                    {s.link && (
                      <a
                        href="#projects"
                        onClick={scrollToProjects}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 transition-all"
                      >
                        View Projects <ArrowRight className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                )}
                {!s.link && (
                  <ArrowRight className="h-5 w-5 mt-5 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- PROJECTS ---------- */
function Projects() {
  const projects = [
    {
      n: "01",
      t: "ESP32 Temperature & Humidity Monitor",
      d: "IoT-ready environmental monitoring system integrating ESP32, DHT11 sensor and LCD display with WiFi-ready architecture.",
      tools: ["KiCad 8", "ESP32", "DHT11"],
      stats: [["70", "Pads"], ["32", "Nets"], ["117", "Routed Tracks"], ["0", "Errors"]],
      tag: "Embedded · IoT",
    },
    {
      n: "02",
      t: "LM7805 Regulated Power Supply",
      d: "Professionally revised 5V regulated supply with reverse-polarity protection and ripple filtering, verified through LTspice simulation.",
      tools: ["KiCad 8", "LTspice"],
      stats: [["5V", "Output"], ["2", "Layers"], ["0", "ERC"], ["0", "DRC"]],
      tag: "Power Electronics",
      images: [
        { src: lm7805Schematic.url, label: "Schematic" },
        { src: lm7805Pcb.url, label: "PCB Layout" },
        { src: lm78053d.url, label: "3D Render" },
      ] as { src: string; label: string }[],
    },
    {
      n: "03",
      t: "Water Alarm Circuit",
      d: "Complete water-detection alarm with 2N7000 MOSFET switching, piezo buzzer, LED indication, noise filtering and flyback protection.",
      tools: ["KiCad 8"],
      stats: [["2-Layer", "PCB"], ["GND", "Plane"], ["3D", "Render"], ["0", "Errors"]],
      tag: "Analog · Sensing",
      images: [
        { src: waterAlarmSchematic.url, label: "Schematic" },
        { src: waterAlarmPcb.url, label: "PCB Layout" },
        { src: waterAlarm3d.url, label: "3D Render" },
      ] as { src: string; label: string }[],
    },
    {
      n: "04",
      t: "555 Timer Astable LED Blinker",
      d: "1Hz LED blinking circuit using NE555 in astable configuration with calculated timing network and noise filtering.",
      tools: ["KiCad 8", "NE555"],
      stats: [["1Hz", "Freq"], ["Astable", "Mode"], ["3D", "Render"], ["0", "Errors"]],
      tag: "Analog · Timing",
      images: [
        { src: ne555Schematic.url, label: "Schematic" },
        { src: ne555Pcb.url, label: "PCB Layout" },
        { src: ne5553d.url, label: "3D Render" },
      ] as { src: string; label: string }[],
    },
  ];
  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div {...fadeUp} className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div className="space-y-4">
            <div className="font-mono text-sm text-primary uppercase tracking-widest">// Featured Work</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold">Selected Projects</h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Hands-on PCB designs — every one signed off with zero ERC and DRC errors and full 3D verification.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.n}
              {...fadeUp}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative glass rounded-3xl p-8 hover:border-primary transition-all hover:shadow-glow overflow-hidden"
            >
              <div className="absolute inset-0 grid-bg opacity-0 group-hover:opacity-30 transition-opacity" />
              <div className="relative">
                <div className="flex items-start justify-between mb-6">
                  <span className="font-mono text-5xl font-bold text-primary/20 group-hover:text-primary/40 transition">{p.n}</span>
                  <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-mono">{p.tag}</span>
                </div>
                <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-primary transition">{p.t}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{p.d}</p>

                {"images" in p && (p as any).images && (
                  <ProjectGallery images={(p as any).images} title={p.t} />
                )}


                <div className="grid grid-cols-4 gap-3 mb-6">
                  {p.stats.map(([v, l]) => (
                    <div key={l} className="rounded-xl bg-secondary/50 border border-border p-3 text-center">
                      <div className="font-display text-lg font-bold text-primary">{v}</div>
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-0.5">{l}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {p.tools.map((t) => (
                    <span key={t} className="rounded-full border border-border px-3 py-1 text-xs font-mono text-muted-foreground">{t}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- RESUME ---------- */
function ProjectGallery({ images, title }: { images: { src: string; label: string }[]; title: string }) {
  const [active, setActive] = useState(images[0]?.label);
  const current = images.find((i) => i.label === active) ?? images[0];
  return (
    <div className="mb-6 rounded-xl overflow-hidden border border-border bg-secondary/30 shadow-inner">
      {/* Header bar with traffic-light dots + integrated tabs */}
      <div className="flex items-center gap-3 border-b border-border bg-background/60 px-3 py-2">
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
        </div>
        <div role="tablist" aria-label={`${title} views`} className="flex items-center gap-1 ml-1 overflow-x-auto">
          {images.map((img) => {
            const isActive = img.label === active;
            return (
              <button
                key={img.label}
                role="tab"
                aria-selected={isActive}
                type="button"
                onClick={() => setActive(img.label)}
                className={`relative rounded-md px-3 py-1 text-[11px] font-mono uppercase tracking-wider transition whitespace-nowrap ${
                  isActive
                    ? "bg-primary/15 text-primary border border-primary/40 shadow-glow"
                    : "border border-transparent text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                }`}
              >
                {img.label}
              </button>
            );
          })}
        </div>
      </div>
      {/* Image canvas */}
      <figure className="bg-background">
        <img
          key={current.label}
          src={current.src}
          alt={`${title} — ${current.label}`}
          loading="lazy"
          className="w-full h-auto object-contain"
        />
        <figcaption className="border-t border-border px-3 py-2 text-[10px] uppercase tracking-wider text-muted-foreground font-mono flex items-center justify-between">
          <span>{title}</span>
          <span className="text-primary">{current.label}</span>
        </figcaption>
      </figure>
    </div>
  );
}

function Resume() {

  return (
    <section id="resume" className="relative py-28">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div {...fadeUp} className="relative glass rounded-3xl p-10 md:p-14 overflow-hidden">
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <div className="font-mono text-sm text-primary uppercase tracking-widest">// Resume</div>
              <h2 className="font-display text-4xl font-bold">Get the full picture.</h2>
              <p className="text-muted-foreground">
                Download my detailed CV — education, experience, projects, certifications and complete skill matrix.
              </p>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); toast.success("Resume download coming soon", { description: "Email me directly for the latest CV." }); }}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:shadow-glow-lg transition-all"
              >
                <Download className="h-4 w-4" /> Download CV (PDF)
              </a>
            </div>
            <div className="space-y-3 font-mono text-sm">
              {[
                ["Education", "MSc Microelectronics, Newcastle"],
                ["Specialty", "PCB & Electronics Design"],
                ["Tools", "KiCad · DesignSpark · LTspice"],
                ["Languages", "English"],
                ["Status", "Open to opportunities"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between border-b border-border/60 pb-2">
                  <span className="text-muted-foreground">{k}</span>
                  <span>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- CONTACT ---------- */
function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);

  const handle = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY,
      );
      toast.success("Message sent!", { description: "Thanks — I'll respond within 24 hours." });
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      toast.error("Failed to send message", { description: "Please try again or email me directly." });
    } finally {
      setSending(false);
    }
  };
  const info = [
    { icon: Mail, label: "Email", value: "saeemurkute03@gmail.com", href: "mailto:saeemurkute03@gmail.com" },
    { icon: Phone, label: "Phone", value: "+44 7871 023072", href: "tel:+447871023072" },
    { icon: MapPin, label: "Location", value: "Newcastle, United Kingdom" },
  ];
  return (
    <section id="contact" className="relative py-28">
      <PCBBackground />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div {...fadeUp} className="text-center mb-16 space-y-4">
          <div className="font-mono text-sm text-primary uppercase tracking-widest">// Contact</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold">Got a project in mind?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            I'm available for engineering roles, PCB design collaborations and hardware prototyping work.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          <motion.div {...fadeUp} className="lg:col-span-2 space-y-4">
            {info.map((c) => (
              <a
                key={c.label}
                href={c.href ?? "#"}
                className="flex items-start gap-4 glass rounded-2xl p-5 hover:border-primary transition-all hover:shadow-glow"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/15 text-primary shrink-0">
                  <c.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest">{c.label}</div>
                  <div className="font-medium truncate">{c.value}</div>
                </div>
              </a>
            ))}
            <div className="flex gap-3 pt-2">
              <a href="https://www.linkedin.com/in/saee-murkute-2a2578402" target="_blank" rel="noreferrer" className="grid h-12 w-12 place-items-center rounded-xl glass hover:border-primary hover:text-primary transition">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://github.com/Saee2703" target="_blank" rel="noreferrer" className="grid h-12 w-12 place-items-center rounded-xl glass hover:border-primary hover:text-primary transition">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          <motion.form {...fadeUp} onSubmit={handle} className="lg:col-span-3 glass rounded-3xl p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} disabled={sending} />
              <Field label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} disabled={sending} />
            </div>
            <Field label="Subject" value={form.subject} onChange={(v) => setForm({ ...form, subject: v })} disabled={sending} />
            <div>
              <label className="block text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2">Message</label>
              <textarea
                required rows={5}
                disabled={sending}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-xl border border-border bg-input/50 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition resize-none disabled:opacity-50"
                placeholder="Tell me about your project…"
              />
            </div>
            <button type="submit" disabled={sending} className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:shadow-glow-lg transition-all disabled:opacity-60 disabled:cursor-not-allowed">
              {sending ? (
                <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</>
              ) : (
                <>Send Message <Send className="h-4 w-4 group-hover:translate-x-1 transition" /></>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, value, onChange, type = "text", disabled }: { label: string; value: string; onChange: (v: string) => void; type?: string; disabled?: boolean }) {
  return (
    <div>
      <label className="block text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2">{label}</label>
      <input
        required type={type} value={value} onChange={(e) => onChange(e.target.value)} disabled={disabled}
        className="w-full rounded-xl border border-border bg-input/50 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition disabled:opacity-50"
      />
    </div>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="relative border-t border-border py-10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <CircuitBoard className="h-4 w-4 text-primary" />
          <span className="font-mono">© 2026 Saee Murkute · Designed with precision</span>
        </div>
        <div className="font-mono text-xs">Built with KiCad ⚡ React ⚡ Coffee</div>
      </div>
    </footer>
  );
}
