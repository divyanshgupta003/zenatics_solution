import React,{Component} from 'react';
import {connect} from 'react-redux';

import styles from './searchBar.module.css';
import InputTag from '../InputTag/InputTag';
import SearchList from '../SearchList/SearchList';
import Button from '../Button/Button';


class SearchBar extends Component{
    state = {
        inputValue : '',
        filteredList : [],
        listShow : false
    } 
    //finding our matches for the inputValue
    filterListOnChange = ()=>{

        const oldList = [...this.props.oldSearches];

        const newFilteredList = oldList.filter((input,index) =>{
            let matchString = input.toLowerCase().match(this.state.inputValue.toLowerCase());
            return (matchString != null)
            // return input.toLowerCase().includes(this.state.inputValue.toLowerCase());
        });

        this.setState({filteredList : newFilteredList});
    }
    //function for two way binding in inputfield
    inputChange = async (event)=>{
        await this.setState({inputValue : event.target.value});
        // console.log(this.state.inputValue + " " + event.target.value.length);

        if(event.target.value.length === 0) this.setState({listShow : false});
        else this.setState({listShow : true});

        this.filterListOnChange(this.props.oldSearches);
    }
    //function for adding an element in the array
    onSubmit = async ()=>{
        this.props.onSubmit(this.state.inputValue);
        await this.setState({inputValue : ''});
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

//collecting state data from reducer
const mapStateToProps = state=>{
    return{
        oldSearches : state.oldSearches
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        onSubmit : (inputValue)=> dispatch({type : 'ONSUBMIT', inputValue : inputValue})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);