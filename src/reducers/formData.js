const formDataReducer = (state = "", action) => {
	switch (action.type) {
		
		case 'FORM_DATA_SUBMIT':
		
			let formInputData = action.payload.model;
			console.log("formInputDataformInputDataformInputData",formInputData);
			return Object.assign({}, formInputData);
		default:
			return state;
	}
}

export default formDataReducer