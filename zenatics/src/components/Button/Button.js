import styles from './Button.module.css';

//Button Component 
const Button = (props)=>{
    return(
        <button className={styles.Button} onClick={props.onSubmit}>{props.children}</button>
    );
}

export default Button;