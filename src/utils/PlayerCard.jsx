import { Flag, User } from "lucide-react";
import { useState } from "react";

export default function PlayerCard({ AllPlayers }) {
  console.log(AllPlayers);
  const [chooseButton, setChooseButton]= useState(false)



  return (
    <>
    <div className="grid grid-cols-3 gap-5">
      {AllPlayers.map((player, index) => {
        return (
          <div className="card bg-base-100 shadow-sm p-6" key={index}>
            <figure>
              <img
                className=" rounded-2xl h-70 w-full"
                src={player.playerImg}
                alt={player.playerName}
                
              />
            </figure>
            <div className="card-body space-y-2.5">
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
                  <p className=" font-bold">Price: $1500000</p>
                  <button className="btn text-Brand/70" onClick={()=>setChooseButton(true)}>{chooseButton?"":""}</button>
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
