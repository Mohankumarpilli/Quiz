import { useNavigate } from "react-router-dom";

function QuizTemplate({ index, question, options, handleNext, handlePrev, handleUserAnswer, userAnswer}) {
    const check = userAnswer[question];
    const nav = useNavigate();
    const handleSubmit = () => {
        nav("/result");
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full border border-gray-100 transform hover:scale-105 transition-transform duration-300">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2 leading-tight">
                        {question}
                    </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                </div>

                <div className="space-y-4 flex flex-col">
                    {options.map((option, index) => {
                        let style;
                        if(check==option){
                            style = "bg-green-200 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-xl p-4 cursor-pointer transition-all duration-200 hover:shadow-md group"
                        }else{
                            style = "bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-xl p-4 cursor-pointer transition-all duration-200 hover:shadow-md group"
                        }
                        return <button
                            key={index}
                            onClick={() => handleUserAnswer(question,option)}
                            className={style}
                        >
                            <div className="flex items-center space-x-3">
                                <div className="w-6 h-6 border-2 border-gray-300 group-hover:border-blue-500 rounded-full flex items-center justify-center bg-white group-hover:bg-blue-50 transition-colors duration-200">
                                    <span className="text-sm font-medium text-gray-600 group-hover:text-blue-600">
                                        {String.fromCharCode(65 + index)}
                                    </span>
                                </div>
                                <span className="text-lg text-gray-700 group-hover:text-gray-900 font-medium">
                                    {option}
                                </span>
                            </div>
                        </button>
                    })}
                </div>

                <div className={index !=0 ? "flex justify-between mt-8 text-center" : "flex justify-end mt-8 text-center"}>
                {index != 0 ? <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200" onClick={handlePrev}>Back</button> : ""}
                {index != 4 ?<button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200" onClick={handleNext}>Next</button> : ""}
                {index == 4 ?<button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200" onClick={handleSubmit}>Submit</button> : ""}
            </div>
            </div>
        </div>
    );
}

export default QuizTemplate;