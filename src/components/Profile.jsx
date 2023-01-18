import React, { useState, useEffect } from 'react';
import "./Profile.css";

export default function Profile() {

  var picLink = "https://cdn-icons-png.flaticon.com/128/3177/3177440.png"
  const [pic, setPic] = useState([])
  const [posts, setPosts] = useState([])
  const [user, setUser] = useState({})



  useEffect(() => {
    fetch(`http://jsonplaceholder.typicode.com/users/1`)
    .then(res => res.json())
    .then((result) => {
      // console.log(result)
      // setPic(result.post)
      setUser(result)
      // console.log(user)
      // console.log(pic)
    })

    fetch(`http://jsonplaceholder.typicode.com/photos/?_limit=100`)
    .then(res => res.json())
    .then((result) => {
      // console.log(result)
      // setPic(result.post)
      setPic(result)
      console.log(pic)
    })
  }, [])

  
  return (
    <div className="Profile">

      {/* profil ram,la */}
      <div className="profile-ramka">
        {/* profile img */}
        <div className="profile-image">
        <img
        src={user.Photo? user.Photo : picLink}
        alt="" />
        </div>  

       {/*  profile data*/}
       <div className="profile-data">
        <h1>{user.name}</h1>
        {/* profile info */}
        <div className="pro-info">
          <p>1501 posts</p>
          <p>232M followers</p>
          <p>262 following</p>
        </div>
       </div>
      </div> 

      <hr className="hr"/>
      {/* profile galary */}
      <div className="gallary">
        {pic.map((pics)=>{
          return <img key={pics.id} src={ pics.url }
          
           className="item"></img>
        })}
      </div>
      
    </div>
  )
}
