import {useRef} from "react";

const Answers = ({ answers, selectedAnswer, answerState , onSelect }) => {
  const shuffledAnswer = useRef();

  if (!shuffledAnswer.current) {
    shuffledAnswer.current = [...answers];
    shuffledAnswer.current.sort((a, b) => Math.random() - 0.5);
  }
  return (
    <>
      <ul id="answers">
        {shuffledAnswer.current.map((answer) => {
          const isSelected = selectedAnswer === answer;
          let cssClasses = "";
          if (answerState === "answered" && isSelected) {
            cssClasses = "selected";
          }
          if (
            (answerState === "correct" || answerState === "wrong") &&
            isSelected
          ) {
            cssClasses = answerState;
          }
          return (
            <li key={answer} className="answer">
              <button
                onClick={() => onSelect(answer)}
                className={cssClasses}
              >
                {answer}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Answers;