import React, { useState, useEffect } from "react";
import { Button } from "@chakra-ui/react";
import "./Profile.css";

export default function Profile() {
  var picLink = "https://cdn-icons-png.flaticon.com/128/3177/3177440.png";
  const [pic, setPic] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`http://jsonplaceholder.typicode.com/users/1`)
      .then((res) => res.json())
      .then((result) => {
        setUser(result);
      });

    fetch(`http://jsonplaceholder.typicode.com/photos/?_limit=100`)
      .then((res) => res.json())
      .then((result) => {
        setPic(result);
        console.log(pic);
      });
  }, []);

  return (
    <div className="Profile">
      {/* profil ram,la */}
      <div className="profile-ramka">
        {/* profile img */}
        <div className="profile-image">
          <img src={user.Photo ? user.Photo : picLink} alt="" />
        </div>

        {/*  profile data*/}
        <div className="profile-data">
          <h1>{user.name}</h1>
          <Button colorScheme="blue" size="sm">
            Follow
          </Button>
          <Button colorScheme="gray" size="sm">
            Message
          </Button>
          {/* profile info */}
          <div className="pro-info">
            <p>
              <b>1501</b> posts
            </p>
            <p>
              <b>232M</b> followers
            </p>
            <p>
              <b>262</b> following
            </p>
          </div>
        </div>
      </div>

      <hr className="hr" />
      {/* profile galary */}
      <div className="gallary">
        {pic.map((pics) => {
          return <img key={pics.id} src={pics.url} className="item"></img>;
        })}
      </div>
    </div>
  );
}
