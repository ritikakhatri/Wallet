import store from "../store/index"

export const fetch_post =()=>({
	type: "FETCH_BALANCE"
})

export const receive_post = (post)=>{
	return {
	type: "REC_BALANCE",
	data: post 
}}

export const receive_error = ()=>({
	type: "Err" 
})

export const add_balance = ()=> ({
	type: "ADD_BALANCE"
})

export const reduce_balance = ()=> ({
	type: "REDUCE_BALANCE"
})

export const thunk_action_creator = (user)=>{

	store.dispatch(fetch_post());

	return (dispatch , getState)=>{
		return fetch(`https://codepen.io/andismith/pen/oqzxyP.js`)
			   .then(data => data.json())
			   .then(data=>{
			   	if(data.message === ' Not Found') {
			   		throw new Error('balance not found')
			   	} else {
			   		dispatch(receive_post(data))
			   	}
			   })
			   .catch(err => dispatch(receive_error()))
	} 
}