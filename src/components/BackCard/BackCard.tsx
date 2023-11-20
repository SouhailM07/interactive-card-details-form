// style
import "./backCard.css";
//
import { useSelector } from "react-redux";

export default function BackCard() {
  let cvc = useSelector((state: any) => state.cardDetails.cvc);

  return (
    <>
      <div id="BackCard">
        <div>{cvc}</div>
      </div>
    </>
  );
}
