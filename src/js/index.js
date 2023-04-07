import WebflowForm from '@kennedyrose/webflow-form-controller'

const endpoint = import.meta.env.PUBLIC_API_ENDPOINT
console.log(`endpoint`, endpoint)

const form = new WebflowForm(`#wf-form-Contact`, async () => {
	form.disable().showWait()


	const data = form.getValues()
	console.log(`data`, data)

	

	form.showSuccess().hideWait().hideForm().scrollTo()
})