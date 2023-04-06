export default function hijackForm({ form, onSubmit }){
	if(typeof form === 'string'){
		form = document.querySelectorAll(form)
		form = Array.from(form)
	}
	const allForms = Array.isArray(form) ? form : [form]
	for(let i = 0; i < allForms.length; i++){
		let form = allForms[i]
		if(form.tagName !== 'FORM'){
			form = form.querySelector('form')
		}
		if(form.dataset.hijacked){
			continue
		}
		form.dataset.hijacked = true

		// Disable default Webflow submit behavior
		const container = form.parentNode
		container.classList.remove('w-form')


		form.addEventListener('submit', async (e) => {
			e.preventDefault()

			// Show loading state
			const hideLoading = showLoading(form)

			// Submit form
			const formData = new FormData(form)
			const data = Object.fromEntries(formData)
			let errored = false
			try{
				await onSubmit(data)
				onSuccess(container, form)
			}
			catch(err){
				onError(container, err)
				errored = true
			}

			// Hide loading state
			hideLoading()
		})
	}

}

function onError(container, err){
	console.error(err)
	const errorEl = container.querySelector('.w-form-fail')
	if(errorEl){
		errorEl.style.display = 'block'
		errorEl.innerHTML = err.message
	}
	else{
		alert(err.message)
	}
}

function onSuccess(container, form){
	const successEl = container.querySelector('.w-form-done')
	if(successEl){
		successEl.style.display = 'block'
	}
	// Hide form
	form.style.display = 'none'

}

function showLoading(form){

	// Hide error messages
	const errorEls = form.querySelectorAll('.w-form-fail')
	for(let i = 0; i < errorEls.length; i++){
		errorEls[i].style.display = 'none'
	}

	// Show wait indicators
	const waitIndicators = form.querySelectorAll('[data-wait]')
	for(let i = 0; i < waitIndicators.length; i++){
		let oldHtml = waitIndicators[i].innerHTML
		waitIndicators[i].dataset.unwait = oldHtml
		waitIndicators[i].value = waitIndicators[i].dataset.wait
	}

	// Disable the form
	const inputs = form.querySelectorAll('input, textarea, button')
	const disabledEls = []
	for(let i = 0; i < inputs.length; i++){
		if(inputs[i].disabled){
			continue
		}
		inputs[i].disabled = true
		disabledEls.push(inputs[i])
	}

	// On end function
	return () => {
		// Hide wait indicators
		for(let i = 0; i < waitIndicators.length; i++){
			waitIndicators[i].value = waitIndicators[i].dataset.unwait
		}

		// Re-enable the form
		for(let i = 0; i < disabledEls.length; i++){
			disabledEls[i].disabled = false
		}
	}
}