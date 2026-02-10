import { useState, useEffect, useRef } from "react";
import "./Questions.css";

function Questions({ onFinish }) {
  const questions = [
    {
      question: "What do you prefer on a date?",
      options: [
        { text: "Fine dining 🍽️", img: "https://media.licdn.com/dms/image/v2/C4E12AQGLzYR8mEjDwQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1520165603604?e=2147483647&v=beta&t=IegK7uQUJhgKR9_pJclQrznxCvRxX2CL0oHTrTLHpEs" },
        { text: "Outdoor adventure 🌳", img: "https://cdn.shopify.com/s/files/1/0279/3324/5522/files/outdoor-movie-date_large.jpg?v=1592330216" },
      ],
    },
    {
      question: "What's your favorite dessert?",
      options: [
        { text: "Chocolate 🍫", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNq4l6q52_dM3jkfG42qS9UHamN5KfnrDjwQ&s" },
        { text: "Ice cream 🍦", img: "https://cdn.britannica.com/50/80550-050-5D392AC7/Scoops-kinds-ice-cream.jpg" },
      ],
    },
    {
      question: "Which movie genre do you like?",
      options: [
        { text: "Romantic ❤️", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqWDw9mQ7AQ9jzpfhhlh1CIdEBSTUjsTmt7g&s" },
        { text: "Fantasy 🎬", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLzESqe6paAcqhh6XdQLeyhRSrM2RhQKe8jw&s" },
      ],
    },
  ];

  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const audioRef = useRef(null);

  // Start music when component mounts
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5; // start at 50%
      audioRef.current.play().catch(() => {});
    }
  }, []);

  const handleAnswer = (option) => {
    setAnswers([...answers, option.text]);

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      // Fade out music before finishing
      if (audioRef.current) {
        let vol = audioRef.current.volume;
        const fadeInterval = setInterval(() => {
          vol -= 0.05; // reduce 5% each step
          if (vol <= 0) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            clearInterval(fadeInterval);
            onFinish([...answers, option.text]);
          } else {
            audioRef.current.volume = vol;
          }
        }, 100); // every 100ms
      } else {
        onFinish([...answers, option.text]);
      }
    }
  };

  const { question, options } = questions[current];

  return (
    <div className="questions-container">
      <audio ref={audioRef} src="/valentine-lib/background-music.mp3" loop />
      <div className="question-card">
        <h2>{question}</h2>
        <div className="options">
          {options.map((opt) => (
            <button
              key={opt.text}
              className="btn"
              onClick={() => handleAnswer(opt)}
            >
              <img src={opt.img} alt={opt.text} />
              <span>{opt.text}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Questions;
