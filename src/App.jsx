import { useEffect, useState } from "react";
import Banner from "./component/hero/Banner"
import Navbar from "./component/navbar/Navbar"
import PlayerContainer from "./component/playerContainer/PlayerContainer"



function App() {
  const [AllPlayers, setAllPlayers]= useState([]);
  const [coin, setCoin]= useState(50000);
  
  

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
      <Navbar coin={coin}/>
      <Banner />
      <PlayerContainer AllPlayers={AllPlayers} coin={coin} setCoin={setCoin}></PlayerContainer>
    </>
  )
}

export default App
