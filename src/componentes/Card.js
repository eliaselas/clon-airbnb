import '../hojas-de-estilos/Card.css'
import React from 'react'
//import katie from '../imagenes/katie-zaferes.png'
import Start from '../imagenes/star.png';

export default function Card(props) {
  let badgeText
    if (props.openSpots === 0) {
      badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
      badgeText = "ONLINE"
    }
    
  return (
    <div className='card' key={props.id}>
        {badgeText && <div className="card--badge">{badgeText}</div>}
        <img src={require(`../imagenes/${props.coverImg}`)} alt='Es la foto de Katie' className='card--image'></img>
        <div className="card--stats">
            <img src={Start}  alt='' className='card--star'/>
            <span>{props.stats.rating}</span>
            <span className='gray'>({props.stats.reviewCount}) . </span>
            <span className='gray'> {props.location}</span>
        </div>
        <p>{props.title}</p>
        <p><span className='bold'>From ${props.price} </span>/ person</p>
    </div>
  )
}
