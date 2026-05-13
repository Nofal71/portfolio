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
          Web applications that <em>don&apos;t fall apart</em> in
          production.
        </h1>
        <p className="lead">
          React, Next.js, Laravel — multi-tenant SaaS, internal tools,
          schema design, the parts under the surface.
        </p>
        <p className="sub">
          Full-stack engineer at ACME-One. I design and build the
          systems behind internal tools, multi-tenant SaaS, and
          production web applications.
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
            <h3>Internal HR platform</h3>
            <span className="num">01 / ACME-One</span>
          </div>
          <div className="role">Full-stack engineer · production</div>
          <p>
            An internal HR system on a React + Laravel stack, with full
            recruitment workflow tracking and document management via
            Microsoft Graph and SharePoint Cloud integration. One
            feature uses the OpenRouter API to score candidate CVs
            against job requirements automatically — surfacing
            shortlists in place of hours of manual review.
          </p>
          <div className="metric">
            “Cut manual candidate-review time by 70%.”
          </div>
          <div className="stack">
            <span>React</span>
            <span>Laravel</span>
            <span>MySQL</span>
            <span>Microsoft Graph</span>
            <span>SharePoint</span>
            <span>OpenRouter</span>
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
            Web developer · IH. Solutions
          </div>
          <p>
            An enterprise multi-tenant CRM platform built across 25
            development phases. Fully Dockerized microservice
            architecture behind a Caddy gateway, granular role-based
            access control, industry-specific tenant blueprints, DFA
            state machines for workflow logic, and Gemini-powered
            generation for tenant onboarding. Zero-config local
            development for the team. Showcased with permission from
            IH. Solutions.
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
            <h3>IntelliForge — team API proxy</h3>
            <span className="num">03 / Solo</span>
          </div>
          <div className="role">Design &amp; build</div>
          <p>
            A team-shared API proxy with per-user authentication,
            encrypted credential storage, and full request/response
            audit logging. Persists conversation history with
            token-aware context windowing. Built as a generic pattern,
            currently configured against OpenRouter&apos;s endpoints.
          </p>
          <div className="stack">
            <span>TypeScript</span>
            <span>REST</span>
            <span>Encrypted storage</span>
            <span>Audit logging</span>
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
          I&apos;m a full-stack web developer based in Lahore. At{" "}
          <strong>ACME-One</strong> I built an internal HR platform
          (React + Laravel, Microsoft 365 integration, automated
          recruitment workflows) and I&apos;m currently working on an
          enterprise POS system on Angular + Laravel. I also work with{" "}
          <strong>IH. Solutions</strong> as a web developer on VIBE, a
          multi-tenant SaaS CRM.
        </p>
        <p>
          I care about the stuff under the surface — schema design,
          query plans, role-based access, the gap between &quot;a demo
          that works&quot; and &quot;a system that holds up.&quot;
          Wiring up third-party APIs (Microsoft Graph, payment
          providers, LLMs like OpenRouter when it fits) is part of the
          job; building the web app around them well is the actual
          craft.
        </p>
        <p>
          Available for remote contract work, ~15–20 hours a week. Best
          fit: React/TypeScript front ends, Laravel or Node back ends,
          internal tools, multi-tenant SaaS, Microsoft 365 ecosystem
          integrations.
        </p>
      </section>

      <section id="stack">
        <span className="eyebrow">Stack</span>
        <h2>What I reach for.</h2>
        <dl className="stack-grid">
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

          <dt>Integrations</dt>
          <dd>
            Stripe, OpenRouter, Gemini, function calling, webhook design,
            email APIs
          </dd>

          <dt>Tools</dt>
          <dd>Git, GitHub, VS Code</dd>
        </dl>
      </section>

      <section id="contact" className="contact">
        <span className="eyebrow">Contact</span>
        <h2>Let&apos;s talk.</h2>
        <p className="lead">
          Have a web app to build, a backlog you need help with, or
          something you want rescued from production limbo —{" "}
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
