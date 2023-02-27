import React from 'react'

const About = (props) => {
  return (
    <div id='about'>
        <div className='about-image'>
            <img src={props.img} alt=''/>
        </div>
        <div className='about-text'>
            <h2> {props.title} </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, fugiat fugit, recusandae minima quia sint perferendis esse ullam dicta expedita explicabo amet nam? Aut cumque aperiam perspiciatis tempore provident expedita modi sapiente iure facilis dolorem?</p>
            <button>  {props.button} </button>
        </div>
    </div>
  )
}

export default About