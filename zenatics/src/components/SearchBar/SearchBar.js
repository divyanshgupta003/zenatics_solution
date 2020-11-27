import React,{Component} from 'react';
import styles from './searchBar.module.css';
import InputTag from '../InputTag/InputTag';
import SearchList from '../SearchList/SearchList';
import Button from '../Button/Button';

class SearchBar extends Component{
    state = {
        oldSearches : ['divyansh', 'jeeny','an','fn','yn','hn'],
        inputValue : '',
        filteredList : [],
        guessShow : true,
        listShow : false
    } 
    //finding our matches for the inputValue
    filterListOnChange = ()=>{
        if(this.state.inputValue.trim().length === 0) return;

        const oldList = [...this.state.oldSearches];

        const newFilteredList = oldList.filter((input,index) =>{
            let matchString = input.toLowerCase().match(this.state.inputValue.toLowerCase());
            return (matchString != null)
            // return input.toLowerCase().includes(this.state.inputValue.toLowerCase());
        });

        this.setState({filteredList : newFilteredList});
    }
    //function for two way binding in inputfield
    inputChange = async (event)=>{
        await this.setState({inputValue : event.target.value, listShow : true});
        // console.log(this.state.inputValue + " " + event.target.value.length);

        this.filterListOnChange(this.state.oldSearches);
    }
    //function for adding an element in the array
    onSubmit = async ()=>{
        let oldSearchesCopy = [...this.state.oldSearches];
        await oldSearchesCopy.push(this.state.inputValue);
        await this.setState({inputValue : '', oldSearches : oldSearchesCopy});
    }
    //search guess hides when the user is not searching
    onBlur = ()=>{
        this.setState({listShow : false});
    }
    render(){
        return(
            <div className={styles.SearchBarContainer}>
                <h1>Search Now!!</h1>
                <br /><br />
                <div className={styles.SearchBarOuterDiv}>
                    <div className={styles.InputContainer}>
                        <InputTag onBlur={this.onBlur} placeholder="Search Here..." inputValue={this.state.inputValue} inputChange={this.inputChange} />
                        {
                            (this.state.listShow) ? <SearchList searchList={this.state.filteredList} /> : null
                        }
                        
                    </div>
                    <div>
                        <Button onSubmit={this.onSubmit}>Submit</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchBar;