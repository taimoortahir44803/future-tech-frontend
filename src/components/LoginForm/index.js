import React, { Fragment } from 'react'
import { SubmitButton } from '../SubmitButton'
import { ErrorAlert } from '../ErrorAlert'
import { useInputValue } from '../../hooks/useInputValue'

import { PageTitle } from '../PageTitle'

export const LoginForm = ({ error, disabled, onSubmit, title }) => {

	const email = useInputValue('')
	const password = useInputValue('')

	const handleSubmit = (event) => {
		event.preventDefault()
		onSubmit({ email: email.value, password: password.value })
	}

	return (
		<Fragment>
			<PageTitle text={title} />
			<form className="form-row mb-5" disabled={disabled} onSubmit={handleSubmit}>
				<div className="form-group col-md-6">
					<label htmlFor="inputEmailLoginForm" className="text-light">Email</label>
      				<input disabled={disabled} className="form-control" id="inputEmailLoginForm" placeholder='email' {...email} required autoFocus />
				</div>
				<div className="form-group col-md-6">
					<label htmlFor="inputPasswordLoginForm" className="text-light">Password</label>
      				<input disabled={disabled} className="form-control" id="inputPasswordLoginForm" placeholder='password' type='password' {...password} required />
				</div>
				<SubmitButton disabled={disabled}>{title}</SubmitButton>
			</form>
			{
				error && <ErrorAlert errorMessage={error} />
			}
		</Fragment>
	)
}

