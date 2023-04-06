import WebflowForm from "./webflow-form"

const form = new WebflowForm(`#wf-form-Contact`, async () => {
	form.disable().showWait()


	const data = form.getValues()
	console.log(`data`, data)

	

	form.enable().hideWait()
})