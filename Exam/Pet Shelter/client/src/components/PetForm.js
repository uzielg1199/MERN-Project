import React, { useState } from "react";

const PetForm = props => {
    const { onSubmitHandler, initialPetName, initialPetType, initialPetDescription, initialSkill1, initialSkill2, initialSkill3 } = props;
    const [petName, setPetName] = useState(initialPetName);
    const [petType, setPetType] = useState(initialPetType);
    const [petDescription, setPetDescription] = useState(initialPetDescription);
    const [skill1, setSkill1] = useState(initialSkill1);
    const [skill2, setSkill2] = useState(initialSkill2);
    const [skill3, setSkill3] = useState(initialSkill3);

    

    return (
        <form onSubmit={e=> { onSubmitHandler(e, {petName, petType, petDescription, skill1, skill2, skill3,}) }}>
            <p>
                <label> Pet Name:</label>
                <input type='text' value={petName} name='petName' onChange={ (e) => { setPetName(e.target.value) }} />
            </p>
            <p>
                <label> Pet Type:</label>
                <input type='text' value={petType} name='petType' onChange={ (e) => { setPetType(e.target.value) }} />
            </p>
            <p>
                <label> Pet Description:</label>
                <input type='text' value={petDescription} name='petDescription' onChange={ (e) => { setPetDescription(e.target.value) }} />
            </p>
            <h3>Skills (optional):</h3>
            <p>
                <label> Skill 1:</label>
                <input type='text' value={skill1} name='skill1' onChange={ (e) => { setSkill1(e.target.value) }} />
            </p>
            <p>
                <label> Skill 2:</label>
                <input type='text' value={skill2} name='skill2' onChange={ (e) => { setSkill2(e.target.value) }} />
            </p>
            <p>
                <label> Skill 3:</label>
                <input type='text' value={skill3} name='skill3' onChange={ (e) => { setSkill3(e.target.value) }} />
            </p>
            <input type='submit' value='Add Pet'/>
        </form>
    );
};
export default PetForm;