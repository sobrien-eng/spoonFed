import React, {useState} from 'react';
<<<<<<< Updated upstream

=======
import styles from '../Styles/Recipe.css';
import { Link } from "react-router-dom";
>>>>>>> Stashed changes

const Recipe = () => {
  return (
    <div id='mainContainer'>
        <div id='title'><h3>Recipe Title</h3></div>
        <div id='img'><img src="../images/avatar.png" alt="Avatar"></img></div>
        <div id='username'><label>Created by:</label><a href="">userName1</a></div>
        <div id='prep'><label>Prep time: 15 minutes</label></div>
        <div id='cook'><label>Cook time: 1 hour</label></div>
        <div id='ingredients'>
          <label>Ingredients:</label>
          <p id='ingredients-scroll'>
            1. lorem ipsum because why not.<br></br>
            2. Quis hendrerit dolor magna eget. In vitae turpis massa sed elementum tempus egestas sed.<br></br>
            3.Ullamcorper a lacus vestibulum sed arcu non odio euismod. Viverra aliquet eget sit amet. <br></br>
            4.Auctor elit sed vulputate mi. Gravida rutrum quisque non tellus. <br></br>
            5.Magna fringilla urna porttitor rhoncus. Id volutpat lacus laoreet non curabitur gravida. <br></br>
          </p>
          </div>
          <div id='step'><label>Steps: Lorem ipsum text- blah blah blah</label></div><br></br>
        <div id='save'><button>Save</button></div>
    </div>
  )
}

export default Recipe