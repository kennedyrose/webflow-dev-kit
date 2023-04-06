

function isDev(){
	try{
		if(import.meta.env.MODE === 'development'){
			return true
		}
	}
	catch(err){}
	return false
}


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