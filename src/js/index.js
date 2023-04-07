import WebflowForm from '@kennedyrose/webflow-form-controller'

let endpoint = import.meta.env.PUBLIC_API_ENDPOINT
console.log(`endpoint`, endpoint)
// if(endpoint.indexOf(`://`) === -1){
// 	endpoint = `https://${endpoint}`
// }
// if(endpoint.endsWith(`/`)){
// 	endpoint = endpoint.slice(0, -1)
// }

const form = new WebflowForm(`#wf-form-Contact`, async () => {
	form.disable().showWait()


	const data = form.getValues()
	console.log(`data`, data)

	

	form.showSuccess().hideWait().hideForm().scrollTo()
})