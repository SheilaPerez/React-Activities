import React, { FC } from 'react'
import styles from './GeometricForms.module.css';

interface Props {
    geometricForm: string,
    color: string,
    handleChangeColor: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleChangeSize: (e: React.ChangeEvent<HTMLInputElement>) => void,
    size: number,
    children: JSX.Element
}

const GeometricComponent: FC<Props> = ({
  geometricForm,
  color,
  handleChangeColor,
  handleChangeSize,
  size,
  children,
}) => {
  return (
    <div>
        <>
            <label htmlFor="size" className={styles.label}>
            {geometricForm} Size
            </label>
            <input
                type="number"
                value={size}
                onChange={handleChangeSize}
                className={styles.inputName}
            />
            <label htmlFor="color" className="label">
                {geometricForm} color
            </label>
            <input type="color" value={color} onChange={handleChangeColor} />
            {children}
        </>
    </div>
  )
}

export default GeometricComponent