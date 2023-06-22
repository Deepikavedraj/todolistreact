import Axios from 'axios';
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

function PostApi(){
const [my_title , setTitle] = useState();
const [my_discription , setDiscription] = useState();

const handleSubmit = (e) => {
  e.preventDefault();

  Axios.post("https://jsonplaceholder.typicode.com/posts", {
    title:my_title,
    discription:my_discription

  })
  .then((response) => {
console.log(response);
  }).catch((error) => {
    console.log(error);
  })

}

const navigate = useNavigate();

    return(
        <>
        <div className='container'>
        <div className='row my-5'>
      <div className='col-md-2'>
            <button  className='btn btn-info text-white fw-bold'
               onClick={() => navigate(-1)}
            >Go Back</button>
          </div>
        <div className='col-md-8'>
           <h1 className='text-center'>Axios API</h1>
        </div>
        </div>
            <div className='row'>              
                <form onSubmit={handleSubmit}>
                <div className='col-12 justify-content-center'>                  
                  <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Enter Title</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1"
                    value={my_title} onChange={(e) => {setTitle(e.target.value)}}
                    placeholder="Enter Your Title" />
                   </div>
                </div>
                <div className='col-12 justify-content-center'>
                  <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Enter Description</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" 
                     value={my_discription} onChange={(e) => {setDiscription(e.target.value)}}
                    placeholder="Enter Your Description" />
                   </div>
                </div>

                <button type="submit" className='btn btn-info text-white fw-bold'>Submit</button>
                </form> 
             
            </div>
        </div>
        </>
    )
}

export default PostApi