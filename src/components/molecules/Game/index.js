import * as svgs from "../../../assets/svg";
import Input from "../../atoms/input";
import LiveScore from "../../atoms/live-score";
import QuestionGenerate from "../../atoms/questions";
import "./style.css";
import { useScore } from "../../../context/use-score";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

let randomNew = 5;
const GameElements = () => {
  const {
    radio,
    randomOne,
    randomTwo,
    result,
    setResult,
    question,
    setQuestion,
    values,
    setValues,
  } = useScore();
  const [background, setBackground] = useState();
  const [emotion, setEmotion] = useState();
  let navigate = useNavigate();

  const answer = (e) => {
    if (Number(e.target.value) === result) {
      setValues([ ...values, {a: randomOne, b: randomTwo, c:result, cevapa: true} ]);
      setEmotion(true);
      setBackground("green");
      setTimeout(() => {
        setEmotion(null);
        setBackground("");
      }, 1500);
    } else {
      setValues([ ...values, {a: randomOne, b: randomTwo, c:result, cevapa: false} ]);
      setEmotion(false);
      setBackground("red");
      setTimeout(() => {
        setEmotion(null);
        setBackground("");
      }, 1500);
    }
    setQuestion(question + 1);
    console.log(e.target.value);
    randomNew = Math.ceil(Math.random() * 7);
    console.log("randomNew ", randomNew);
  };


  useEffect(() => {
    // setTimeout(() => {
    if (radio === "topla") {
      setResult(randomOne + randomTwo);
    } else if (radio === "cikar") {
      setResult(randomOne - randomTwo);
    } else if (radio === "carp") {
      setResult(randomOne * randomTwo);
    } else if (radio === "bol") {
      setResult(randomOne / randomTwo);
    }
    if(question == 10){
      setQuestion(0)
      setTimeout(() => {
        navigate("../result", { replace: true });  
      }, 1500);
    }
    console.log(values, ' < BURADA')

    // }, 1500);
  }, [answer]);

  
  return (
    <div className={"game-container " + background}>
      <div className="question-container">
        {emotion === true
          ? svgs.TrueAnswer
          : emotion === false
          ? svgs.FalseAnswer
          : svgs.Question}
        <QuestionGenerate></QuestionGenerate>
      </div>
      <div className="live-container">
        <div className="score-contents">
          <LiveScore></LiveScore>
        </div>
        <div className="answer-buttons">
          <Input
            type="radio"
            title={result}
            id="answer-A"
            inputid="answer-A"
            name="answer"
            inputOnClick={answer}
            inputValue={result}
            classes="answer-input"
            labelClass="answer-btn answer-label answer-A"
          />
          <Input
            type="radio"
            title={result + randomNew}
            id="answer-B"
            inputid="answer-B"
            name="answer"
            inputOnClick={answer}
            inputValue={result + randomNew}
            classes="answer-input"
            labelClass="answer-btn answer-label answer-C"
          />
          <Input
            type="radio"
            title={result - randomNew}
            id="answer-C"
            inputid="answer-C"
            name="answer"
            inputOnClick={answer}
            inputValue={result - randomNew}
            classes="answer-input"
            labelClass="answer-btn answer-label answer-B"
          />
        </div>
      </div>
    </div>
  );
};

export default GameElements;
