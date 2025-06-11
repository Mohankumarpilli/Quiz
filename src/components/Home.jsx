import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home({ setUserDetails }) {
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const nav = useNavigate();
    const inputRef = useRef(null);

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            inputRef.current.blur(); // Remove focus
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userName, " ", userEmail);
        setUserDetails({ name: userName, email: userEmail })
        setUserEmail("");
        setUserName("");
        nav("/quiz");
    }

    return <div className="h-full w-full p-5">
        <h1 className="text-7xl text-center m-4 p-5 font-bold">Welcome to Quize</h1>
        <h2 className="text-4xl text-center m-4 pt-4 font-medium">Please enter you details</h2>
        <form action="" onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-4 m-10 justify-center">
            <div className="flex justify-center">
                <label htmlFor="Name" className="bg-white text-black rounded-l-3xl h-14 text-2xl pl-6 pt-3">Enter Name :-</label>
                <input id="Name" name="Name" type="text" className="bg-white rounded-r-3xl h-14 w-xs text-2xl pl-1 outline-0" onChange={(e) => setUserName(e.target.value)} />
            </div>
            <div className="flex justify-center">
                <label htmlFor="email" className="bg-white text-black rounded-l-3xl h-14 text-2xl pl-6 pt-3">Enter email :-</label>
                <input id="email" name="email" type="text" className="bg-white rounded-r-3xl h-14 w-xs text-2xl pl-1 outline-0" onChange={(e) => setUserEmail(e.target.value)} onKeyDown={handleKeyDown}/>
            </div>
            <div className="flex justify-center m-4">
                <button className="bg-black pl-5 pr-5 pb-3 pt-2 font-bold rounded-3xl text-white text-2xl">Start Test</button>
            </div>
        </form>
    </div>

}

export default Home;