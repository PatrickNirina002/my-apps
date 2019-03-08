import React from 'react'
import "./table.css"
import "bootstrap/dist/css/bootstrap.min.css"
const UserTable = props => (
    <div>
	<table class="table table-dark">
		<thead>
			<tr>
                <th>id</th>
				<th>Nom</th>
				<th>Prénom</th>
				<th>Action</th>
			</tr>
		</thead>
		<tbody>
			{props.users.length > 0 ? (
				props.users.map(user => (
					<tr class="si">
                        <td>{user.id}</td>
						<td>{user.name}</td>
						<td>{user.username}</td>
						<td>
                            <button class="btn btn-danger" onClick={() => {if(window.confirm("supprimer?")) props.deleteUser(user.id)}}>X</button>
							
						</td>
					</tr>
				))
			) : (
				<tr>
				
				</tr>
			)}
		</tbody>
	</table>
    </div>
)
export default UserTable