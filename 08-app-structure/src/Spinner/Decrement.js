
import React from 'react';

function Decrement({trigger}){
	return (
		<input type="button" value="Decrement" onClick={() => trigger()} />
	)
}

export default Decrement;