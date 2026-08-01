import { Button } from "@alexcarpenter/components/button";
import * as stylex from "@stylexjs/stylex";

const install = "pnpm add @alexcarpenter/components @base-ui/react @stylexjs/stylex";

export default function Home() {
  return (
    <div {...stylex.props(styles.shell)}>
      <header {...stylex.props(styles.header)}>
        <a href="#main" {...stylex.props(styles.brand)}>
          <span {...stylex.props(styles.mark)}>C</span>
          Components
        </a>
        <nav aria-label="Primary" {...stylex.props(styles.nav)}>
          <a href="#button" {...stylex.props(styles.navLink, styles.activeLink)}>
            Docs
          </a>
          <a href="https://github.com" {...stylex.props(styles.navLink)}>
            GitHub
          </a>
        </nav>
      </header>

      <div {...stylex.props(styles.layout)}>
        <aside {...stylex.props(styles.sidebar)}>
          <p {...stylex.props(styles.groupLabel)}>Getting started</p>
          <a href="#overview" {...stylex.props(styles.sideLink)}>
            Overview
          </a>
          <a href="#installation" {...stylex.props(styles.sideLink)}>
            Installation
          </a>
          <p {...stylex.props(styles.groupLabel)}>Components</p>
          <a href="#button" {...stylex.props(styles.sideLink, styles.selected)}>
            Button
          </a>
        </aside>

        <main id="main" {...stylex.props(styles.main)}>
          <section id="overview" {...stylex.props(styles.intro)}>
            <p {...stylex.props(styles.eyebrow)}>Component library</p>
            <h1 {...stylex.props(styles.heading)}>Quiet building blocks for React.</h1>
            <p {...stylex.props(styles.lede)}>
              Accessible behavior from Base UI, static atomic styles from StyleX, and a source-first
              package that stays easy to extend.
            </p>
          </section>

          <section id="installation" {...stylex.props(styles.section)}>
            <h2 {...stylex.props(styles.sectionHeading)}>Installation</h2>
            <pre {...stylex.props(styles.code)}>
              <code>{install}</code>
            </pre>
          </section>

          <section id="button" {...stylex.props(styles.section)}>
            <div {...stylex.props(styles.titleRow)}>
              <div>
                <h2 {...stylex.props(styles.sectionHeading)}>Button</h2>
                <p {...stylex.props(styles.description)}>
                  Triggers an action with keyboard and disabled-state behavior from Base UI.
                </p>
              </div>
              <span {...stylex.props(styles.status)}>Stable</span>
            </div>

            <div {...stylex.props(styles.preview)}>
              <Button>Save changes</Button>
              <Button variant="outline">Cancel</Button>
              <Button variant="ghost">Learn more</Button>
              <Button disabled>Unavailable</Button>
            </div>

            <pre {...stylex.props(styles.code)}>
              <code>{`import { Button } from '@alexcarpenter/components/button';\n\n<Button variant="filled">Save changes</Button>`}</code>
            </pre>
          </section>
        </main>

        <aside aria-label="On this page" {...stylex.props(styles.toc)}>
          <p {...stylex.props(styles.groupLabel)}>On this page</p>
          <a href="#installation" {...stylex.props(styles.sideLink)}>
            Installation
          </a>
          <a href="#button" {...stylex.props(styles.sideLink)}>
            Button
          </a>
        </aside>
      </div>
    </div>
  );
}

const styles = stylex.create({
  shell: {
    fontFamily: "Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    minHeight: "100vh",
  },
  header: {
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.94)",
    borderBottom: "1px solid #d9dbd5",
    display: "flex",
    height: "56px",
    justifyContent: "space-between",
    paddingInline: "clamp(18px, 4vw, 48px)",
    position: "sticky",
    top: 0,
    zIndex: 10,
  },
  brand: {
    alignItems: "center",
    color: "#20211f",
    display: "flex",
    fontSize: "0.9375rem",
    fontWeight: 700,
    gap: "10px",
    textDecoration: "none",
  },
  mark: {
    alignItems: "center",
    backgroundColor: "#20211f",
    borderRadius: "4px",
    color: "#fff",
    display: "inline-flex",
    height: "26px",
    justifyContent: "center",
    width: "26px",
  },
  nav: { display: "flex", gap: "24px" },
  navLink: {
    color: { default: "#696b66", ":hover": "#20211f" },
    fontSize: "0.875rem",
    textDecoration: "none",
  },
  activeLink: { color: "#20211f", fontWeight: 650 },
  layout: {
    display: "grid",
    gridTemplateColumns: {
      default: "200px minmax(0, 760px) 160px",
      "@media (max-width: 960px)": "180px minmax(0, 1fr)",
      "@media (max-width: 700px)": "1fr",
    },
    marginInline: "auto",
    maxWidth: "1200px",
    paddingInline: { default: "32px", "@media (max-width: 700px)": "20px" },
  },
  sidebar: {
    borderRight: {
      default: "1px solid #e4e5e1",
      "@media (max-width: 700px)": 0,
    },
    display: { default: "flex", "@media (max-width: 700px)": "none" },
    flexDirection: "column",
    minHeight: "calc(100vh - 56px)",
    paddingBlock: "36px",
    paddingRight: "28px",
  },
  toc: {
    display: { default: "flex", "@media (max-width: 960px)": "none" },
    flexDirection: "column",
    paddingBlock: "36px",
    paddingLeft: "28px",
  },
  groupLabel: {
    color: "#92948e",
    fontSize: "0.6875rem",
    fontWeight: 700,
    marginBlock: "18px 8px",
    textTransform: "uppercase",
  },
  sideLink: {
    borderRadius: "4px",
    color: { default: "#696b66", ":hover": "#20211f" },
    fontSize: "0.8125rem",
    paddingBlock: "6px",
    textDecoration: "none",
  },
  selected: { color: "#d94f35", fontWeight: 650 },
  main: {
    backgroundColor: "#fff",
    minHeight: "calc(100vh - 56px)",
    padding: {
      default: "72px 64px 96px",
      "@media (max-width: 700px)": "48px 24px 72px",
    },
  },
  intro: { borderBottom: "1px solid #e4e5e1", paddingBottom: "64px" },
  eyebrow: {
    color: "#d94f35",
    fontSize: "0.75rem",
    fontWeight: 700,
    margin: "0 0 16px",
    textTransform: "uppercase",
  },
  heading: {
    fontSize: { default: "2.75rem", "@media (max-width: 700px)": "2.125rem" },
    lineHeight: 1.1,
    margin: 0,
    maxWidth: "620px",
  },
  lede: {
    color: "#696b66",
    fontSize: "1.0625rem",
    lineHeight: 1.65,
    marginBlock: "24px 0",
    maxWidth: "580px",
  },
  section: { borderBottom: "1px solid #e4e5e1", paddingBlock: "48px" },
  sectionHeading: { fontSize: "1.375rem", margin: 0 },
  description: {
    color: "#696b66",
    lineHeight: 1.55,
    marginBlock: "10px 0",
    maxWidth: "540px",
  },
  titleRow: {
    alignItems: "flex-start",
    display: "flex",
    gap: "24px",
    justifyContent: "space-between",
  },
  status: {
    backgroundColor: "#e5f1ec",
    borderRadius: "999px",
    color: "#287c68",
    fontSize: "0.6875rem",
    fontWeight: 700,
    padding: "5px 9px",
    textTransform: "uppercase",
  },
  preview: {
    alignItems: "center",
    backgroundColor: "#f7f7f5",
    border: "1px solid #d9dbd5",
    borderRadius: "7px",
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
    marginBlock: "28px 16px",
    minHeight: "180px",
    padding: "32px",
  },
  code: {
    backgroundColor: "#20211f",
    borderRadius: "7px",
    color: "#f1f2ee",
    fontFamily: "'SFMono-Regular', Consolas, 'Liberation Mono', monospace",
    fontSize: "0.75rem",
    lineHeight: 1.65,
    marginBlock: "20px 0",
    overflowX: "auto",
    padding: "18px 20px",
  },
});
