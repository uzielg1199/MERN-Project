import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

const Main = (props) => {
    const [pets, setPets] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/api/pets")
            .then((response) => {
                setPets(response.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])


    return (
        <div>
            <h1>Pet Shelter</h1>
            <p><Link to = "/pets/new">Add a new pet to the shelter</Link></p>
            <h3>These pets are looking for a good Home!</h3>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                        {pets.map((pet, index)=>{ 
                            return (
                                <tr key={index}>
                                    <td>{pet.petName}</td>
                                    <td>{pet.petType}</td>
                                    <td><Link to = {"/pets/"+pet._id}>Details</Link> | <Link to = {`/pets/${pet._id}/edit`}>Edit</Link></td>
                                </tr>
                            )
                        })}
                </tbody>
            </table>
        </div>
    )
}
export default Main;
