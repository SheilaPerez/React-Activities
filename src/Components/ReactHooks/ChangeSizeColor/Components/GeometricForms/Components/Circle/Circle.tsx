import { FC } from 'react';
import styles from './Circle.module.css';
interface Props {
    size: number;
    color: string;
}
const Circle: FC<Props> = ({ size, color }) => {
  return (
    <div className={styles.circle}>
      <svg width={size} height={size} fill={color}>
        <circle cx={size / 2} cy={size / 2} r={size / 2} />
      </svg>
    </div>
  )
}

export default Circle