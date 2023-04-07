
export async function post({ request }){
	try{
		const data = await request.json()
		return {
			body: JSON.stringify({
				message: `Thank you for your submission, ${data.Name || data.Email || 'friend'}!`,
			}),
		}
	}
	catch(err){
		return {
			status: 500,
			body: JSON.stringify({
				message: err.message || `Something went wrong`,
			}),
		}
	}

}