import axios from "axios";
import React, { useEffect, useState } from "react";
import './index.scss'
import { Link } from "react-router-dom";


export default function App() {
    const [post, setPost] = useState([]);
    const [filterdata, setfilterdata] = useState([]);
    //Ekrana 1 defe cixsin deye useEffect istifade olunur
    useEffect(() => {
        dataGet()
    }, []);
    //Datalarin axiosdan cekilmesi
    function dataGet() {
        axios.get("http://localhost:3000/categories").then(({ data }) => {
            setPost(data);
            setfilterdata(data)
        });
    }
    //Delete function
    const dataDelete = (id) => {
        axios.delete("http://localhost:3000/categories/" + id)
        dataGet()
    }
    //Inputun deyerine gore ekrana cixmasi
    const handleFilter = (e) => {
        setfilterdata(post.filter(element => element.name.toLowerCase().includes(e.target.value.toLowerCase())))
    }
    //Sorting (siralama)
    const handleSort = (val) => {
        setfilterdata([...filterdata.sort((a,b) => (a[val] > b[val]) ? 1 : ((b[val] > a[val]) ? -1 : 0))])
    }

    return (
        <>
            <input type="text" className="Hotbg-txt" placeholder="Search >>>" onChange={handleFilter} />
            <Link to={'/addpage'}><button className='btn'>Add Posts</button></Link>
            <button onClick={()=>{handleSort("name")}}>sort by name</button>
            <button onClick={()=>{handleSort("description")}}>sort by description</button>
            <div className="AllCard">
                {filterdata.map((element) =>
                    <div className="Card" key={element.id}>
                        <Link to={`/details/${element.id}`}>
                            <h1>{element.name}</h1>
                        </Link>
                        <p>{element.description}</p>
                        <button onClick={() => dataDelete(element.id)} className="delete">X</button>
                    </div>
                )}
            </div>
        </>
    )
}