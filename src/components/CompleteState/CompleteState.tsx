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
          <p className="">We've added your card details</p>
        </div>
        <button className="bg-violet-950  text-white w-full lg:py-[1rem] md:py-[1vw] rounded-md text-[1.3rem] mbl:py-[1rem]">
          Continue
        </button>
      </div>
    </>
  );
}
