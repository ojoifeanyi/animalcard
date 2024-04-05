import React, {useState, useEffect} from 'react'
import './AnimalCard.css'
import Header from './Header';

function FetchApi() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetchPost().then(response => setPosts(response));
      }, []);
    
  const fetchPost = async () => {
  const response = await fetch(
      "https://ctrlf.ng/api.php"
    ).then(response => response.json());
   console.log(response)
   return response
  }


  return (
    <><Header />
    <div className='wrapp'>
      {posts && posts.map(posts => (
        <>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img className='img' src={posts.animal_image} alt="Avatar" />
                <div className='name-tag'><span>Photo Credit: John Paul</span></div>
              </div>
              <div className="flip-card-back">
                <h1>{posts.animal_name}</h1>
                <p></p>
                <p>{posts.animal_about}</p>
              </div>
            </div>
          </div>
        </>

      ))}
    </div></>
  )
}

export default FetchApi
