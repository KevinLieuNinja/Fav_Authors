import React, { useState } from 'react'
import axios from 'axios';
import { Card } from "@material-ui/core"
import { Button } from "@material-ui/core"



export default ( ) => {
    
    const [inputState, setInputState] = useState({
        firstName:'',
        lastName:'',
    })
    const [error, setError] = useState([])

    const onChangeHandler = e =>{
        setInputState({
            ...inputState,
            [e.target.name]:e.target.value
        })
    }

    const onSubmitHandler = e =>{
        e.preventDefault();
        console.log("anything")
        axios.post('http://localhost:8000/api/author', inputState
        )
            .then(res => console.log(inputState))
            .catch(err => {
                const errorResponse = err.response.data.errors; 
                const errorArr = []; 
                for (const key of Object.keys(errorResponse)) { 
                    errorArr.push(errorResponse[key].message)
                }
                setError(errorArr);
                console.log(errorArr)
                
            })
            // navigate("/")
    }
    return(
        <Card>
            <form onSubmit={onSubmitHandler}>
            {error.map((err, index) => <p key={index}>{err}</p>)}
                <p>
                    <label>Frist Name</label>
                    <br/>
                    <input type='text' name='firstName' onChange = {onChangeHandler}></input>
                </p>
                <p>
                    <label>Last Name</label>
                    <br/>
                    <input type='text' name='lastName' onChange = {onChangeHandler}></input>
                </p>
                <Button type="submit"> Submit </Button>
                {/* <input type='submit'/> */}
            </form>
        </Card>
    )
}