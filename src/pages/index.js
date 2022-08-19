
import Main from "./main"
import Game from "./game"
import Result from "./result"
import { Routes, Route } from "react-router-dom";

const Page = () =>{
    return(
        <>
            <Routes>
                <Route path="/" element={<Main />}></Route>
                <Route path="/game" element={<Game />}></Route>
                <Route path="/result" element={<Result />}></Route>
            </Routes>
        </>
    )
}

export default Page