import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  if(localStorage.getItem("user_f_name")){

    return (
      <div className='hero-container'>
        <video src='/videos/video-2.mp4' autoPlay loop muted />
        <h1> Welcome back {localStorage.getItem("user_f_name")} !</h1>
        <p>HAVE A PRODUCTIVE DAY</p>
      </div>
    );

  }else{
  return (
    <div className='hero-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <h1> What are you waiting for?</h1>
      <p>CONNECT WITH PEOPLE FASTER AND EASIER</p>
    </div>
  );
  }
}

export default HeroSection;