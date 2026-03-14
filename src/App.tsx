import "./index.css";

export const App = () => {
  const year = new Date().getFullYear();

  return (
    <div className="page">
      <header className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>The Endgame</h1>
          <p className="tagline">Install the future in one move.</p>
          <p className="subtitle">
            A minimal, focused toolkit designed to get you from idea to execution with zero
            friction. Download the installer and start in seconds.
          </p>
          <a className="btn-primary" href="/application_installer.zip" download>
            Download Installer
          </a>
          <p className="meta">Compatible with Windows 10 and later.</p>
        </div>
      </header>

      <main className="content">
        <section className="section">
          <h2>Why The Endgame?</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <h3>Rapid Setup</h3>
              <p>
                One installer, all essentials. No endless configurations, no clutter—just the
                tools you actually use.
              </p>
            </div>
            <div className="feature-card">
              <h3>Focused Workflow</h3>
              <p>
                Designed around deep work. Clear, distraction‑free, and tuned for getting
                important things done.
              </p>
            </div>
            <div className="feature-card">
              <h3>Future‑Ready</h3>
              <p>
                Built with modern systems in mind so you can stay ahead instead of playing
                catch‑up.
              </p>
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="section-inner">
            <div>
              <h2>How it works</h2>
              <ol className="steps">
                <li>Download the installer using the button above.</li>
                <li>Run it and follow the on‑screen steps.</li>
                <li>Start using The Endgame—no extra setup required.</li>
              </ol>
            </div>
            <div className="callout">
              <h3>System Requirements</h3>
              <ul>
                <li>Windows 10 or later (64‑bit)</li>
                <li>At least 4 GB RAM</li>
                <li>500 MB free disk space</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; {year} The Endgame. All rights reserved.</p>
      </footer>
    </div>
  );
};

