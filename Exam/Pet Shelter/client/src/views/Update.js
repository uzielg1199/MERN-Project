import React, {useState, useEffect} from 'react'
import PetForm from '../components/PetForm'
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";
import { useParams } from "react-router";

const Update = (props) => {
    const [errors,setErrors] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams();
    const [pet, setPet] = useState({});
    const [loaded, setLoaded] = useState(false);
    useEffect(()=> {
        axios.get('http://localhost:8000/api/pets/' + id)
            .then(response => {
                setPet(response.data)
                setLoaded(true);
            })
            .catch(err => {
                console.log(err)
            });
    })
    const onSubmitHandler = (e, data) => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/pets/" + id, data)
        .then(response=> {
            navigate('/');
        })
        .catch(err => {
            console.log(err)
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
            {errors.map((errors, index)=>{
                return (
                    <p key={index}>{errors}</p>
                )
            })}
            <h3>Edit {pet.petName}</h3>
            {loaded &&
                <PetForm 
                    onSubmitHandler={onSubmitHandler}
                    initialPetName={pet.petName}
                    initialPetType= {pet.petType}
                    initialPetDescription={pet.petDescription}
                    initialSkill1= {pet.skill1}
                    initialSkill2={pet.skill2}
                    initialSkill3={pet.skill3}
                />
            }
        </div>
    );
};
export default Update;