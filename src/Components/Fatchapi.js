import axios from 'axios';
import React, {useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


function Fatchapi() {
    const baseURL = "https://jsonplaceholder.typicode.com/posts";

    const [my_data, setData] = useState([]);

     useEffect(() =>{
      axios.get(baseURL).then((response) => {
            setData(response.data);
        });
     },[]); 


     const navigate = useNavigate();

  return (
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
        <div className='col-md-2'>
            <button  className='btn btn-info text-white fw-bold'
            onClick={() => navigate('/PostApi')}
            >Add API</button>
          </div>
      </div>
    
    <table className="table text-center">
  <thead className="table-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
  {
      my_data.map((item) => {
          const {id,title,body} = item;
          return(
    <tr key={id}>
      <th scope="row">{id}</th>
      <td>{title.slice(0,15).toUpperCase()}</td>
      <td>{body.slice(0,50)}</td>
    </tr>
         )
      })
   }
  </tbody>
    </table>
    </div>
   
 
        
    
       {/* <h4>{my_data.id}</h4>
       <h4>{my_data.title}</h4>
       <h4>{my_data.body}</h4> */}
    </>
  )
}

export default Fatchapi
