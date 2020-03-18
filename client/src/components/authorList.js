import React from 'react';
import { Link } from "@reach/router";
import axios from 'axios';
import { Button } from "@material-ui/core"

export default props => {

    const { removeFromDom } = props;
    const deleteAuthor =(authorid) => {
        axios.delete('http://localhost:8000/api/author/delete/' + authorid)
            .then(res => {
            removeFromDom(authorid)
        })
    }

    return(
        <div>
            <h3>We have quotes by:</h3>
            {props.author.map((author, i)=> {
                return(
                    <p key={i}>
                        <Link to={'/author/' + author._id}>
                            {author.firstName}
                        </Link>
                        |
                        <Link to={'/update/' + author._id}> Edit </Link>
                        <Button onClick = {() => deleteAuthor(author._id)}>
                            Delete
                        </Button>
                        <hr/>
                    </p>
                )
            })}
        </div>
    )
}