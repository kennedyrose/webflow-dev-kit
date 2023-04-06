import WebflowForm from '@kennedyrose/webflow-form-controller'

const form = new WebflowForm(`#wf-form-Contact`, async () => {
	form.disable().showWait()


	const data = form.getValues()
	console.log(`data`, data)

	

	form.showSuccess().hideWait().hideForm().scrollTo()
})