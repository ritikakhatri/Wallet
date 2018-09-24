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
				balance: 0
			})
		case "REC_BALANCE": 
		
			return Object.assign({}, state, {
				balance: action.data.balance
			})

		case "ADD_BALANCE" :
			return Object.assign({}, state, {
				balance: action.balance.data + 1
			})

		case "REDUCE_BALANCE" :

			return Object.assign({}, state, {
				balance: action.balance.data - 1
			})

		default :
			return state
	}
}

export default asyncReducer;