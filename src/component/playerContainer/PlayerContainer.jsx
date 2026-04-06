import React, { useState } from "react";
import PlayerCard from "../../utils/PlayerCard";

export default function PlayerContainer({ AllPlayers }) {
    const [buttonToggle, setButtonTogle]=useState("Available")
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="flex justify-between py-5">
          <h2 className="font-bold text-[28px]">Available Players</h2>
          <div className="flex gap-2">
            <button className={`btn ${buttonToggle=="Available" && "bg-Brand2"}`}  onClick={()=>setButtonTogle("Available")}>Available</button>
            <button className={`btn ${buttonToggle == "Selected" && "bg-Brand2"}`} onClick={()=>{
                setButtonTogle("Selected")
            }}>Selected (0)</button>
          </div>
        </div>

        <PlayerCard AllPlayers={AllPlayers}></PlayerCard>
      </div>
    </section>
  );
}
