import { useEffect, useState } from "react";
import Banner from "./component/hero/Banner"
import Navbar from "./component/navbar/Navbar"
import PlayerContainer from "./component/playerContainer/playerContainer";




function App() {
  const [AllPlayers, setAllPlayers]= useState([])

  useEffect(()=>{
  const playerData = async()=>{
  const res = await fetch("data.json");
  const data = await res.json();
  setAllPlayers(data);
  
};
 playerData();
},[]);


  return (
    <>
      <Navbar />
      <Banner />
      <PlayerContainer AllPlayers={AllPlayers} ></PlayerContainer>
    </>
  )
}

export default App
