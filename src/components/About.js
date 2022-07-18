import React from "react";
import Links from "./Links.js"

function About(props) {
  if (!props.bio) {
    return null ;
  } else {

  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{props.bio}</p>

      <img src={props.links} alt="I made this" />
      <Links/>
    </div>
  );
  }
}

export default About;
