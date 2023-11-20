// style
import "./container.css";
// components
import { FrontCard, BackCard, CardInfo } from "../../components";

export default function Container() {
  return (
    <>
      <div
        id="container"
        className="h-screen flex items-center justify-around px-[4rem]"
      >
        <div className="h-[38.5rem] flex flex-col justify-between w-[39rem] mr-[2rem] ">
          <FrontCard />
          {/* <BackCard /> */}
        </div>
        {/* <CardInfo /> */}
      </div>
    </>
  );
}
