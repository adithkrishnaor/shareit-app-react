import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewPost = () => {
    const [data,setData] = useState([])
    const fetchdata = () => {
        axios.get("http://localhost:8080/viewpost")
        .then(
            (response) => {
                console.log(response.data)
                setData(response.data)
            }
        ).catch(
            (error) => {
                console.log(error.message)
                alert(error.message)
            }
        )
    }
    useEffect( () => {fetchdata()},[])

  return (
    <div>
        <Navbar/>
        <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <center>
                            <h3>View Posts</h3>
                        </center>
                        <div className="row g-3">
                            {
                                data.map(
                                    (value,index) => {
                                        return <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                        <div class="card border-primary mb-3">
                                            <img src={value.image} class="card-img-top" alt="..." />
                                            <div class="card-body">
                                                <h5 class="card-title">Posted by {value.name}</h5>
                                                <p class="card-text">{value.caption}</p>
                                            </div>
                                        </div>
                                    </div>
                                    }
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default ViewPost