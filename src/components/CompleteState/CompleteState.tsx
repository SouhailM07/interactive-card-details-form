import "./completestate.css";
// assets
import completeLogo from "../../assets/images/icon-complete.svg";
export default function CompleteState() {
  return (
    <>
      <div id="CompleteState">
        <img src={completeLogo} alt="img" />
        <div id="CompleteState-middle">
          <h1>THANK YOU!</h1>
          <p>We've added your card details</p>
        </div>
        <button>Continue</button>
      </div>
    </>
  );
}
