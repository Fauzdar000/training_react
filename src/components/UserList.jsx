import React from 'react'
import useFetch from '../hooks/UseFetch'
import './userlist.css'


const UserList = () => {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  console.log(data);

  return (
    <div>
      <ul>
        {data?.map((user) => (
        
          <li key={user.id}> {user.id}{user.name}  {user.username} {user.email}</li>
          

        ))}
      </ul>
      
      <table className='table'

      >
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>USERNAME</th>
          <th>EMAIL</th>

        </tr>
        { data?.map((user) => (
        
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
          
</tr>
        ))}



       
      </table>



    </div>
  )
}

export default UserList