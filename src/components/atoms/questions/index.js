import './style.css'
import { useScore } from '../../../context/use-score'
import { useEffect, useState } from 'react'

const QuestionGenerate = () => {

  const { radio, randomOne, setRandomOne, randomTwo, setRandomTwo, question, operator, setOperator} = useScore()

  

  const handleChange = () => {
    if (radio === "topla") {              // -*-*-*-*-*-*====> TOPLAMA
      setOperator("+")
      setRandomOne(Math.ceil(Math.random() * 49));
      setRandomTwo(Math.ceil(Math.random() * 50));
    }
    else if (radio === "cikar") {        // -*-*-*-*-*-* ===> ÇIKARMA
      setOperator("-")
      let x, y
      x = Math.ceil(Math.random() * 99)
      y = Math.ceil(Math.random() * 99)
      if (x > y) {
        setRandomOne(x)
        setRandomTwo(y)
      }
      else {
        setRandomOne(y)
        setRandomTwo(x)
      }
      
    }
    else if (radio === "carp") {         //-*-*-*-*-* ======> ÇARPMA
      setOperator("x")
      setRandomOne(Math.ceil(Math.random() * 10));
      setRandomTwo(Math.ceil(Math.random() * 10));
    }
    else if (radio === "bol") {          // -*-*-*-*-*-*-* ======= BÖLME
      setOperator("/")
      let x, y
      x = Math.ceil(Math.random() * (100 - 10 + 1))
      y = Math.ceil(Math.random() * 9)
      if (x % y === 0) {
        setRandomOne(x)
        setRandomTwo(y)
        console.log(x / y)
      }
      else {
        setRandomOne(x)
        setRandomTwo(y)
        console.log(x / y)
      }
    }
  }
  
  useEffect(() => { 
      handleChange()
  }, [question])

  return (
    <div className='generator-container'>
      <span className='generator-span'>{randomOne} {operator} {randomTwo}</span>
    </div>
  )
}
export default QuestionGenerate
