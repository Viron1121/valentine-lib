import "./Cover.css";

function Cover({ onOpen }) {
  return (
    <div className="cover-container">
      <div className="valentine-card" onClick={onOpen}>
        <div className="heart">💖</div>
        <h2>Tap to Open</h2>
        <span className="envelope">💌</span>
        <div className="sparkles">✧ ✧ ✧</div>
      </div>
    </div>
  );
}

export default Cover;
