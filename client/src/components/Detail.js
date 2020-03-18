import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';


export default props => {
    const [author, setAuthor] = useState({})
    useEffect(()=> {
        axios.get('http://localhost:8000/api/author/'+ props.id)
            .then(res => {console.log(res.data)
            setAuthor({...res.data})}
            )
            console.log(setAuthor)
    },[])
    
    return (
        <div>
            <p>First Name: {author.firstName}</p>
            <p>Last Name: {author.lastName}</p>
            <Link to={"/author/" + author._id + "/update"}>Edit</Link>
        </div>

    )
}