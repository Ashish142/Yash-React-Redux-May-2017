export default function spinnerActionCreator(dispatch){
	return {
			increment : function(){
				dispatch({ type : 'INCREMENT'});
			},
			decrement : function(){
				dispatch({ type : 'DECREMENT'});
			}
		}
}