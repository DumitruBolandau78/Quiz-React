import { useState } from "react";

const Quiz = () => {
  const dataQuiz = [
    {
      question: "Ce este html?",
      variants: [
        "HyperText Markup Language",
        "Limbaj de programare",
        "O chestie",
      ],
      correct: 0,
    },
    {
      question: "Ce este css?",
      variants: ["Matematica", "bsasdsa", "Stilizare"],
      correct: 2,
    },
    {
      question: "Ce este js?",
      variants: ["Ideie n am bratu", "Limbaj de programare", "Pizza"],
      correct: 1,
    },
  ];

  const [procentage, setProcentage] = useState(0);
  const [step, setStep] = useState(0);
  const [answerIndex, setAnswerIndex] = useState(0);

  function clickHandler(answer) {
    setStep(step + 1);

    const procent = Math.floor(100 / dataQuiz.length);
    setProcentage(procent * (step + 1));

    if(answer === dataQuiz[step].correct){
        setAnswerIndex(answerIndex + 1);
    }
  }

  return (
    <div className="quiz-box">
      {step < dataQuiz.length ? (
        <div>
            <div className="progress-bar">
                <div className="progress-bar__child" style={{width: `${procentage}%`}}></div>
            </div>

            <ul>
                <h1 className="question">{dataQuiz[step].question}</h1>

                {dataQuiz[0].variants.map((item, index) => (
                    <li onClick={() => clickHandler(index)} key={index}>
                        {dataQuiz[step].variants[index]}
                    </li>
                ))}
            </ul>
        </div>
      ) : (
        <div className="win">
            <div className="emoji">🎉🎉🎉</div>
            <h1>You gave {answerIndex} correct answers from {dataQuiz.length}!</h1>
        </div>
      )}
    </div>
  );
};

export default Quiz;