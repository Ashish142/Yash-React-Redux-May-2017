export default function spinnerReducer(currentState = 0, action){
	switch(action.type){
		case  'INCREMENT' :
			return ++currentState;
		case 'DECREMENT' :
			return --currentState;
		default:
			return currentState;
	}
}