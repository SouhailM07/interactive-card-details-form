// style
import "./container.css";
// components
import { FrontCard, BackCard, CardInfo } from "../../components";

export default function Container() {
  return (
    <>
      <div
        id="container"
        className="h-screen flex md:flex-row xs:flex-col items-center justify-around md:px-[4rem]"
      >
        <div id="container-cardsContainer" className="">
          <FrontCard />
          <BackCard />
        </div>
        {/* <CardInfo /> */}
      </div>
    </>
  );
}
