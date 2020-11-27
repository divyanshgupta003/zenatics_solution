
const initialState = {
    oldSearches : ['divyansh','gupta','zenatix','company']
};

const reducer = (state = initialState, action)=>{

    switch (action.type) {
        case 'ONSUBMIT' :
            const newSearch = [...state.oldSearches];
            newSearch.push(action.inputValue)
            return {
                oldSearches : newSearch
            }
        default:
            return state;
    }
}

export default reducer;