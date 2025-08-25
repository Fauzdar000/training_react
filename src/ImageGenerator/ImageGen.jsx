import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './imageGen.css'

const ImageGen = () => {
    const [photo , setphoto] = useState([]);
    const [search , setSearch] = useState('');

    
useEffect(() => {

        axios.get('https://pixabay.com/api/?key=51955732-0d24d5fdc73b6b63bd2c2b77c')
        .then((response) =>{
            setphoto(response.data.hits)
        }
        
        
        )
        .catch((error)=>{
            console.log(error)
        })
        
    },[] )



   const  filteredPhoto = photo.filter((photo) => {
        const match = photo.tags.toLowerCase().includes(search.toLowerCase());
        return match;
        
    })

    


  return (
    <div className='container'>

        <div className="searchImage">
        <input type="text"placeholder='Search' 
        value={search} onChange={(e) => setSearch(e.target.value)}
         />

        </div>

        <div className="photoContainer">
            { filteredPhoto.map((photo) => (
                
                    <div className="photo" key={photo.id}>
                        <img src={photo.largeImageURL} alt={photo.tags} />
                        <h3>{photo.tags}</h3>
                    </div>
                
            ))

            }
        </div>






    </div>
  )
}

export default ImageGen