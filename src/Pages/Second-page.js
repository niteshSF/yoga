import Photo from "../assets/landing-image.png";
import btn from "../assets/enter-btn-2.png";
import "./second.css";
import Audio from "../assets/bg-audio.mp3";

const SecondPage = () => {
  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        height: "100vh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* -------------------- audio -------------------- */}

      {/* <div>
        <audio src={Audio} autoPlay loop />
      </div> */}

      {/* Background Image */}

      <img
        src={Photo}
        alt="My Description"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "fill",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />

      {/* -------------- Button 1 -------------- */}

      <button
        onClick={() =>
          window.open(
            "https://yogaapps.samskritifoundation.org/yogasutra/",
            "_blank"
          )
        }
        // onClick={() =>
        //   (window.location.href =
        //     "https://yogaapps.samskritifoundation.org/yogasutra/")
        // }
        className="first_enter_btn"
      >
        <img
          src={btn}
          alt="btn"
          style={{
            height: "65px",
            width: "auto",
          }}
        />
      </button>

      {/* -------------- Button 2 -------------- */}

      <button
        onClick={() =>
          window.open(
            "https://yogaapps.samskritifoundation.org/gheranda/",
            "_blank"
          )
        }
        // onClick={() =>
        //   (window.location.href =
        //     "https://yogaapps.samskritifoundation.org/gheranda/")
        // }
        className="second_enter_btn"
      >
        <img
          src={btn}
          alt="btn"
          style={{
            height: "65px",
            width: "auto",
          }}
        />
      </button>

      {/* -------------- Button 3 -------------- */}

      <button
        onClick={() =>
          window.open(
            "https://yogaapps.samskritifoundation.org/yoga_taravali/",
            "_blank"
          )
        }
        // onClick={() =>
        //   (window.location.href =
        //     "https://yogaapps.samskritifoundation.org/yoga_taravali/")
        // }
        className="third_enter_btn"
      >
        <img
          src={btn}
          alt="btn"
          style={{
            height: "65px",
            width: "auto",
          }}
        />
      </button>

      {/* -------------- Button 4 -------------- */}

      <button
        onClick={() =>
          window.open(
            "https://yogaapps.samskritifoundation.org/HYPS/",
            "_blank"
          )
        }
        // onClick={() =>
        //   (window.location.href =
        //     "https://yogaapps.samskritifoundation.org/HYPS/")
        // }
        className="fourth_enter_btn"
      >
        <img
          src={btn}
          alt="btn"
          style={{
            height: "65px",
            width: "auto",
          }}
        />
      </button>
    </div>
  );
};

export default SecondPage;
