import { useState } from "react";
import QuizTemplate from "./QuizTemplate";

function Quiz({data, handleUserAnswer, userAnswer}) {
    const [index, setIndex] = useState(0);
    const handleNext = () => {
        if (index + 1 <= 4) {
            setIndex(index + 1);
        }
    }
    const handlePrev = () => {
        if (index - 1 >= 0) {
            setIndex(index - 1);
        }
    }
    return <div>
        <div>{data.map((element,id) => {
            if(id==index){
                return <QuizTemplate index={id} handleUserAnswer={handleUserAnswer} key={id} handleNext={handleNext} handlePrev={handlePrev} question={Object.keys(element)} options={element[Object.keys(element)]} userAnswer={userAnswer}/>
            }
        })}</div>
    </div>
}

export default Quiz;