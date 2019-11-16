import React, { useContext, Fragment } from 'react'
import { AuthContext } from '../AuthContext'

import { SubmitButton } from '../components/SubmitButton'
import { PageTitle } from '../components/PageTitle'

export const User = () => {
	const { removeAuth } = useContext(AuthContext)
	return (
		<Fragment>
			<PageTitle text='Log out' />
			<div className="mt-5">
				<SubmitButton onClick={removeAuth}>Close session</SubmitButton>
			</div>
		</Fragment>
	)
}