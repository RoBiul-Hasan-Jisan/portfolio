import { useState } from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { SiCodeforces } from "react-icons/si";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "robiulhasan88@gmail.com";

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-[#0f172a] via-[#3b82f6] to-[#7ab1d3] px-6 py-20"
    >
      <div
        className="backdrop-blur-md bg-white/10 rounded-3xl shadow-2xl max-w-md w-full p-10 text-center
                   animate-fadeInUp"
      >
        {/* Header */}
        <h2 className="text-5xl font-extrabold text-white mb-2 relative inline-block">
          Get in Touch
          <span className="block w-16 h-1 bg-white rounded-full mt-3 mx-auto opacity-50"></span>
        </h2>

        <p className="text-white/90 mt-6 mb-8 text-lg font-medium">
          Feel free to reach out by email or connect with me on social media.
        </p>

        {/* Email Section */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
          <a
            href={`mailto:${email}`}
            className="text-white font-semibold text-base underline hover:text-[#e0f2ff] transition"
          >
            {email}
          </a>
          <button
            onClick={copyEmailToClipboard}
            aria-label="Copy email to clipboard"
            className={`relative overflow-hidden px-5 py-2 rounded-full border border-white/50 text-white font-semibold
            hover:bg-white/20 hover:text-white transition-all duration-300
            focus:outline-none focus:ring-2 focus:ring-white/40`}
          >
            {copied ? "Copied!" : "Copy"}
            <span className="ripple absolute rounded-full bg-white/20 opacity-20"></span>
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-10 text-white text-3xl sm:text-4xl">
          <a
            href="https://github.com/RoBiul-Hasan-Jisan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-[#e0f2ff] transition transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/robiul-hasan-45766228b/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-[#e0f2ff] transition transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.facebook.com/robiulhasa88"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-[#e0f2ff] transition transform hover:scale-110"
          >
            <FaFacebook />
          </a>
          <a
            href="https://codeforces.com/profile/RobiulHasanJisan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Codeforces"
            className="hover:text-yellow-300 transition transform hover:scale-125"
          >
            <SiCodeforces />
          </a>
        </div>
      </div>

      {/* Ripple and FadeIn Animation */}
      <style>{`
        .ripple {
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          pointer-events: none;
          transform: scale(0);
          animation: ripple 0.6s linear;
        }
        button:active .ripple {
          transform: scale(4);
          opacity: 0;
          transition: transform 0.6s, opacity 1s;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease forwards;
        }
      `}</style>
    </section>
  );
}
