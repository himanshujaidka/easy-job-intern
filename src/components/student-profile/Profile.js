import React from "react";
import "./profile.css";
import {  useState } from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Label from "./Label";
import Skills from "./Skills"
import Input from "./Input";
import Achievments from "./Achievments";
import Volunteer from "./Volunteer";
import Other from "./Other";
import Project from "./Project";
import Experience from "./Experience";
import Education from "./Education";
import Start from "./Start";

const Profile=()=>
{
  

   return(
        <>
        <h1 className="heading">Student Profile Builder</h1>
        <h6>Please Enter the details below to complete your student profile:-</h6>
        <div className="main-box">

            <Start/>        
            <Education/>
            <Experience/>
            <Project/>
             <Skills/>
             <Achievments/>
             <Volunteer/>
             <Other/>
             


          

 
        </div>
        <br/>

        
        </>
   );
    
}


export default Profile;



