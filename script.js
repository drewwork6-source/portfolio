const projects = [
  {
    title: "AI Automation Toolkit",
    tag: "Python · Flask",
    desc: "A tool that turns website form submissions into automated email replies and CRM log entries, with a rule-based assistant for common client questions.",
    stack: ["Python", "Flask", "REST APIs", "SMTP"]
  },
  {
    title: "Small Business Website",
    tag: "React · Vite",
    desc: "A fast, responsive marketing site template for local businesses — reusable components, mobile-first layout, and an easy-to-edit content file.",
    stack: ["React", "Vite", "CSS"]
  },
  {
    title: "Developer Portfolio",
    tag: "HTML · CSS · JS",
    desc: "This site — a hand-built, dependency-free portfolio that scores well on performance and works great on any screen size.",
    stack: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Coursework & Algorithms",
    tag: "Java · Python",
    desc: "Academic projects applying data structures, object-oriented design, and database concepts from FGCU software engineering coursework.",
    stack: ["Java", "Python", "SQL"]
  }
];

const skills = [
  { group: "Languages", items: ["Java", "Python", "JavaScript", "TypeScript", "SQL", "HTML/CSS"] },
  { group: "Frameworks", items: ["React", "Next.js", "Node.js", "Flask"] },
  { group: "Web & Design", items: ["Responsive design", "WordPress", "Figma", "Accessibility"] },
  { group: "Tools & AI", items: ["Git/GitHub", "REST APIs", "Automation", "Postman"] }
];

function render() {
  const cards = document.getElementById("projectCards");
  cards.innerHTML = projects.map(p => `
    <article class="card">
      <span class="tag">${p.tag}</span>
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <div class="stack">${p.stack.map(s => `<b>${s}</b>`).join("")}</div>
    </article>`).join("");

  const groups = document.getElementById("skillGroups");
  groups.innerHTML = skills.map(g => `
    <div class="skillcol">
      <h4>${g.group}</h4>
      <ul>${g.items.map(i => `<li>${i}</li>`).join("")}</ul>
    </div>`).join("");

  document.getElementById("year").textContent = new Date().getFullYear();
}

function setupMenu() {
  const btn = document.getElementById("menuBtn");
  const nav = document.querySelector(".nav nav");
  btn.addEventListener("click", () => nav.classList.toggle("open"));
  nav.querySelectorAll("a").forEach(a =>
    a.addEventListener("click", () => nav.classList.remove("open"))
  );
}

render();
setupMenu();
