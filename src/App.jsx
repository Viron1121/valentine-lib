import { useState } from "react";
import Cover from "./components/Cover";
import Valentine from "./components/Valentine";
import Video from "./components/Video";

function App() {
  const [step, setStep] = useState("cover");
  const [closing, setClosing] = useState(false);

  const handleYes = () => {
    setClosing(true);
    setTimeout(() => {
      setStep("video");
    }, 800);
  };

  const handleVideoEnd = () => {
    setStep("videoClosing");

    setTimeout(() => {
      setStep("cover");
    }, 3000); 
  };

  return (
    <>
      {step === "cover" && (
        <Cover onOpen={() => setStep("valentine")} />
      )}

      {step === "valentine" && (
        <Valentine onYes={handleYes} closing={closing} />
      )}

      {step === "video" && (
        <Video onEnd={handleVideoEnd} />
      )}

      {step === "videoClosing" && (
        <div className="cover-container">
          <div className="valentine-card video-closing">
            <div className="heart">💖</div>
            <h2>For You</h2>
            <span className="envelope">💌</span>
            <div className="sparkles">✧ ✧ ✧</div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
