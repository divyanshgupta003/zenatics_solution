import styles from './InputTag.module.css';

//Component for Input Tag
const InputTag = (props)=>{
    return(
        <input className={styles.InputTag} placeholder={props.placeholder} type="text" value={props.inputValue} onChange={props.inputChange} onBlur={props.onBlur}></input>
    )
}

export default InputTag;