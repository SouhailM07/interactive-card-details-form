// style
import "./container.css";
// components
import { FrontCard, BackCard, CardInfo, CompleteState } from "../../components";

export default function Container() {
  return (
    <>
      <div
        id="container"
        className="h-screen flex md:flex-row mbl:flex-col items-center justify-around md:px-[4rem]"
      >
        <div id="container-cardsContainer">
          <FrontCard />
          <BackCard />
        </div>
        <CardInfo />
        {/* <CompleteState /> */}
      </div>
    </>
  );
}
