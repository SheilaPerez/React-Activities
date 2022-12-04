import { useContext, useEffect, useState } from "react";
import GeometricForms from "./Components";
import styles from './ChangeSizeColor.module.css';
import ColorContext from "../../../Context/ColorContext";

const ChangeSizeColor = () => {
    const [triangleColorValue, setTriangleColorValue] = useState("#E5B8F4");
    const [circleColorValue, setCircleColorValue] = useState("#DBA39A");
    const [squareColorValue, setSquareColorValue] = useState("#6ECCAF");
    const [triangleSize, setTriangleSize] = useState(90);
    const [circleSize, setCircleSize] = useState(100);
    const [squareSize, setSquareSize] = useState(105);
    const {lightOn, setLightOn} = useContext(ColorContext);

    useEffect(() => {
        if (
        triangleColorValue === circleColorValue &&
        triangleColorValue === squareColorValue &&
        circleColorValue === squareColorValue
        ) {
        alert("Color match!");
        }
    }, [triangleColorValue, circleColorValue, squareColorValue]);

    useEffect(() => {
        if (
        triangleSize === circleSize &&
        triangleSize === squareSize &&
        circleSize === squareSize
        ) {
        alert("Same size!");
        }
    }, [triangleSize, circleSize, squareSize]);

    const changeColorTriangle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTriangleColorValue(e.target.value);
    };
    const changeColorCircle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCircleColorValue(e.target.value);
    };
    const changeColorSquare = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSquareColorValue(e.target.value);
    };
    const changeSizeTriangle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTriangleSize(e.target.value as any);
    };
    const changeSizeCircle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCircleSize(e.target.value as any);
    };
    const changeSizeSquare = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSquareSize(e.target.value as any);
    };

    return(
        <div  className={lightOn ? styles.lightContent : styles.content}>
            <p className={lightOn ? styles.lightTitle : styles.title}>---- Change color and size ----</p>
            <GeometricForms
                geometricForm={"Triangle"}
                handleChangeSize={(e) => changeSizeTriangle(e)}
                sizeValue={triangleSize}
                style={{
                borderBottom: `${triangleSize}px solid ${triangleColorValue}`,
                borderRight: `${triangleSize / 2}px solid transparent`,
                borderTop: `0 solid transparent`,
                borderLeft: `${triangleSize / 2}px solid transparent`,
                }}
                colorValue={triangleColorValue}
                geometricClass={"triangle"}
                handleChangeColor={(e) => changeColorTriangle(e)}
            ></GeometricForms>
            <GeometricForms
                geometricForm={"Circle"}
                handleChangeSize={(e) => changeSizeCircle(e)}
                sizeValue={circleSize}
                style={{
                backgroundColor: circleColorValue,
                width: `${circleSize}px`,
                height: `${circleSize}px`,
                }}
                colorValue={circleColorValue}
                geometricClass={"circle"}
                handleChangeColor={(e) => changeColorCircle(e)}
            ></GeometricForms>
            <GeometricForms
                geometricForm={"Square"}
                handleChangeSize={(e) => changeSizeSquare(e)}
                sizeValue={squareSize}
                style={{
                backgroundColor: squareColorValue,
                width: `${squareSize}px`,
                height: `${squareSize}px`,
                }}
                colorValue={squareColorValue}
                geometricClass={"square"}
                handleChangeColor={(e) => changeColorSquare(e)}
            ></GeometricForms>
            </div>
    )
}

export default ChangeSizeColor;