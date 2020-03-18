import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from "@material-ui/core"
import { navigate } from '@reach/router';

export default props => {

    const { id } = props;
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [error, setError] = useState([]);

    useEffect(()=> {
        axios.get('http://localhost:8000/api/author/' + id)
        .then(res =>{
            setFirstName(res.data.firstName);
            setLastName(res.data.lastName);


        })
    },[])

    const updateAuthor = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/author/' + id,{ 
            firstName,
            lastName
        })
        .then(res => console.log(res))
        .catch(err => {
            const errorResponse = err.response.data.errors; 
            const errorArr = []; 
            for (const key of Object.keys(errorResponse)) { 
                errorArr.push(errorResponse[key].message)
            }
            setError(errorArr);
            console.log(errorArr)
        })
        
    }
    return(
        <div>
            <form onSubmit={updateAuthor}>
            {error.map((err, index) => <p key={index}>{err}</p>)}
                <h1>Update the Author</h1>
                <p>
                    <label>First Name:</label>
                    <input type="text" name="firstname" value={firstName} onChange={(e)=> setFirstName(e.target.value)} />
                </p>
                <p>
                    <label>Last Name:</label>
                    <input type="text" name="lastname" value={lastName} onChange={(e)=> setLastName(e.target.value)} />
                </p>
                <Button type="submit"> Submit </Button>
            </form>
        </div>
    )    
}