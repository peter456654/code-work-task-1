// pages/privacy-policy.jsx
"use client";
import React from "react";
import Link from "next/link";
import {
  FaShieldAlt,
  FaCookieBite,
  FaChartLine,
  FaLock,
  FaGlobe,
  FaEdit,
  FaShareAlt,
} from "react-icons/fa";

const PrivacyPolicyPage = () => (
  <div className="min-h-screen bg-secondary text-primary pt-32 pb-16 px-6 flex justify-center relative overflow-hidden">
    {/* Background Decorative Elements */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-20 left-20 w-40 h-40 bg-secondary/20 rounded-full animate-blob"></div>
      <div className="absolute top-60 right-32 w-32 h-32 bg-secondary/15 rounded-full animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-40 left-1/3 w-48 h-48 bg-secondary/25 rounded-full animate-blob animation-delay-4000"></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-secondary/10 rounded-full animate-blob animation-delay-1000"></div>
    </div>

    {/* Floating Elements */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-32 left-16 w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
      <div className="absolute top-48 right-20 w-2 h-2 bg-primary/60 rounded-full animate-pulse animation-delay-1000"></div>
      <div className="absolute bottom-56 left-1/4 w-4 h-4 bg-secondary/80 rounded-full animate-pulse animation-delay-2000"></div>
      <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-primary/40 rounded-full animate-pulse animation-delay-3000"></div>
    </div>

    <div className="w-full max-w-4xl relative z-10">
      {/* Enhanced Hero */}
      <header className="text-center mb-16 animate-slide-up">
        <div className="inline-flex items-center px-4 py-2 rounded-full border border-secondary/30 bg-primary/5 backdrop-blur-sm mb-6">
          <span className="text-primary text-sm font-medium">— Legal Documentation —</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          <span className="text-primary">Privacy </span>
          <span className="text-primary">Policy</span>
        </h1>
        
        <div className="w-24 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full mx-auto mb-4"></div>
        
        <p className="text-primary/80 text-lg">
          Last Updated: <span className="text-primary font-medium">April 22, 2025</span>
        </p>
      </header>

      <div className="space-y-8">
        {/* Enhanced Introduction */}
        <section id="introduction" className="bg-secondary/30 backdrop-blur-xl border border-primary/10 p-8 rounded-3xl hover:bg-secondary/40 hover:border-primary/30 transition-all duration-500 animate-card-float">
          <h2 className="flex items-center text-2xl font-bold mb-6 text-primary">
            <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mr-4 shadow-lg shadow-secondary/25">
              <FaShieldAlt className="text-primary text-lg" />
            </div>
            <span className="text-primary">Introduction</span>
          </h2>
          <div className="space-y-4 text-primary/90 leading-relaxed">
            <p>
              <span className="text-primary font-medium">Codework</span> ("we", "our", or "us") operates this website (the "Site").
              This page outlines our policies regarding the collection, use, and
              disclosure of Personal Information received from users of the Site.
              By using this Site, you agree to the collection and use of
              information in accordance with this policy.
            </p>
            <p>
              <span className="text-primary font-medium">Codework</span> is committed to safeguarding your Personal Data and
              privacy. We ensure that any personal data collected will be managed
              in strict compliance with applicable data protection legislation. If
              you are a resident of the European Union (or a country that has
              implemented local laws aligned with the GDPR), this includes the
              <span className="text-primary font-medium"> General Data Protection Regulation ("GDPR")</span> and relevant national
              legislation.
            </p>
          </div>
        </section>

        {/* Enhanced Information Collection */}
        <section id="information-collection" className="bg-secondary/30 backdrop-blur-xl border border-primary/10 p-8 rounded-3xl hover:bg-secondary/40 hover:border-primary/30 transition-all duration-500 animate-card-float animation-delay-200">
          <h2 className="flex items-center text-2xl font-bold mb-6 text-primary">
            <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mr-4 shadow-lg shadow-secondary/25">
              <FaCookieBite className="text-primary text-lg" />
            </div>
            <span className="text-primary">Information Collection & Use</span>
          </h2>
          <div className="text-primary/90 leading-relaxed">
            <p>
              While using our Site, we may request personally identifiable
              information that can be used to contact or identify you, such as
              your name, email, or other identifiers (<span className="text-primary font-medium">"Personal Information"</span>).
            </p>
          </div>
        </section>

        {/* Enhanced Log Data */}
        <section id="log-data" className="bg-secondary/30 backdrop-blur-xl border border-primary/10 p-8 rounded-3xl hover:bg-secondary/40 hover:border-primary/30 transition-all duration-500 animate-card-float animation-delay-400">
          <h2 className="flex items-center text-2xl font-bold mb-6 text-primary">
            <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mr-4 shadow-lg shadow-secondary/25">
              <FaChartLine className="text-primary text-lg" />
            </div>
            <span className="text-primary">Log Data</span>
          </h2>
          <div className="space-y-4 text-primary/90 leading-relaxed">
            <p>
              Like many websites, we collect information that your browser sends
              whenever you visit our Site (<span className="text-primary font-medium">"Log Data"</span>). This data may include your
              IP address, browser type/version, visited pages, time and date of
              your visit, time spent on pages, and other analytical data. We may
              use third-party services such as <span className="text-primary font-medium">Google Analytics</span> to monitor and
              analyze this information.
            </p>
            <p>
              Your Personal Information may also be used to contact you with
              newsletters, informational content, or updates related to <span className="text-primary font-medium">Codework's</span>
              services and offerings.
            </p>
          </div>
        </section>

        {/* Enhanced Cookies */}
        <section id="cookies" className="bg-secondary/30 backdrop-blur-xl border border-primary/10 p-8 rounded-3xl hover:bg-secondary/40 hover:border-primary/30 transition-all duration-500 animate-card-float animation-delay-600">
          <h2 className="flex items-center text-2xl font-bold mb-6 text-primary">
            <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mr-4 shadow-lg shadow-secondary/25">
              <FaCookieBite className="text-primary text-lg" />
            </div>
            <span className="text-primary">Cookies</span>
          </h2>
          <div className="space-y-4 text-primary/90 leading-relaxed">
            <p>
              Our Site uses cookies—small text files stored by your browser—to
              improve user experience. Cookies may be <span className="text-primary font-medium">"session"</span> (deleted after
              use) or <span className="text-primary font-medium">"persistent"</span> (stored for future visits). Persistent cookies
              help us remember preferences and analyze user interaction over time.
            </p>
            <p>
              We may also use cookies placed by third-party providers like Google
              to analyze web traffic or show targeted advertising. You can learn
              more about managing cookies through:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                <a
                  href="https://www.eucookie.eu/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary hover:text-primary/80 underline transition-colors duration-300"
                >
                  EU Cookie Guide
                </a>
              </li>
              <li>
                <a
                  href="https://ico.org.uk/for-organisations/guide-to-pecr/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary hover:text-primary/80 underline transition-colors duration-300"
                >
                  UK ICO Guide
                </a>
              </li>
              <li>
                <a
                  href="https://www.allaboutcookies.org/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary hover:text-primary/80 underline transition-colors duration-300"
                >
                  All About Cookies
                </a>
              </li>
            </ul>
            <p>
              To opt out of Google Analytics cookies, visit:&nbsp;
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:text-primary/80 underline transition-colors duration-300"
              >
                Google Analytics Opt-out Add-on
              </a>
            </p>
          </div>
        </section>

        {/* Enhanced Data Sharing */}
        <section id="data-sharing" className="bg-secondary/30 backdrop-blur-xl border border-primary/10 p-8 rounded-3xl hover:bg-secondary/40 hover:border-primary/30 transition-all duration-500 animate-card-float animation-delay-800">
          <h2 className="flex items-center text-2xl font-bold mb-6 text-primary">
            <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mr-4 shadow-lg shadow-secondary/25">
              <FaShareAlt className="text-primary text-lg" />
            </div>
            <span className="text-primary">Data Sharing</span>
          </h2>
          <div className="space-y-4 text-primary/90 leading-relaxed">
            <p>
              We only share your data with carefully selected partners, vendors,
              and third-party service providers where it is necessary. These
              include:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                <span className="text-primary font-medium">Marketing Platforms:</span> CRM tools, email automation platforms,
                advertising networks.
              </li>
              <li>
                <span className="text-primary font-medium">Analytics Services:</span> Web analysis tools like Google Analytics.
              </li>
            </ul>
            <p>
              We share only the necessary information and ensure our partners do
              not use your data beyond the intended purpose.
            </p>
            <p>
              We may also share Personal Data in the following scenarios:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                Compliance with legal obligations or valid government requests.
              </li>
              <li>Protection against fraud, spam, or unauthorized access.</li>
              <li>When you explicitly consent to the sharing of your data.</li>
            </ul>
          </div>
        </section>

        {/* Enhanced Security */}
        <section id="security" className="bg-secondary/30 backdrop-blur-xl border border-primary/10 p-8 rounded-3xl hover:bg-secondary/40 hover:border-primary/30 transition-all duration-500 animate-card-float animation-delay-1000">
          <h2 className="flex items-center text-2xl font-bold mb-6 text-primary">
            <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mr-4 shadow-lg shadow-secondary/25">
              <FaLock className="text-primary text-lg" />
            </div>
            <span className="text-primary">Security</span>
          </h2>
          <div className="text-primary/90 leading-relaxed">
            <p>
              We prioritize the security of your Personal Information. However, no
              transmission method over the internet or method of electronic
              storage is <span className="text-primary font-medium">100% secure</span>. While we strive to protect your data, we
              cannot guarantee absolute security.
            </p>
          </div>
        </section>

        {/* Enhanced CCPA Rights */}
        <section id="ccpa-rights" className="bg-secondary/30 backdrop-blur-xl border border-primary/10 p-8 rounded-3xl hover:bg-secondary/40 hover:border-primary/30 transition-all duration-500 animate-card-float animation-delay-1200">
          <h2 className="flex items-center text-2xl font-bold mb-6 text-primary">
            <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mr-4 shadow-lg shadow-secondary/25">
              <FaEdit className="text-primary text-lg" />
            </div>
            <span className="text-primary">Your Rights Under the California Consumer Privacy Act (CCPA)</span>
          </h2>
          <div className="space-y-4 text-primary/90 leading-relaxed">
            <p>
              <span className="text-primary font-medium">Codework</span> complies with the CCPA by granting you rights as a
              California consumer, including:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                The right to know what personal information is collected and how
                it is used.
              </li>
              <li>The right to request deletion of your personal data.</li>
              <li>The right to opt out of the sale of personal information.</li>
              <li>
                The right to non-discrimination for exercising your privacy
                rights.
              </li>
            </ul>
          </div>
        </section>

        {/* Enhanced Global Rights */}
        <section id="global-rights" className="bg-secondary/30 backdrop-blur-xl border border-primary/10 p-8 rounded-3xl hover:bg-secondary/40 hover:border-primary/30 transition-all duration-500 animate-card-float animation-delay-1400">
          <h2 className="flex items-center text-2xl font-bold mb-6 text-primary">
            <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mr-4 shadow-lg shadow-secondary/25">
              <FaGlobe className="text-primary text-lg" />
            </div>
            <span className="text-primary">Global Data Subject Rights</span>
          </h2>
          <div className="space-y-4 text-primary/90 leading-relaxed">
            <p>
              If you are a resident of the EEA, UK, or California, you may have
              the following rights:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li><span className="text-primary font-medium">Right to Access:</span> Request data we hold about you.</li>
              <li><span className="text-primary font-medium">Right to Rectification:</span> Correct inaccurate data.</li>
              <li><span className="text-primary font-medium">Right to Deletion:</span> Request deletion of your data.</li>
              <li><span className="text-primary font-medium">Right to Restrict Processing:</span> Limit how your data is used.</li>
              <li>
                <span className="text-primary font-medium">Right to Data Portability:</span> Request data in a structured,
                machine-readable format.
              </li>
              <li>
                <span className="text-primary font-medium">Right to Object:</span> Object to certain types of data processing.
              </li>
              <li><span className="text-primary font-medium">Right to Withdraw Consent:</span> Revoke previously given consent.</li>
              <li>
                <span className="text-primary font-medium">Right to Non-Discrimination:</span> You will not be penalized for
                exercising your rights.
              </li>
            </ul>
            <p>
              To exercise any of these rights, please contact our Data Protection
              Officer at <span className="text-primary font-medium">itsupport@codework.ai</span>. We may require identity
              verification and may be restricted from fulfilling some requests due
              to legal obligations. If you are unsatisfied with how we handle your
              data, you may file a complaint with your local data protection
              authority.
            </p>
          </div>
        </section>

        {/* Enhanced Changes */}
        <section id="changes" className="bg-secondary/30 backdrop-blur-xl border border-primary/10 p-8 rounded-3xl hover:bg-secondary/40 hover:border-primary/30 transition-all duration-500 animate-card-float animation-delay-1600">
          <h2 className="text-2xl font-bold mb-6 text-primary">
            Changes to This Privacy Policy
          </h2>
          <div className="space-y-4 text-primary/90 leading-relaxed">
            <p>
              This Privacy Policy is effective as of <span className="text-primary font-medium">April 1, 2019</span>, and remains in
              effect unless modified in future updates. Changes will become active
              immediately upon posting on this page.
            </p>
            <p>
              We recommend reviewing this page periodically. Continued use of our
              Site after policy changes constitutes your acceptance of those
              changes. If major changes occur, we will notify you via email or
              through a prominent notice on our website.
            </p>
          </div>
        </section>

        {/* Enhanced Contact */}
        <section id="contact" className="bg-secondary/30 backdrop-blur-xl border border-primary/10 p-8 rounded-3xl hover:bg-secondary/40 hover:border-primary/30 transition-all duration-500 animate-card-float animation-delay-1800">
          <h2 className="text-2xl font-bold mb-6 text-primary">Contact Us</h2>
          <div className="text-primary/90 leading-relaxed">
            <p>
              If you have any questions about this Privacy Policy or wish to
              exercise your rights, please contact us at:&nbsp;
              <span className="text-primary font-semibold">
                info@codework.ai
              </span>
            </p>
          </div>
        </section>
      </div>

      {/* Enhanced Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 bg-secondary text-primary p-4 rounded-full shadow-2xl shadow-secondary/25 hover:bg-secondary/90 hover:scale-110 transition-all duration-300 z-50"
        aria-label="Back to top"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>

    {/* Enhanced CSS Animations */}
    <style jsx>{`
      @keyframes blob {
        0% {
          transform: translate(0px, 0px) scale(1);
        }
        33% {
          transform: translate(30px, -50px) scale(1.1);
        }
        66% {
          transform: translate(-20px, 20px) scale(0.9);
        }
        100% {
          transform: translate(0px, 0px) scale(1);
        }
      }

      @keyframes slideUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes cardFloat {
        from {
          opacity: 0;
          transform: translateY(40px) scale(0.95);
        }
        to {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }

      .animate-blob {
        animation: blob 7s infinite;
      }

      .animate-slide-up {
        animation: slideUp 0.8s ease-out;
      }

      .animate-card-float {
        animation: cardFloat 0.8s ease-out;
      }

      .animation-delay-200 {
        animation-delay: 0.2s;
      }

      .animation-delay-400 {
        animation-delay: 0.4s;
      }

      .animation-delay-600 {
        animation-delay: 0.6s;
      }

      .animation-delay-800 {
        animation-delay: 0.8s;
      }

      .animation-delay-1000 {
        animation-delay: 1s;
      }

      .animation-delay-1200 {
        animation-delay: 1.2s;
      }

      .animation-delay-1400 {
        animation-delay: 1.4s;
      }

      .animation-delay-1600 {
        animation-delay: 1.6s;
      }

      .animation-delay-1800 {
        animation-delay: 1.8s;
      }

      .animation-delay-2000 {
        animation-delay: 2s;
      }

      .animation-delay-4000 {
        animation-delay: 4s;
      }
    `}</style>
  </div>
);

export default PrivacyPolicyPage;
