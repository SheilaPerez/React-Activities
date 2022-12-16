
import { useContext, useEffect, useState } from 'react'
import ColorContext from '../../../Context/ColorContext'
import Circle from './Components/GeometricForms/Components/Circle'
import Square from './Components/GeometricForms/Components/Square'
import Triangle from './Components/GeometricForms/Components/Triangle'
import GeometricComponent from './Components/GeometricForms/GeometricForms'
import styles from './ChangeSizeColor.module.css';

function App() {
  const [triangleColor, setTriangleColor] = useState('#E5B8F4')
  const [circleColor, setCircleColor] = useState('#DBA39A')
  const [squareColor, setSquareColor] = useState('#6ECCAF')
  const [triangleSize, setTriangleSize] = useState(50)
  const [circleSize, setCircleSize] = useState(120)
  const [squareSize, setSquareSize] = useState(70)
  const {lightOn, setLightOn} = useContext(ColorContext);

  useEffect(() => {
    if (
      triangleColor === circleColor &&
      triangleColor === squareColor &&
      circleColor === squareColor
    ) {
      alert('Color match!')
    }
  }, [triangleColor, circleColor, squareColor])

  useEffect(() => {
    if (
      triangleSize === circleSize &&
      triangleSize === squareSize &&
      circleSize === squareSize
    ) {
      alert('Same size!')
    }
  }, [triangleSize, circleSize, squareSize])

  return (
    <div className={lightOn ? styles.lightContent : styles.content}>
    <p className={lightOn ? styles.lightTitle : styles.title}>---- Change size and color ----</p>
      <GeometricComponent
        color={triangleColor}
        size={triangleSize}
        geometricForm="Triangle"
        handleChangeSize={(e) => setTriangleSize(parseInt(e.target.value, 10))}
        handleChangeColor={(e) => setTriangleColor(e.target.value)}
      >
        <Triangle color={triangleColor} size={triangleSize} />
      </GeometricComponent>
      <GeometricComponent
        color={circleColor}
        size={circleSize}
        geometricForm="Circle"
        handleChangeSize={(e) => setCircleSize(parseInt(e.target.value, 10))}
        handleChangeColor={(e) => setCircleColor(e.target.value)}
      >
        <Circle color={circleColor} size={circleSize} />
      </GeometricComponent>
      <GeometricComponent
        color={squareColor}
        size={squareSize}
        geometricForm="Square"
        handleChangeSize={(e) => setSquareSize(parseInt(e.target.value, 10))}
        handleChangeColor={(e) => setSquareColor(e.target.value)}
      >
        <Square size={squareSize} color={squareColor} />
      </GeometricComponent>
    </div>
  )
}

export default App
