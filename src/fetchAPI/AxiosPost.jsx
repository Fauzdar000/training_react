  import React, { useEffect, useState } from 'react'
  import axios from 'axios';
  import './Axious.css'

  const AxiosPost = () => {
      const [post, setpost] = useState([]);

  useEffect(() => {

      axios.get('https://jsonplaceholder.typicode.com/posts') // API call
    
      .then((response) =>
      {
          setpost(response.data)  // Dont need to convert into json as axios does it for you
      })
      .catch((error) =>{
          console.error(error) // error handling
      })
      
      // axios.delete('https://jsonplaceholder.typicode.com/posts/1')
      //   .then((response) => {
      //     console.log('Deleted:', response.data);
      //   })
      //   .catch((error) => {
      //     console.error(error);
      //   });

   





    //     axios.post('https://jsonplaceholder.typicode.com/posts', {
    //       method: 'DELETE',
    // }, []);




      
  },[])

    const handleDelete =(id) => {
          axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => {
              console.log('Deleted:', response.data);
         
            setpost(post.filter((items) => items.id !== id));
            alert('Deleted Successfully ');
               })
            .catch((error) => {
              console.error(error);
            });
        }



    return (
      <div>
          <h1>Axios</h1>
  <ul>
          {post.map((items) =>(
          
          <li  key={items.id}>
              <h3>{items.title}</h3>
              <p>{items.body}</p>
          </li>

          ))}
          </ul>

                <table className='table'

        >
          <tr>
            <th>ID</th>
            <th>USERID</th>
            <th>TITLE</th>
          
  


          </tr>
          { post.map((items) => (
          
            <tr key={items.id}>
              <td>{items.id}</td>
              <td>{items.userId}</td>
              <td>{items.title}</td>
              <td>
                <button onClick={()=> handleDelete(items.id)} className='btn'>
                  delete
                </button>
              </td>
            
            
  </tr>
          ))}



        
        </table>




      </div>
    )
  }

  export default AxiosPost