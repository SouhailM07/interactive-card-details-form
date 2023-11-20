// style
import "./frontCard.css";
//
import { useSelector } from "react-redux";

export default function FrontCard() {
  let cardName = useSelector((state: any) => state.cardDetails.cardNameHolder);
  let cardNumber = useSelector((state: any) => state.cardDetails.cardNumber);
  let mm = useSelector((state: any) => state.cardDetails.mm);
  let yy = useSelector((state: any) => state.cardDetails.yy);
  //
  const regex = /(\d{4})/g;
  let cardNumber_4 = cardNumber.match(regex)?.join(" ");

  return (
    <>
      <div id="frontCard">
        {/* section one */}
        <div id="frontCard-s1">
          <div id="frontCard-s1-bc"></div>
          <div id="frontCard-s1-sc"></div>
        </div>
        {/* section two */}
        <div id="frontCard-s2">
          <div id="frontCard-s2-cardNumber">{cardNumber_4}</div>
          <div id="frontCard-s2-bottomDetails">
            <span>{cardName}</span>
            <span>
              {mm}/{yy}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
