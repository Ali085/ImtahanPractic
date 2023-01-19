import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios";
import { Link } from "react-router-dom";
import {Helmet} from 'react-helmet'


function Details() {
    const [post, setPost] = useState([]);
    let { id } = useParams();
    useEffect(() => {
        axios.get(`http://localhost:3000/categories/${id}`).then(({ data }) => {
            setPost(data);
        });
    }, [id]);

    return (
        <>
        <Helmet>
                <title>Details</title>
        </Helmet>
            <div className="AllCard">

                <Link to={`/`}> 
                    <div className="Card" key={post.id}>
                        <h1>{post.description}</h1>
                        <p>{post.name}</p>
                    </div>
                </Link>


            </div>
        </>
    )
}

export default Details