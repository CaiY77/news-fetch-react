import React from 'react'
import './ImgSection.css'

function ImgSection(props){
  return(
    (props.img === null)? <p className="the-img" >Image Unavaliable</p> : <img className="the-img" src={props.img}/>
  )
}

export default ImgSection
