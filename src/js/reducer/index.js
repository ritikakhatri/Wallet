const initialState = {
	balance: 0,
	isFetching: false,
	isError: false
}

const asyncReducer = (state= initialState, action)=>{
	switch(action.type) {
		case "FETCH_BALANCE": 
			return Object.assign({}, state, {
				isFetching: true,
				balance: 0,
				isError: false
			})
		case "REC_BALANCE": 
		
			return Object.assign({}, state, {
				isFetching: false,
				balance: action.data.balance,
				isError: false
			})

		case "ADD_BALANCE" :
		    console.log(state) 
			return Object.assign({}, state, {
				isFetching: false,
				balance: state.balance + 1,
				isError: false
			})

		case "REDUCE_BALANCE" :
		    console.log(state) ;
		    let newState = {};

		    if(state.balance > 0) {
		    	newState = Object.assign({}, state, {
				isFetching: false,
				balance: state.balance - 1,
				isError: false
				})
		    } else {
		    	newState = state
		    }
			return newState

		default :
			return state
	}
}

export default asyncReducer;