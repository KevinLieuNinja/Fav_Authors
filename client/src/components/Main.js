import React, {useEffect, useState } from 'react'
import axios from "axios"
import { Link } from '@reach/router'
import AuthorForm from '../components/authorform'
import AuthorList from '../components/authorList'
import { Router } from "@reach/router"
import Update from "../components/Update"
import Detail from "../components/Detail"

export default () => {
    const [author, setAuthor ]= useState([]);
    // const [loaded, setLoaded ] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/author")
        .then(res => {
            setAuthor(res.data)
            // setLoaded(true);
        })
    }, [])
    const removeFromDom = authorId => {
        setAuthor(author.filter(author => author._id != authorId));

    }

    const createAuthor = authorId => {
        axios.post("http://localhost:8000/api/author", author)
        .then(res => {
            setAuthor([... author, res.data]);
        })
    }
    return (
        <div>
            <Link to='/new'> Add Your Author </Link>
            <Router>
                <AuthorList path="/" author={ author } removeFromDom = {removeFromDom}/>
                <AuthorForm path="/new" onSubmitProp = {createAuthor} intialFristName = '' intialLastName = ''/>
                <Update path='/update/:id' />
                <Detail path="/author/:id" />
            </Router>
        </div>
    )
}

