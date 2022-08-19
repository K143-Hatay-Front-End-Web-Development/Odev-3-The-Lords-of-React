import React from "react";
import { Link } from "react-router-dom";
import { LeftVector, RightVector } from "../../../assets/svg";
import { useEffect } from "react";
import { useScore } from "../../../context/use-score";
import Button from "../../atoms/button";
import "./style.css";

function EndGame() {

  let wrong = 0
  let right = 0
  const { values, operator, data, setData } = useScore();

  values.forEach(element => {
    if (element.cevapa === true) {
      right++;
    }
    else{
      wrong++;
    }
    setData({...data, solved: right + wrong})
  });
  
  
  useEffect(() => {
    
    if (operator === "+") {
      setData({ ...data, point: right * 2 , correct: right, incorrect: wrong })
    }
    else if (operator === "-") {
      setData({ ...data, point: right * 3 , correct: right, incorrect: wrong  })
    }
    else if (operator === "*") {
      setData({ ...data, point: right * 4, correct: right, incorrect: wrong  })
    }
    else if (operator === "/") {
      setData({ ...data, point: right * 5 , correct: right, incorrect: wrong })
    }
  }, [])

  
  useEffect(() => {
    localStorage.setItem('localdata', JSON.stringify(data))
  }, [data])
  


  return (
    <div className="containerM">
      <div className="scores">
        <label>Sonuç</label>
        {LeftVector}
        <ul className="scoresLi">
          <li>Puan:{data.point}</li>
          <li>Doğru Cevap:{data.correct}</li>
          <li>Yanlış Cevap:{data.incorrect}</li>
        </ul>
        <div className="scoreBtn">
          <Link to={"/"}>
            <Button title="Başa Dön" />
          </Link>
        </div>
      </div>
      <div className="questions">
        <label>Sorular</label>
        {RightVector}
        <div className="questions2">
          <ul>
            {values.map((item, index) => (
              <li key={"data_" + index}>{item.a} {operator} {item.b} = {item.c} {item.cevapa ? "✓" : "X"}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default EndGame;
