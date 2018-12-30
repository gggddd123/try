import React from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

import MainBar from "./components/MainBar";
import "./App.css";


const API_KEY="fbd1d45093c06868c8295c672935d622"
class Banana extends React.Component {
state={
  temperature: undefined,
  city: undefined,
  country: undefined,
  humidity: undefined,
  description: undefined,
  icon:undefined,
  error: "Please enter the values."
}



 getData=async(e)=>{
   e.preventDefault();
   const city=e.target.elements.city.value;
   const country=e.target.elements.country.value;
   const api_call= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
   const data = await api_call.json();
   
   if(city&&country){
    this.setState(
      {
       temperature: data.main.temp,
       city: data.name,
       country: data.sys.country,
       humidity: data.main.humidity,
       description: data.weather[0].description,
       icon:data.conditions.icon,
       error: ""

   });

  } else{
  this.setState(
    {
     temperature: undefined,
     city: undefined,
     country: undefined,
     humidity: undefined,
     description: undefined,
     icon:undefined,
     error: "Please enter the fucking values right"
    });
  }
}


  render() {
    return(
      <div>
        <div className="header">
        <div className="header video">
        <div className="container">
        <div className="overlay">
       <Header/>
       </div>
       </div>
       </div>
       </div>
       <NavBar/> 

       
         
       
       <MainBar
       temperature={this.state.temperature}
       city={this.state.city}
       country={this.state.country}
      humidiyy={this.state.humidity}
      description={this.state.description}
      error={this.state.error}
      icon={this.state.icon}
       
       />
    
    </div>
       
      );
    }
  };


export default Banana;