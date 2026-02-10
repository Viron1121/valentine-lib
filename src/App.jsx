import { useState } from "react";
import Cover from "./components/Cover";
import Valentine from "./components/Valentine";
import Video from "./components/Video";
import Questions from "./components/Questions";

function App() {
  const [step, setStep] = useState("cover");
  const [closing, setClosing] = useState(false);
  const [thankYouClosing, setThankYouClosing] = useState(false);

  const handleYes = () => {
    setClosing(true);
    setTimeout(() => {
      setStep("video");
    }, 800); // match Valentine closing animation
  };

  const handleVideoEnd = () => {
    setStep("questions"); // show questions instead of cover
  };

  const handleQuestionsFinish = (answers) => {
    console.log("User answers:", answers);
    setStep("thankYou");

    // animate thank you card closing after 2s
    setTimeout(() => {
      setThankYouClosing(true);
      setTimeout(() => {
        setStep("cover"); // finally go back to cover
        setThankYouClosing(false);
      }, 800); // match closing animation duration
    }, 3000); 
  };

  return (
    <>
      {step === "cover" && <Cover onOpen={() => setStep("valentine")} />}

      {step === "valentine" && (
        <Valentine onYes={handleYes} closing={closing} />
      )}

      {step === "video" && <Video onEnd={handleVideoEnd} />}

      {step === "questions" && (
        <Questions onFinish={handleQuestionsFinish} />
      )}

    {step === "thankYou" && (
  <div className="cover-container">
    <div className={`valentine-card ${thankYouClosing ? "closing" : ""}`}>
      <h2>Thanks for answering! 💖</h2>
      Calculating best match...
      
      {/* Centered cat GIF */}
      <div className="loading-content">
        <img
          src="https://media1.tenor.com/m/mjdhzYyMq9gAAAAC/cat-cat-meme.gif"
          alt="Loading cat"
          className="loading-cat"
        />

        {/* Loading bar */}
        <div className="loading-bar-container">
          <div className="loading-bar"></div>
        </div>
      </div>

      <div className="sparkles">✧ ✧ ✧</div>
    </div>
  </div>
)}
    </>
  );
}

export default App;
