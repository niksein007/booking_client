import React from "react";
// import RoomCard from './RoomCard'
import "./Booking.css";

const Booking = (props)=>{
    return(
        <div className='Booking'>
            this is the room booking page

         {props.roomCard}
        </div>
    )
}

export default Booking