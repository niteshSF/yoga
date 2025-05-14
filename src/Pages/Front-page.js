import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Video from "../assets/bg-video.mp4";
import ButtonImage from "../assets/enter-btn-1.png";
import sf from "../assets/sf-logo.png";
import goi from "../assets/goi-logo.png";
import Audio from "../assets/bg-audio.mp3";

const FirstPage = () => {
  const navigate = useNavigate();
  const [logoOpacity, setLogoOpacity] = useState(0);
  const [buttonOpacity, setButtonOpacity] = useState(0);

  // logo FADE IN 
  useEffect(() => {
    const logoTimer = setTimeout(() => {
      let currentOpacity = 0;
      const logoInterval = setInterval(() => {
        if (currentOpacity < 1) {
          currentOpacity += 0.1;
          setLogoOpacity(parseFloat(currentOpacity.toFixed(2)));
        } else {
          clearInterval(logoInterval);
        }
      }, 600);
    }, 5900);

    return () => clearTimeout(logoTimer);
  }, []);

  // button FADE IN 
  useEffect(() => {
    const buttonTimer = setTimeout(() => {
      let currentOpacity = 0;
      const buttonInterval = setInterval(() => {
        if (currentOpacity < 1) {
          currentOpacity += 0.1;
          setButtonOpacity(parseFloat(currentOpacity.toFixed(2)));
        } else {
          clearInterval(buttonInterval);
        }
      }, 800);
    }, 17000);

    return () => clearTimeout(buttonTimer);
  }, []);

  return (
    <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>

      {/* Audio */}
      <div>
        <audio src={Audio} autoPlay loop />
      </div>

      {/* ----------------- Background Video ----------------- */}
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "fill",
          zIndex: -1,
        }}
      >
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* ----------------------- Enter Button ----------------------- */}

      <div
        style={{
          position: "relative",
          zIndex: 1,
          height: "100%",
          transition: "opacity 0.8s ease-in-out",
        }}
      >
        <button
          onClick={() => navigate("/second")}
          style={{
            position: "absolute",
            bottom: "37vh",
            right: "18vw",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: 0,
            zIndex: 2,
            opacity: buttonOpacity, 
            transition: "opacity 0.8s ease-in-out",
          }}
        >
          <img
            src={ButtonImage}
            alt="Enter"
            style={{
              width: "160px",
              height: "auto",
              transition: "transform 0.3s ease-in-out",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.1)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </button>
      </div>

      {/* ---------------------- Logos ---------------------- */}

      <>
        {/* ---- SF Logo ---- */}
        <button
          onClick={() =>
            window.open("https://samskritifoundation.org/", "_blank")
          }
          style={{
            position: "absolute",
            top: "2vh",
            right: "7vw",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: 0,
            zIndex: 2,
            opacity: logoOpacity,
            transition: "opacity 0.8s ease-in-out",
          }}
        >
          <img
            src={sf}
            alt="SF Logo"
            style={{
              width: "200px",
              height: "auto",
              transition: "transform 0.3s ease-in-out",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.08)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </button>

        {/* ---- GOI Logo ---- */}
        <button
          onClick={() =>
            window.open(
              "https://namayush.gov.in/content/central-council-research-yoga-naturopathy-ccryn",
              "_blank"
            )
          }
          style={{
            position: "absolute",
            top: "2.8vh",
            right: "26vw",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: 0,
            zIndex: 2,
            opacity: logoOpacity,
            transition: "opacity 0.8s ease-in-out",
          }}
        >
          <img
            src={goi}
            alt="GOI Logo"
            style={{
              width: "380px",
              height: "auto",
              transition: "transform 0.3s ease-in-out",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.06)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </button>
      </>
    </div>
  );
};

export default FirstPage;
