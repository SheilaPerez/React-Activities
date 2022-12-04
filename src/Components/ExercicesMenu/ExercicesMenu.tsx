import Options from "./Components/Options/Options";
import { useNavigate } from "react-router-dom";
const ExercicesMenu = () => {
    const navigate = useNavigate();


    return(
        <div>
            <Options options={"React Basics"} handleClickOption={() => navigate("/reactbasics")}></Options>
            <Options options={"To do lists"} handleClickOption={() => navigate("/todolists")}></Options>
            <Options options={"React Hooks"} handleClickOption={() => navigate("/reacthooks")}></Options>
            <Options options={"API practice"} handleClickOption={() => navigate("/api")}></Options>
            <Options options={"Games"} handleClickOption={() => navigate("/games")}></Options>
        </div>
    )
};

export default ExercicesMenu;