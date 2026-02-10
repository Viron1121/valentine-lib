import "./Valentine.css";

function Valentine({ onYes }) {
  return (
    <div className="valentine-container">
      <div className="valentine-card">
        <div className="sparkles">✨ ✨ ✨</div>

        <h1>
          Will you be my <br />
          Valentine? <span>💖</span>
        </h1>

        <p>
          I couldn't imagine celebrating this day with
          anyone else.
        </p>

        <div className="buttons">
          <button className="btn yes" onClick={onYes}>
            Yes 💕
          </button>
          <button className="btn yes" onClick={onYes}>
            Of course 💘
          </button>
        </div>

        <div className="tiny-hearts">♡ ♡ ♡ ♡ ♡</div>
      </div>
    </div>
  );
}

export default Valentine;
