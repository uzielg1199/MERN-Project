import React, { useState, useEffect} from 'react'
import DeleteButton from '../components/DeleteButton';
import axios from 'axios';
import { useParams } from "react-router";
import { Link } from 'react-router-dom';

const Detail = (props) => {
    const { id } = useParams();
    const [pet, setPet] = useState({});
    useEffect(() => {
        axios.get('http://localhost:8000/api/pets/' + id)
            .then(response => {
                setPet(response.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <div>
            <h1>Pet Shelter</h1>
            <Link to = {"/"}>Home</Link>
            <h3>Details about: {pet.petName}</h3>
            <DeleteButton id={pet._id}/>
            <p>Pet type: {pet.petType}</p>
            <p>Description: {pet.petDescription}</p>
            <p>Skills: {pet.skill1} | {pet.skill2} | {pet.skill3}</p>
        </div>
    );
};
export default Detail
