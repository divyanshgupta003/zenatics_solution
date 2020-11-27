import styles from './SearchList.module.css';


const SeacrhList = (props)=>{

    //searchList is the list that is passed from parent consisting of possible guesses, will show only 5 entries(can increase by increasing slice value)
    const searchList = props.searchList.sort().slice(0, 5).map(listValue =>{
        return(
            <div className={styles.listItem} key={listValue}> 
                <p>{listValue}</p>
            </div>
        )
    })
    
    return(
        <div className={styles.SearchList}>{searchList}</div>
    )
}

export default SeacrhList;