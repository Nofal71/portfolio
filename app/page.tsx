export default function Home() {
  return (
    <main>
      <header className="site">
        <div className="mark">Nofal Hassaan</div>
        <nav>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <span className="eyebrow">Full-stack engineer · Lahore</span>
        <h1>
          Building <em>AI-powered</em> web applications that earn their
          keep.
        </h1>
        <p className="lead">
          React, TypeScript, Laravel, and LLM integrations — shipped to
          production, used every day.
        </p>
        <p className="sub">
          Co-founder &amp; technical partner at IH. Solutions, full-stack
          engineer at ACME-One. I design and build the systems behind
          internal tools, multi-tenant SaaS, and AI-assisted workflows.
        </p>
        <div className="actions">
          <a href="mailto:nofal.hassaan.dev@gmail.com">Email →</a>
          <a
            href="https://www.linkedin.com/in/nofal-hassaan"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>
          <a
            href="https://github.com/Nofal71"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>
        </div>
      </section>

      <section id="work">
        <span className="eyebrow">Selected work</span>
        <h2>Things I&apos;ve built.</h2>

        <article className="case">
          <div className="case-head">
            <h3>HRM with automated AI screening</h3>
            <span className="num">01 / ACME-One</span>
          </div>
          <div className="role">Full-stack engineer · production</div>
          <p>
            An internal HR platform with recruitment automation built on
            top of LLMs via OpenRouter. The system parses candidate CVs,
            scores them against job requirements, and surfaces shortlists
            to recruiters — replacing what used to be hours of manual
            review per role.
          </p>
          <div className="metric">
            “Cut manual candidate-review time by 70%.”
          </div>
          <div className="stack">
            <span>React</span>
            <span>Laravel</span>
            <span>OpenRouter</span>
            <span>Microsoft Graph</span>
            <span>SharePoint</span>
            <span>MySQL</span>
          </div>
          <div className="link-row">
            <span className="private-note">
              Private — production code under client NDA. Walkthrough on
              request.
            </span>
          </div>
        </article>

        <article className="case">
          <div className="case-head">
            <h3>VIBE — multi-tenant SaaS CRM</h3>
            <span className="num">02 / IH. Solutions</span>
          </div>
          <div className="role">
            Co-founder &amp; lead engineer · 25% partner
          </div>
          <p>
            An enterprise multi-tenant CRM platform built across 25
            development phases. Fully Dockerized microservice
            architecture behind a Caddy gateway, granular role-based
            access control, industry-specific tenant blueprints, DFA
            state machines for workflow logic, and Gemini-powered
            generation for tenant onboarding. Zero-config local
            development for the team.
          </p>
          <div className="stack">
            <span>TypeScript</span>
            <span>Docker</span>
            <span>Microservices</span>
            <span>Caddy</span>
            <span>Gemini AI</span>
            <span>RBAC</span>
          </div>
          <div className="link-row">
            <a
              href="https://github.com/Nofal71/VIBE"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/Nofal71/VIBE ↗
            </a>
          </div>
        </article>

        <article className="case">
          <div className="case-head">
            <h3>IntelliForge — team LLM proxy</h3>
            <span className="num">03 / Solo</span>
          </div>
          <div className="role">Design &amp; build</div>
          <p>
            A secure proxy that lets a team share OpenRouter LLM access
            while keeping per-user accountability. Encrypted credential
            storage for each user&apos;s API key, full chat-history
            persistence with token-aware context windowing, and a
            transparent audit trail for every request and response.
          </p>
          <div className="stack">
            <span>TypeScript</span>
            <span>OpenRouter</span>
            <span>Encrypted storage</span>
            <span>REST</span>
          </div>
          <div className="link-row">
            <a
              href="https://github.com/Nofal71/IntelliForge"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/Nofal71/IntelliForge ↗
            </a>
          </div>
        </article>
      </section>

      <section id="about" className="about">
        <span className="eyebrow">About</span>
        <h2>The work, the why.</h2>
        <p>
          I&apos;m a full-stack engineer based in Lahore. By day I&apos;m
          a developer at <strong>ACME-One</strong>, where I work across
          React and Laravel and ship LLM-backed features into a real
          product. In parallel, I co-founded{" "}
          <strong>IH. Solutions</strong> (25% partner) where we&apos;re
          building a multi-tenant SaaS CRM from scratch.
        </p>
        <p>
          I care about the stuff under the surface — schema design,
          query plans, role-based access, the gap between &quot;a demo
          that works&quot; and &quot;a system that holds up.&quot; The
          part of AI that interests me is the boring part: piping LLMs
          into existing business workflows so people stop doing
          repetitive work.
        </p>
        <p>
          I&apos;m available for remote contract work in your timezone,
          ~15–20 hours a week. Best fit: React/TypeScript front ends,
          Laravel or Node back ends, LLM-feature integration, internal
          tools, multi-tenant SaaS work.
        </p>
      </section>

      <section id="stack">
        <span className="eyebrow">Stack</span>
        <h2>What I reach for.</h2>
        <dl className="stack-grid">
          <dt>AI &amp; Automation</dt>
          <dd>
            OpenRouter, Gemini, function calling, prompt engineering,
            workflow automation
          </dd>

          <dt>Frontend</dt>
          <dd>
            React, Next.js, TypeScript, Angular, Tailwind, Material UI,
            Fluent UI, Redux Toolkit, TanStack Query, Recharts, AG Grid
          </dd>

          <dt>Backend</dt>
          <dd>Laravel (PHP), Node.js, Express, REST APIs, .NET (basic)</dd>

          <dt>Data</dt>
          <dd>MySQL, SQL Server, Firebase, Supabase</dd>

          <dt>Cloud &amp; Microsoft</dt>
          <dd>
            Azure AD, Microsoft Graph API, SharePoint Cloud, Teams app
            integrations
          </dd>

          <dt>Infrastructure</dt>
          <dd>Docker, Caddy, microservices, Vercel, cPanel</dd>

          <dt>Tools</dt>
          <dd>Git, GitHub, VS Code</dd>
        </dl>
      </section>

      <section id="contact" className="contact">
        <span className="eyebrow">Contact</span>
        <h2>Let&apos;s talk.</h2>
        <p className="lead">
          Have a feature idea, a backlog you need help with, or a vague
          notion that an LLM could clean up some part of your business —{" "}
          <em>send it over.</em>
        </p>

        <dl className="contact-list">
          <dt>Email</dt>
          <dd>
            <a href="mailto:nofal.hassaan.dev@gmail.com">
              nofal.hassaan.dev@gmail.com
            </a>
          </dd>

          <dt>LinkedIn</dt>
          <dd>
            <a
              href="https://www.linkedin.com/in/nofal-hassaan"
              target="_blank"
              rel="noopener noreferrer"
            >
              /in/nofal-hassaan
            </a>
          </dd>

          <dt>GitHub</dt>
          <dd>
            <a
              href="https://github.com/Nofal71"
              target="_blank"
              rel="noopener noreferrer"
            >
              /Nofal71
            </a>
          </dd>

          <dt>Location</dt>
          <dd>Lahore, Pakistan · open to remote</dd>
        </dl>

        <footer>
          <span>© {new Date().getFullYear()} Nofal Hassaan</span>
          <span className="signal">
            <span className="dot" /> Available for new work
          </span>
        </footer>
      </section>
    </main>
  );
}
