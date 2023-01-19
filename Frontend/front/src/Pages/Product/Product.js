import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../../Layout/Navbar/Navbar";
import { Helmet } from "react-helmet";
import {useParams} from 'react-router-dom';
function Product() {
    let { id } = useParams();
  const [post, setPost] = useState({});
  useEffect(() => {
    axios.get(`http://localhost:3000/posts/${id}`).then((response) => {
      setPost(response.data);
    });
  }, [id]);

  return (
    <>
    <Helmet>
        <title>Product</title>
        <meta name="description" content="React project" />
      </Helmet>
      <Navbar />
      <p>{post.id}</p>    
      <h1>{post.name}</h1> 
      <img src={post.image} alt={"jt"}></img>
    </>
  );
}
export default Product
