// style
import "./container.css";
// components
import { FrontCard, BackCard } from "../../components";
export default function Container() {
  return (
    <>
      <div id="container" className="h-screen flex items-center">
        <div className="h-[39rem] flex flex-col justify-between w-[42rem]">
          <FrontCard />
          <BackCard />
        </div>
      </div>
    </>
  );
}
