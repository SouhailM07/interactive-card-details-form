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
        <div className="lg:h-[38.5rem] border-2 border-red-500 md:h-[50vw] md:w-[45vw] flex flex-col justify-between lg:w-[39rem] mr-[2rem] ">
          <FrontCard />
          <BackCard />
        </div>
        {/* <CardInfo /> */}
      </div>
    </>
  );
}
