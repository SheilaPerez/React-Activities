import { FC } from "react";
import styles from './GeometricForms.module.css'
interface Props {
    geometricForm: string;
    geometricClass: string;
    colorValue: string;
    handleChangeColor: (e: React.ChangeEvent<HTMLInputElement>) => void;
    style: any;
    handleChangeSize: (e: React.ChangeEvent<HTMLInputElement>) => void;
    sizeValue: number;
  }
  const GeometricForms: FC<Props> = ({
    geometricForm,
    geometricClass,
    colorValue,
    handleChangeColor,
    style,
    handleChangeSize,
    sizeValue,
  }) => {
    return (
      <div>
        <label className={styles.label}>{geometricForm} Size</label>
        <input
          type="number"
          value={sizeValue}
          onChange={handleChangeSize}
          className={styles.inputName}
        ></input>
        <label className={styles.label}>{geometricForm} color</label>
        <input
          type="color"
          value={colorValue}
          onChange={handleChangeColor}
        ></input>
        <div className={styles[geometricClass]} style={style}></div>
      </div>
    );
  };
  
  export default GeometricForms;
  