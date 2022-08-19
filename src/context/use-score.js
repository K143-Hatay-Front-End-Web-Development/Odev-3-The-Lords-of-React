import { createContext, useContext, useState } from "react";

export const ScoreContext = createContext();
export const useScore = () => useContext(ScoreContext);


const Provider = ({ children }) => {
    
    const [randomOne, setRandomOne] = useState(0);
    const [randomTwo, setRandomTwo] = useState(0);
    const [result, setResult] = useState(0);
    const [question, setQuestion] = useState(0);
    const [operator, setOperator] = useState();
    const [radio, setRadio] = useState("");
    const [values, setValues] = useState([]);
    const [data, setData] = useState({
        point: 0,
        solved: 0,
        correct: 0,
        incorrect: 0,
        round: 0,
    });
    

    return (
        <ScoreContext.Provider
            value={{
                data,
                setData,
                result,
                setResult,
                operator,
                setOperator,
                radio,
                setRadio,
                randomOne,
                setRandomOne,
                randomTwo,
                setRandomTwo,
                question,
                setQuestion,
                values,
                setValues
            }}>
            {children}
        </ScoreContext.Provider>
    )
}
export default Provider