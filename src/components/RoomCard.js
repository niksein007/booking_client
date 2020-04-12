import React from "react";
import "./RoomCard.css";

const RoomCard = (props)=>{
    return(
        <div className='RoomCard'>

<p>This is a room card</p>
<div className='room'>
<p>Room Name :{props.roomName}</p>
<p>Room Capacity :{props.capacity}</p>
<img src={'http://localhost:5000/'+props.roomImage} alt={props.roomName}/>
<p>Television Numbers :{props.tv}</p>
<p>wheelchair accessable:{props.wheelchair?'YES':'NO'}</p>

</div>
        </div>
    )
}

export default RoomCard