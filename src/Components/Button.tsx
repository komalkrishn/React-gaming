 import styles from './Button.module.css'
 interface ButtonProps {
    onClick: () => void;
    color: string;
    children: string
 }
 const Button =({onClick, color, children}: ButtonProps) => {
    return (
        <div>
            <button className={[styles.btn, styles['btn-'+color]].join(' ')} onClick={onClick}>{children}</button>
        </div>
    )
 }
 export default Button