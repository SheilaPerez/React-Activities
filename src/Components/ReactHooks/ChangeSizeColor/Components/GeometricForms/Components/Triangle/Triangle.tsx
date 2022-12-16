import React, { FC } from 'react'
import styles from './Triangle.module.css';

interface Props {
    size: number;
    color: string;
}
const Triangle: FC<Props> = ({ color, size }) =>{
  return (
    <div className={styles.triangle}>
      <svg width={size} height={size} fill={color}>
        <polygon points={`${size / 2}, 0 0, ${size} ${size},${size} `} />
      </svg>
    </div>
  )
}

export default Triangle