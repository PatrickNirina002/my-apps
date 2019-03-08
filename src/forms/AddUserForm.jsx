import React, { useState } from 'react'
import "./form.css"
import "bootstrap/dist/css/bootstrap.min.css"

const AddUserForm = props => {
	const initialFormState = { id: null, name: '', username: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
        <div class="si">
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.username) return

				props.addUser(user)
				setUser(initialFormState)
			}}
		>
			<label class="s">Nom</label>
			<input  type="text" name="name" value={user.name} onChange={handleInputChange} />
			<label class="s" >Prénom</label>
			<input type="text" name="username" value={user.username} onChange={handleInputChange} />
			<button class="btn btn-success  style:margin-left:100px">Ajouter</button>
		</form>
        </div>
	)
}

export default AddUserForm
