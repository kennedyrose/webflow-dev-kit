let apiRoute = import.meta.env.VITE_API
apiRoute = apiRoute.replace(/\/$/, '')

async function fetchData(){
	const response = await fetch(`${apiRoute}/hello`)
	const data = await response.json()
	console.log(data)
}
fetchData()
	.catch(err => console.error(err))