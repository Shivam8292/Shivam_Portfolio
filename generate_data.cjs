const fs = require('fs');

const profileEn = {
    name: "Shivam Yadav",
    title: "Software Developer",
    tagline: "Building AI-integrated full stack products & RAG systems",
    bio: "Software Developer focused on building RAG-based applications, semantic search systems, and AI-integrated full stack products using FastAPI, React, LangChain, and LLM APIs. Skilled in backend development, REST APIs, vector databases, and practical AI workflow automation.",
    email: "kshivamm1234@gmail.com",
    phone: "+91-8292268257",
    github: "https://github.com/Shivam8292",
    linkedin: "https://www.linkedin.com/in/shivamx12/",
    location: "Purnia, Bihar",
    
    education: {
      school: "Chandigarh University",
      degree: "B.E. (Hons.) CSE (AI & ML)",
      years: "2022 - 2026",
      gpa: "7.88",
    },

    experience: [
      {
        company: "EOXS",
        role: "AI Developer Intern",
        period: "Oct 2025 - Dec 2025",
        description: "Worked on AI-powered ERP automation workflows. Built REST APIs using Python and FastAPI. Assisted in data processing and collaborated to integrate AI functionalities into enterprise applications.",
      }
    ],

    skills: [
      { name: "Python / AI", level: 95, color: "#f59e0b" },
      { name: "FastAPI / Backend", level: 90, color: "#14b8a6" },
      { name: "React / Frontend", level: 85, color: "#3b82f6" },
      { name: "RAG / LangChain", level: 88, color: "#8b5cf6" },
      { name: "SQL / ChromaDB", level: 80, color: "#10b981" },
      { name: "C++ / Systems", level: 75, color: "#f43f5e" },
    ],
};

const projectsEn = [
    {
      title: "Reposage",
      description: "AI-powered code search engine indexing GitHub repos for natural language queries — powered by AST-based function-level chunking.",
      tags: ["Python", "FastAPI", "React", "LangChain"],
      color: "#06b6d4",
      link: "https://github.com/Shivam8292/Reposage",
      slug: "reposage",
      mobileScreenshot: "/screenshots_phone/Aero.jpg",
      specs: ["// AST_CHUNKING", "// SEMANTIC_SEARCH", "// RAG_PIPELINE"]
    },
    {
      title: "AI Resume Screener",
      description: "Semantic RAG-based resume ranking system using FastAPI, Llama 3.3 (Groq), and HuggingFace embeddings for high-precision candidate-JD matching.",
      tags: ["FastAPI", "Llama 3.3", "HuggingFace"],
      color: "#8b5cf6",
      link: "https://github.com/Shivam8292/SleekScan",
      slug: "ai-resume-screener",
      mobileScreenshot: "/screenshots_phone/Rift.jpg",
      specs: ["// ASYNC_PIPELINE", "// LLAMA_3.3", "// EXPLAINABLE_SCORING"]
    },
    {
      title: "Corporate Autopsy",
      description: "Developed a RAG-based platform using Gemini 2.0 to automate forensic startup failure analysis and reporting. Vectorized 400+ startup failures.",
      tags: ["Gemini 2.0", "ChromaDB", "React"],
      color: "#f97316",
      link: "https://github.com/Shivam8292/Corporate-Autopsy-Machine",
      slug: "corporate-autopsy",
      mobileScreenshot: "/screenshots_phone/Momentum.jpg",
      specs: ["// DEATH_SCORE_GEN", "// CHROMA_DB", "// RISK_ANALYSIS"]
    },
    {
      title: "DocuMind",
      description: "A seamless intelligent document analysis platform for querying complex PDF datasets with high accuracy using semantic embeddings.",
      tags: ["AI", "RAG", "Embeddings"],
      color: "#10b981",
      link: "https://github.com/Shivam8292/DocuMind",
      slug: "documind",
      mobileScreenshot: "/screenshots_phone/GoSync.jpg",
      specs: ["// PDF_ANALYSIS", "// HIGH_ACCURACY", "// SEMANTIC_SEARCH"]
    },
    {
      title: "ResearchMind",
      description: "Multi-agent deep research system powered by Gemini 2.5 Flash and Tavily Search API, orchestrating 5 specialized agents to collaborate and generate report.",
      tags: ["FastAPI", "React", "Gemini 2.5", "Tavily"],
      color: "#ec4899",
      link: "https://github.com/Shivam8292/multiagent-research-engine",
      slug: "researchmind",
      mobileScreenshot: "/screenshots_phone/Velocity.jpg",
      specs: ["// MULTI_AGENT_FLOW", "// GEMINI_2.5_FLASH", "// DEEP_RESEARCH"]
    }
];

const langs = ['en', 'ja', 'ko', 'zh-tw', 'hi', 'fr', 'id', 'de', 'it', 'pt-br', 'es-419', 'es', 'eridian'];

let profileStr = 'export const profile = {\n';
for (const lang of langs) {
    let key = lang.includes('-') ? `"${lang}"` : lang;
    profileStr += `  ${key}: ${JSON.stringify(profileEn, null, 2)},\n`;
}
profileStr += '};\n';

fs.writeFileSync('src/data/profile.ts', profileStr);

let projectsStr = 'export interface Project { title: string; description: string; tags: string[]; color: string; link: string; slug: string; mobileScreenshot: string; specs: string[]; }\n\n';
projectsStr += 'export const projects: any = {\n';
for (const lang of langs) {
    let key = lang.includes('-') ? `"${lang}"` : lang;
    projectsStr += `  ${key}: ${JSON.stringify(projectsEn, null, 2)},\n`;
}
projectsStr += '};\n';

fs.writeFileSync('src/data/projects.ts', projectsStr);

console.log('Done!');
