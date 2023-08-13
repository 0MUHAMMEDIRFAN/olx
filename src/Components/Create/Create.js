import React, { Fragment, useState, useContext } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { FirebaseContext, AuthContext } from '../../store/Context';
import { useHistory } from 'react-router-dom';

const Create = () => {
  const { firebase } = useContext(FirebaseContext)
  const { user } = useContext(AuthContext)
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("")
  const [price, setPrice] = useState("")
  const [image, setImage] = useState(null)
  const history = useHistory();
  const date = new Date()
  const handleSubmit = (e) => {
    e.preventDefault();
    firebase.storage().ref("/images/" + image.name).put(image).then(({ ref }) => {
      ref.getDownloadURL().then((url) => {
        console.log(url)
        firebase.firestore().collection("products").add({
          title,
          category,
          price,
          url,
          userId: user.uid,
          createdAt: date.toDateString()
        }).then(() => {
          alert("uploaded successfully");
          history.push("/")
        })
      })
    })
  }
  return (
    <Fragment>
      <Header />
      {/* <card> */}
      <div className="centerDiv">
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Name</label>
          <br />
          <input
            className="input"
            type="text"
            id="title"
            name="Name"
            // required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Enter Title'
          />
          <br />
          <label htmlFor="fname">Category</label>
          <br />
          <input
            className="input"
            type="text"
            id="category"
            name="category"
            value={category}
            // required
            onChange={(e) => setCategory(e.target.value)}
            placeholder='eg: mobiles '
          />
          <br />
          <label htmlFor="fname">Price</label>
          <br />
          <input className="input" type="number" required value={price} onChange={(e) => setPrice(e.target.value)} id="fname" name="Price" />
          <br />
          <br />
          {image && <img alt="Posts" width="200px" height="200px" src={image && URL.createObjectURL(image)}></img>}
          <br />
          <input type="file" required onChange={(e) => setImage(e.target.files[0])} />
          <br />
          <button type="submit" className="uploadBtn">upload and Submit</button>
        </form>
      </div>
      {/* </card> */}
    </Fragment>
  );
};

export default Create;
