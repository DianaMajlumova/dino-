import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../../Layout/Navbar/Navbar";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "./Home.scss";
const baseURL = "http://localhost:3000/posts";

function Home() {
  const [post, setPost] = useState([]);
  function dataGet() {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }
  useEffect(() => {
    dataGet();
  }, []);
  const dataDelete = (id) => {
    axios.delete(baseURL + "/" + id);
    dataGet();
  };
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="React project" />
      </Helmet>
      <Navbar />
      <section>
        <div className="sectionCards">
          <div className="card">
            {post.map((element) => {
              return (
                <>
                  <div key={element.id} className="cardBox">
                    <Link to={`product/${element.id}`}>
                      <div className="cardImg">
                        <img src={element.image} alt={"foto"} />
                      </div>
                      <h4>{element.name}</h4>
                      <p>{element.id} $</p>
                    </Link>
                    <button onClick={() => dataDelete(element.id)}>
                      {" "}
                      Delete
                    </button>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
