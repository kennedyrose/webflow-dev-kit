import hijackForm from "./hijack-form"

function isDev(){
	try{
		if(import.meta.env.MODE === 'development'){
			return true
		}
	}
	catch(err){}
	return false
}



hijackForm({
	form: '#wf-form-Contact',
	onSubmit: async (data) => {
		console.log(`data`, data)
	},
})


// let apiRoute = import.meta.env.VITE_API
// console.log(`apiRoute`, apiRoute)
// apiRoute = apiRoute.replace(/\/$/, '')

// async function fetchData(){
// 	const response = await fetch(`${apiRoute}/hello`)
// 	const data = await response.json()
// 	console.log(data)
// }
// fetchData()
// 	.catch(err => console.error(err))