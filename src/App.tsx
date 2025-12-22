import './App.css'
import analysisResultsScreenshot from './assets/analysis-results.png'

function App() {
  return (
    <div className="app">
      {/* Background Effects */}
      <div className="bg-gradient" />
      <div className="grid-overlay" />

      {/* Header */}
      <header className="header">
        <div className="header-content">
          <a href="#" className="logo">
            <div className="logo-icon">🧹</div>
            CleanSpace
          </a>
          <nav>
            <ul className="nav-links">
              <li><a href="#features">Features</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#reviews">Reviews</a></li>
            </ul>
          </nav>
          <a href="#download" className="download-btn">Download Free</a>
          <button className="mobile-menu-btn">☰</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge fade-in-up">
              <span>Now Available on iOS</span>
            </div>
            <h1 className="hero-title fade-in-up delay-1">
              Free Up <span className="highlight">Gigabytes</span> of Space in Seconds
            </h1>
            <p className="hero-description fade-in-up delay-2">
              CleanSpace intelligently identifies and removes junk files, duplicate photos, 
              and cached data. Reclaim your iPhone's storage without losing what matters.
            </p>
            <div className="hero-cta fade-in-up delay-3">
              <a href="#download" className="cta-primary">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Download on App Store
              </a>
              <a href="#features" className="cta-secondary">
                Learn more →
              </a>
            </div>
            <div className="hero-stats fade-in-up delay-4">
              <div className="stat">
                <div className="stat-value">4.9★</div>
                <div className="stat-label">App Store Rating</div>
              </div>
              <div className="stat">
                <div className="stat-value">500K+</div>
                <div className="stat-label">Downloads</div>
              </div>
              <div className="stat">
                <div className="stat-value">10GB+</div>
                <div className="stat-label">Avg. Space Freed</div>
              </div>
            </div>
          </div>

          <div className="hero-visual fade-in-up delay-2">
            <div className="phone-glow" />
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="phone-notch" />
                <img 
                  src={analysisResultsScreenshot} 
                  alt="Analysis Results Screen" 
                  className="phone-screenshot"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <div className="section-header">
          <span className="section-tag">Features</span>
          <h2 className="section-title">Everything You Need to Keep Your iPhone Clean</h2>
          <p className="section-description">
            Powerful tools that work together to free up space and keep your device running smoothly.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon clean">🧹</div>
            <h3 className="feature-title">Deep Clean</h3>
            <p className="feature-description">
              Scans every corner of your device to find hidden junk files, temporary data, and forgotten downloads.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon smart">🧠</div>
            <h3 className="feature-title">Smart Detection</h3>
            <p className="feature-description">
              AI-powered analysis identifies what's safe to delete while protecting your important files and memories.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon fast">⚡</div>
            <h3 className="feature-title">Lightning Fast</h3>
            <p className="feature-description">
              Complete scans in under 30 seconds. One-tap cleaning gets you back gigabytes instantly.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon secure">🔒</div>
            <h3 className="feature-title">Privacy First</h3>
            <p className="feature-description">
              All processing happens on-device. Your data never leaves your phone—we can't see it even if we wanted to.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon duplicates">📸</div>
            <h3 className="feature-title">Photo Cleanup</h3>
            <p className="feature-description">
              Find and remove duplicate photos, blurry shots, and screenshots you no longer need.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon organize">📊</div>
            <h3 className="feature-title">Storage Insights</h3>
            <p className="feature-description">
              Visual breakdown of what's using your space. Understand your storage at a glance.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works" id="how-it-works">
        <div className="section-header">
          <span className="section-tag">How It Works</span>
          <h2 className="section-title">Three Steps to a Cleaner iPhone</h2>
          <p className="section-description">
            No complicated setup. Just download, scan, and enjoy your freed-up space.
          </p>
        </div>

        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3 className="step-title">Download & Open</h3>
              <p className="step-description">
                Get CleanSpace free from the App Store. Open the app and grant photo access to enable full scanning capabilities.
              </p>
            </div>
          </div>

          <div className="step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3 className="step-title">Scan Your Device</h3>
              <p className="step-description">
                Tap the scan button and let our smart algorithm analyze your storage. It takes less than 30 seconds.
              </p>
            </div>
          </div>

          <div className="step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3 className="step-title">Clean & Enjoy</h3>
              <p className="step-description">
                Review what we found, tap clean, and watch gigabytes of space return to your device instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials" id="reviews">
        <div className="section-header">
          <span className="section-tag">Reviews</span>
          <h2 className="section-title">Loved by Thousands</h2>
          <p className="section-description">
            See what our users are saying about CleanSpace.
          </p>
        </div>

        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-stars">★★★★★</div>
            <p className="testimonial-text">
              "I was constantly getting storage warnings. CleanSpace found 12GB of junk I didn't even know existed. My phone feels brand new!"
            </p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">SK</div>
              <div className="testimonial-info">
                <h4>Sarah K.</h4>
                <p>iPhone 15 Pro User</p>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-stars">★★★★★</div>
            <p className="testimonial-text">
              "The duplicate photo finder is incredible. It found hundreds of nearly identical shots and let me keep just the best ones."
            </p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">MR</div>
              <div className="testimonial-info">
                <h4>Mike R.</h4>
                <p>Photographer</p>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-stars">★★★★★</div>
            <p className="testimonial-text">
              "Finally, an app that respects my privacy. Everything stays on my phone and it actually works. Highly recommend!"
            </p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">JL</div>
              <div className="testimonial-info">
                <h4>Jessica L.</h4>
                <p>Privacy Advocate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" id="download">
        <div className="cta-container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Reclaim Your Storage?</h2>
            <p className="cta-description">
              Join over 500,000 users who've freed up space on their iPhones. Download CleanSpace free today.
            </p>
            <div className="cta-buttons">
              <a href="#" className="cta-primary">
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Download on App Store
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <div className="logo-icon">🧹</div>
            CleanSpace
          </div>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Support</a>
            <a href="#">Contact</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 CleanSpace. All rights reserved. Made with ❤️ for a cleaner iPhone.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
