var Redux = (function(){

	function createStore(reducer){

		let _subscribers = [];
		let INIT_ACTION = { type : '@@INIT_ACTION', payload : null };
		let currentState = reducer(undefined, INIT_ACTION);

		function subscribe(callback){
			if (typeof callback === 'function')
				_subscribers.push(callback);
		}

		function dispatch(action){
			var newState = reducer(currentState, action);
			if (newState !== currentState){
				currentState = newState;
				triggerChange()
			}
		}

		function triggerChange(){
			_subscribers.forEach(subscriber => subscriber());
		}

		function getState(){
			return currentState;
		}

		return {
			subscribe : subscribe,
			dispatch : dispatch,
			getState : getState
		}
	}
	return {
		createStore : createStore
	}
})();