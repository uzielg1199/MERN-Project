import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';


const DeleteButton = props => {
    const navigate = useNavigate();
    const { id } = props;
    const onClickHandler = e => {
        axios.delete('http://localhost:8000/api/pets/' + id)
            .then(response=>{
                console.log(response);
                navigate('/');
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div>
            <button onClick={onClickHandler}>Adopt</button>
        </div>
    );
};

export default DeleteButton;