import React from 'react';
function Increment({trigger}){
	return (
		<input type="button" value="Increment" onClick={() => trigger()}/>
	)
}
export default Increment;