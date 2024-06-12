import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Post = () => {

    const [data,setData] = useState(
        {
            "name":"",
            "username":"",
            "image":"",
            "caption":""
        }
    )

    const inputHandler = (event) => {
        setData({...data,[event.target.name]:event.target.value})
    }

    const readValue =() => {
        console.log(data)
        axios.post("http://localhost:8080/post",data).then(
            (response) => {
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("Success")
                } else {
                    alert("Failed")
                }
            }
        ).catch(
            (error) => {
                console.log(error.message)
                alert(error.message)
            }
        )
    }



  return (
    <div>
        <Navbar/>
        <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <center>
                            <h3>Post Your Content</h3>
                        </center>
                        <div className="row g-3">
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler}/>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Username</label>
                                <input type="text" className="form-control" name='username' value={data.username} onChange={inputHandler}/>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Image Link</label>
                                <input type="text" className="form-control" name='image' value={data.image} onChange={inputHandler}/>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Caption</label>
                                <input type="text" className="form-control" name='caption' value={data.caption} onChange={inputHandler}/>
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <center>
                                    <button className="btn btn-info" onClick={readValue}>Post</button>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Post