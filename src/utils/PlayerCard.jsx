import { Flag, User } from "lucide-react";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

export default function PlayerCard({ AllPlayers, coin , setCoin }) {
const [selectedPlayers, setSelectedPlayers] = useState([]);
  const notify = () => toast('Added to the cart');

const handlePlayerSelection = (player)=>{
   if(!selectedPlayers.includes(player.playerName)){
        setSelectedPlayers([...selectedPlayers, player.playerName]);
   }
   if(player.price < coin){
     setCoin(coin-player.price);
   }else{
     alert("Your balance is too low. you can't buy this player");
   }
};

console.log(selectedPlayers);

  return (
    <>
    <div className="grid grid-cols-3 gap-5">
      {AllPlayers.map((player, index) => {
        return (
          <div className="card bg-base-100 shadow-sm p-2" key={index}>
            <figure>
              <img
                className=" rounded-2xl h-70 w-full"
                src={player.playerImg}
                alt={player.playerName}
                
              />
            </figure>
            <div className="card-body space-y-2.5 p-2">
              <h2 className="card-title">
                <User />
                {player.playerName}
              </h2>
              <div className="flex justify-between">
                <p className="flex gap-1 text-Brand">
                  <Flag />
                  {player.playerCountry }
                </p>
                <div className="badge p-4 bg-Brand/5 cursor-pointer">
                  {player.playerType}
                </div>
              </div>
              <div className="divider"></div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                <p className=" font-bold">Rating</p>
                <p className="text-right">{player.rating}</p>
                </div>

                <div className="flex justify-between items-center">
                  <p className=" font-bold">{player.battingStyle}</p>
                  <p className="font-semibold text-Brand/70 text-right">
                    { player.bowlingStyle}
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <p className=" font-bold">Price: {player.price}</p>
                  <button
                    disabled={selectedPlayers.includes(player.playerName)}
                   className={`btn text-Brand/70 text-[14px] p-2 ${selectedPlayers.includes(player.playerName) && coin> player.price?"  disabled:bg-green-300 disabled:cursor-not-allowed":""}`} onClick={()=>
                   {
                     handlePlayerSelection(player);
                     notify();
                   }


                   }>{
                    selectedPlayers.includes(player.playerName) && coin> player.price?"Added to the cart":"Choose Player"
                  }</button>
                  <ToastContainer></ToastContainer>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
    </>
  );
}
