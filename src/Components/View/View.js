import React, { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../../store/Context';
import { PostContext } from '../../store/PostContext';
// import { useHistory } from "react-router-dom"
import './View.css';


function View() {
  
  const { postDetails } = useContext(PostContext);
  const [userDetails,setUserDetails] = useState([]);
  const {firebase} = useContext(FirebaseContext);
  useEffect(()=>{
    const {userId}= postDetails
    firebase.firestore().collection("users").where("id","==",userId).get().then((res)=>{
      res.forEach(doc=>{
        setUserDetails(doc.data())
      })
    })
  },[])
  console.log(userDetails)
  console.log(postDetails)
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.title}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
        <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username}</p>
          <p>{userDetails.phone}</p>
        </div>
      </div>
    </div>
  );
}
export default View;
