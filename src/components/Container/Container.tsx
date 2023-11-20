// style
import "./container.css";
// components
import { FrontCard, BackCard, CardInfo, CompleteState } from "../../components";
// hooks
import { useState } from "react";
import React from "react";
// ! context api
export const CompleteContext: any = React.createContext("");

export default function Container() {
  let [complete, setComplete] = useState(false);
  return (
    <CompleteContext.Provider value={{ complete, setComplete }}>
      <div
        id="container"
        className="h-screen flex md:flex-row mbl:flex-col items-center justify-around md:px-[4rem]"
      >
        <div id="container-cardsContainer">
          <FrontCard />
          <BackCard />
        </div>
        {!complete ? <CardInfo /> : <CompleteState />}
      </div>
    </CompleteContext.Provider>
  );
}
