import React, { useState }from "react";
import PetForm from '../components/PetForm'
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const CreatePet = props => {
    const [errors,setErrors] = useState([]);

    const navigate = useNavigate();

    const onSubmitHandler = (e, data) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/pets", data)
            .then(response=> {
                navigate('/');
            })
            .catch(err => {
                console.log(err)
                const errorResponse = err.response.data.errors;
                const errorArr = [];

                for(const key of Object.keys(errorResponse)){
                    errorArr.push(errorResponse[key].message);
                }
                setErrors(errorArr)
            })
    }
    return (
        <div>
            <h1>Pet Shelter</h1>
            <Link to = {"/"}>Home</Link>
            <h3>Know a pet needing a home?</h3>
            {errors.map((errors, index)=>{
                return (
                    <p key={index}>{errors}</p>
                )
            })}
            <PetForm
                onSubmitHandler={onSubmitHandler}
                initialPetName=""
                initialPetType= ""
                initialPetDescription=""
                initialSkill1= ""
                initialSkill2=""
                initialSkill3=""
            />
        </div>
    );
};
export default CreatePet