// style
import "./frontCard.css";

export default function FrontCard() {
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
          <div id="frontCard-s2-cardNumber">9591 6489 6389 101E</div>
          <div id="frontCard-s2-bottomDetails">
            <span>FELICIA LEIRE</span>
            <span>09/00</span>
          </div>
        </div>
      </div>
    </>
  );
}
