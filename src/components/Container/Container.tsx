// style
import "./container.css";
// components
import { FrontCard } from "../../components";
export default function Container() {
  return (
    <>
      <div id="container" className="h-screen">
        <FrontCard />
      </div>
    </>
  );
}
