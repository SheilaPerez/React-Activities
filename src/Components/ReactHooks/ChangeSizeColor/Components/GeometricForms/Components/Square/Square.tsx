import { FC } from 'react';
import styles from './Square.module.css';
interface Props {
    size: number;
    color: string;
}
const Square: FC<Props> = ({ size, color }) => {
  return (
    <div className={styles.square}>
      <svg width={size} height={size} fill={color}>
        <rect width={size} height={size} />
      </svg>
    </div>
  )
}

export default Square