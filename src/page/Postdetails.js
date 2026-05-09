import React, { useEffect, useState } from 'react'
import { data, useParams } from "react-router-dom";
import axios from 'axios';

function Postdetails() {
    const [posts,setPosts]=useState(null);

    const {id}=useParams();

    const fetchpost=async()=>{

        try {

            const response=await axios.get(`http://localhost:5000/api/posts/${id}`)
            setPosts(response.data)
            
        } catch (error) {
            console.error("Error Featching Data",error)
        }

    }

    useEffect(()=>{
fetchpost();
    },[])


    if(!posts){
        return <div>Loading...</div>
    }


    const formatedate=Intl.DateTimeFormat('en-US',{
        month:'long',
        day:'numeric',
        year:'numeric'
    }).format(new Date(posts.createdAt))
    return (
        <div>
            <main className="container my-4">
                <div className="row">
                    <article className="col-lg-8">
                        <h2 className="blog-post-title">{posts.title}</h2>
                        <p className="blog-post-meta">{formatedate} by <a href="#">{posts.author}</a></p>

                        <img className="mb-3 img-fluid" src={posts.image} alt="" />

                        <div className="blog-post-content">
                            <p>{posts.content}</p>
                            
                        </div>
                    </article>

                    <aside className="col-lg-4">
                        <div className="p-4 bg-light">
                            <h3 className="mb-4">Related Posts</h3>


                            <div className="mb-4">
                                <div className="row align-items-center">
                                    <div className="col-auto">
                                        <img src="https://via.placeholder.com/100" className="img-fluid rounded" alt="Related Post Image" />
                                    </div>
                                    <div className="col">
                                        <h4><a href="#" className="text-decoration-none">Related Post Title 1</a></h4>
                                        <p>Short description or excerpt of the related post. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                </div>
                            </div>


                            <div className="mb-4">
                                <div className="row align-items-center">
                                    <div className="col-auto">
                                        <img src="https://via.placeholder.com/100" className="img-fluid rounded" alt="Related Post Image" />
                                    </div>
                                    <div className="col">
                                        <h4><a href="#" className="text-decoration-none">Related Post Title 2</a></h4>
                                        <p>Short description or excerpt of the related post. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </main>
        </div>
    )
}

export default Postdetails