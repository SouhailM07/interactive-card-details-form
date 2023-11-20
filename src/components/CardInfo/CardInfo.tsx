// style
import "./cardInfo.css";
//
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
//! redux
import { useDispatch } from "react-redux";
import {
  addCVC,
  addCardName,
  addCardNumber,
  addMM,
  addYY,
} from "./cardInfoSlicer";

/*======================================================================================*/
// component section
/*======================================================================================*/

export default function CardInfo() {
  let dispatch = useDispatch();

  let schema = z.object({
    name: z.string().min(4),
    cardNumber: z.number(),
    mm: z.number().min(1).max(12),
    yy: z.number().min(1).max(12),
    cvc: z.number(),
  });
  //
  let {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });
  //
  let submitData = (data) => {
    console.log("it worked", data);
  };

  return (
    <>
      <div className="w-[30rem] ">
        <form
          action=""
          onSubmit={handleSubmit(submitData)}
          className="flex flex-col justify-between h-[32rem]"
        >
          {/* i1 */}
          <div className="inputContainer">
            <label htmlFor="cardHolderInput">CARDHOLDER NAME</label>
            <input
              id="cardHolderInput"
              type="text"
              {...register("name")}
              onChange={(e) => dispatch(addCardName(e.target.value))}
            />
            {errors.name && <span>feild cannot be empty</span>}
          </div>
          {/* i2 */}
          <div className="inputContainer">
            <label htmlFor="cardNumberInput">CARD NUMBER</label>
            <input
              maxLength={12}
              id="cardNumberInput"
              type="number"
              {...register("cardNumber", { valueAsNumber: true })}
              onChange={(e) => dispatch(addCardNumber(e.target.value))}
            />
            {errors.cardNumber && <span>feild cannot be empty</span>}
          </div>
          {/*  i3*/}
          <div className="grid grid-cols-2">
            {/*  i3-1*/}
            <div className="inputContainer ">
              <div>
                <div className="mb-2">
                  <label htmlFor="" className="text-[1.1rem]">
                    EXP.DATE (MM/YY)
                  </label>
                </div>
                <input
                  type="number"
                  {...register("mm", { valueAsNumber: true })}
                  className="w-[6.5vw] mr-[1rem]"
                  onChange={(e) => dispatch(addMM(e.target.value))}
                />
                <input
                  type="number"
                  {...register("yy", { valueAsNumber: true })}
                  className="w-[6.5vw]"
                  onChange={(e) => dispatch(addYY(e.target.value))}
                />
              </div>
              {errors.mm ? (
                <span className="text-red-500">cant be blanc</span>
              ) : (
                errors.yy && <span className="text-red-500">cant be blanc</span>
              )}
            </div>
            {/* i3-3 */}
            <div className="inputContainer w-[100%]">
              <label htmlFor="">CVC</label>
              <input
                type="number"
                {...register("cvc", { valueAsNumber: true })}
                onChange={(e) => dispatch(addCVC(e.target.value))}
              />
              {errors.cvc && <span>cant be blank</span>}
            </div>
          </div>
          {/*  */}
          <button
            type="submit"
            className="bg-violet-950 text-white w-[100%] p-4 rounded-md text-[1.3rem]"
          >
            Confirm
          </button>
        </form>
      </div>
    </>
  );
}
