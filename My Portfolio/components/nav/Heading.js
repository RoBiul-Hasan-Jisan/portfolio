import { useState } from "react";
import styles from "./heading.module.scss";
import { MyLinks } from "./components/MyLinks";
import { OutlineButton } from "../buttons/OutlineButton";

export const Heading = () => {
  const [showCV, setShowCV] = useState(false);
  const cvPath = "/robiul_cv.pdf";

  return (
    <header className={styles.heading}>
      <div className={styles.filter_ios}></div>
      <MyLinks />
      
      <OutlineButton onClick={() => setShowCV(true)}>
        View My Resume
      </OutlineButton>

      {showCV && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0, 0, 0, 0.95)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 9999,
          overflowY: "auto",
        }}>
          
          <div style={{ 
            width: "90%", 
            maxWidth: "1000px",
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center",
            padding: "10px 0",
            marginBottom: "10px",
            flexWrap: "wrap",
            gap: "10px"
          }}>
            <a 
              href={cvPath} 
              download="Robiul_CV.pdf"
              style={{ 
                color: "#00ffcc", 
                fontWeight: "bold",
                textDecoration: "none",
                padding: "8px 16px",
                border: "1px solid #00ffcc",
                borderRadius: "4px",
                background: "transparent"
              }}
            >
              Download PDF ⬇
            </a>
            <a 
              href={cvPath} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                color: "#00ffcc", 
                fontWeight: "bold",
                textDecoration: "none",
                padding: "8px 16px",
                border: "1px solid #00ffcc",
                borderRadius: "4px",
                background: "transparent"
              }}
            >
              Open in New Tab ↗
            </a>
            <button 
              onClick={() => setShowCV(false)}
              style={{
                background: "red",
                color: "white",
                border: "none",
                padding: "8px 16px",
                borderRadius: "4px",
                cursor: "pointer",
                fontWeight: "bold"
              }}
            >
              CLOSE ✕
            </button>
          </div>

          <div style={{
            width: "90%",
            maxWidth: "1000px",
            height: "80vh",
            background: "white",
            borderRadius: "8px",
            overflow: "hidden",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)"
          }}>
            <object
              data={cvPath}
              type="application/pdf"
              width="100%"
              height="100%"
            >
              <embed
                src={cvPath}
                type="application/pdf"
                width="100%"
                height="100%"
              />
            </object>
          </div>
        </div>
      )}

      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
        <filter id="lensFilter" x="-50%" y="-50%" width="200%" height="150%" filterUnits="objectBoundingBox">
          <feGaussianBlur in="SourceAlpha" stdDeviation="40" result="blur" />
          <feOffset in="blur" dx="0" dy="-30" result="topBlur" />
          <feOffset in="blur" dx="0" dy="30" result="bottomBlur" />
          <feDisplacementMap in="SourceGraphic" in2="bottomBlur" scale="60" xChannelSelector="A" yChannelSelector="A" result="displace" />
          <feBlend mode="normal" in="displace" />
        </filter>
      </svg>
    </header>
  );
};
