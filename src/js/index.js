import WebflowForm from '@kennedyrose/webflow-form-controller'
import webflowConfig from '../../webflow.config'

// On form submit
new WebflowForm(`#wf-form-Email-Form`, async form => {
	// Disable form and show wait message
	form.disable().showWait()

	// Get form data
	const data = form.getValues()

	// Send data to API
	try{
		const res = await fetch(`${webflowConfig.apiUrl}/api/hello`, {
			method: `POST`,
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
		const json = await res.json()

		// Show success message and hide form
		form.showSuccess(json.message)
			.hideForm()
	}
	catch(err){
		// Show error message
		form.showError(err.message || `Something went wrong`)
	}

	// Hide wait message and scroll to form
	form.hideWait().scrollTo()
	

})