
export default class WebflowForm{
	constructor(form, onSubmit){
		if(typeof form === 'string'){
			form = document.querySelector(form)
		}
		this.form = form
		this.container = form.parentNode
		this.container.classList.remove('w-form')
		this.onSubmit = onSubmit
		this.form.addEventListener('submit', e => {
			e.preventDefault()
			this.data = this.getValues()
			if(this.onSubmit){
				this.onSubmit(this)
			}
		})
	}
	getValues(){
		// If form is disabled, enable briefly
		const disabled = this.isDisabled
		if(disabled) this.enable()
		const formData = new FormData(this.form)
		const data = Object.fromEntries(formData)
		if(disabled) this.disable()
		return data
	}
	reset(){
		this.form.reset()
		return this
	}
	showWait(message){
		if(this.isWaiting) return
		this.isWaiting = true
		const waitIndicators = this.form.querySelectorAll('[data-wait]')
		this.waitIndicators = []
		for(let i = 0; i < waitIndicators.length; i++){
			waitIndicators[i].dataset.originalValue = waitIndicators[i].value
			waitIndicators[i].value = message || waitIndicators[i].getAttribute('data-wait')
			this.waitIndicators.push(waitIndicators[i])
		}
		return this
	}
	hideWait(){
		if(!this.isWaiting) return
		this.isWaiting = false
		for(let i = 0; i < this.waitIndicators.length; i++){
			this.waitIndicators[i].value = this.waitIndicators[i].dataset.originalValue
		}
		return this
	}
	disable(){
		if(this.isDisabled) return
		this.isDisabled = true
		const inputs = this.form.querySelectorAll('input, textarea, button')
		this.disabledEls = []
		for(let i = 0; i < inputs.length; i++){
			if(!inputs[i].disabled){
				inputs[i].disabled = true
				this.disabledEls.push(inputs[i])
			}
		}
		return this
	}
	enable(){
		if(!this.isDisabled) return
		this.isDisabled = false
		for(let i = 0; i < this.disabledEls.length; i++){
			this.disabledEls[i].disabled = false
		}
		return this
	}
	showForm(){
		this.form.style.display = 'block'
		return this
	}
	hideForm(){
		this.form.style.display = 'none'
		return this
	}
	success(message){
		const el = this.getSuccessEl()
		el.innerHTML = message || this.defaultSuccessMessage
		el.style.display = 'block'
		return this
	}
	error(message){
		const el = this.getErrorEl()
		el.innerHTML = message || this.defaultErrorMessage
		el.style.display = 'block'
		return this
	}
	hideSuccess(){
		const el = this.getSuccessEl()
		el.style.display = 'none'
		return this
	}
	hideError(){
		const el = this.getErrorEl()
		el.style.display = 'none'
		return this
	}
	getSuccessEl(){
		if(!this.successEl){
			this.successEl = this.container.querySelector('.w-form-done')
			this.defaultSuccessMessage = this.successEl.innerHTML
		}
		return this.successEl
	}
	getErrorEl(){
		if(!this.errorEl){
			this.errorEl = this.container.querySelector('.w-form-fail')
			this.defaultErrorMessage = this.errorEl.innerHTML
		}
		return this.errorEl
	}
}