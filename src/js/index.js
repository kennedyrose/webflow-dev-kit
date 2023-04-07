import WebflowForm from '@kennedyrose/webflow-form-controller'
import webflowConfig from '../../webflow.config'

let endpoint = webflowConfig.apiUrl
console.log(`endpoint`, endpoint)

const form = new WebflowForm(`#wf-form-Contact`, async () => {
	form.disable().showWait()


	const data = form.getValues()
	console.log(`data`, data)

	

	form.showSuccess().hideWait().hideForm().scrollTo()
})