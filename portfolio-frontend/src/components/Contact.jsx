import { useState } from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

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
      className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-indigo-500 via-purple-600 to-pink-500 px-6 py-20"
    >
      <div
        className="backdrop-blur-md bg-white/30 rounded-3xl shadow-xl max-w-md w-full p-10 text-center
                   animate-fadeInUp"
      >
        <h2 className="text-5xl font-extrabold text-white mb-2 relative inline-block">
          Get in Touch
          <span className="block w-16 h-1 bg-white rounded-full mt-3 mx-auto opacity-60"></span>
        </h2>

        <p className="text-white/90 mt-6 mb-8 text-lg font-medium">
          Feel free to reach out by email or connect with me on social media.
        </p>

        <div className="flex justify-center items-center space-x-4 mb-10">
          <a
            href={`mailto:${email}`}
            className="text-white font-semibold text-lg underline hover:text-yellow-300 transition"
          >
            {email}
          </a>
          <button
            onClick={copyEmailToClipboard}
            aria-label="Copy email to clipboard"
            className={`relative overflow-hidden px-5 py-2 rounded-full border border-white text-white font-semibold
            hover:bg-yellow-300 hover:text-indigo-900 transition-all duration-300
            focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:ring-opacity-50`}
          >
            {copied ? "Copied!" : "Copy"}
            <span className="ripple absolute rounded-full bg-yellow-300 opacity-20"></span>
          </button>
        </div>

        <div className="flex justify-center space-x-10 text-white text-4xl">
          <a
            href="https://github.com/RoBiul-Hasan-Jisan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-yellow-300 transition transform hover:scale-125"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/robiul-hasan-45766228b/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-yellow-300 transition transform hover:scale-125"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.facebook.com/robiulhasa88"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-yellow-300 transition transform hover:scale-125"
          >
            <FaFacebook />
          </a>
        </div>
      </div>

      {/* Ripple effect CSS (can be in your global styles or Tailwind config) */}
      <style jsx>{`
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
