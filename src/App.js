import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Booking from "./components/Booking";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Pricing from "./components/Pricing";
import Home from "./components/Home";

import RoomCard from "./components/RoomCard";


import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends React.Component {
  state = {
    rooms: [],
  };
  getRoom = async () => {
    await fetch("http://localhost:5000/rooms/")
      .then((rooms) => {
        return rooms.json();
      })
      .then((json) => {
        this.setState({
          rooms: json,
        });
      });
  };

  componentDidMount() {
    this.getRoom();
  }

  render() {
    // const room = this.state.rooms
    console.log(this.state.rooms);
    const roomCard = this.state.rooms.map((room, index) => {
      return (
        <RoomCard
          key={index}
          roomName={room.roomName}
          capacity={room.capacity}
          roomImage={room.roomImage}
          tv={room.tv}
          wheelchair={room.wheelchair}
        />
      );
    });
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>

            <Route path='/' exact component={Home}/>
            <Route path='/pricing' component={Pricing} />
            <Route  path='/booking' component={()=>{
              return <Booking  roomCard = {roomCard}/>
            }} />
            <Route path='/signup' component={Signup} />
            <Route  path='/login' component={Login} />
            
           </Switch>

          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
