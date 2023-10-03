// style
import "./cardInfo.css";
//
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function CardInfo() {
  let schema = z.object({
    name: z.string().min(4),
    cardNumber: z.number(),
    dd: z.number().min(1).max(31),
    mm: z.number().min(1).max(12),
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
      <div className="w-[33vw] ">
        <form
          action=""
          onSubmit={handleSubmit(submitData)}
          className="flex flex-col justify-between h-[32rem]"
        >
          {/* i1 */}
          <div className="inputContainer">
            <label htmlFor="cardHolderInput">CARDHOLDER NAME</label>
            <input id="cardHolderInput" type="text" {...register("name")} />
            {errors.name && <span>feild cannot be empty</span>}
          </div>
          {/* i2 */}
          <div className="inputContainer">
            <label htmlFor="cardNumberInput">CARD NUMBER</label>
            <input
              id="cardNumberInput"
              type="number"
              {...register("cardNumber", { valueAsNumber: true })}
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
                  {...register("dd", { valueAsNumber: true })}
                  className="w-[7vw] mr-[1rem]"
                />
                <input
                  type="number"
                  {...register("mm", { valueAsNumber: true })}
                  className="w-[7vw]"
                />
              </div>
              {errors.dd ? (
                <span className="text-red-500">cant be blanc</span>
              ) : (
                errors.mm && <span className="text-red-500">cant be blanc</span>
              )}
            </div>
            {/* i3-3 */}
            <div className="inputContainer w-[100%]">
              <label htmlFor="">CVC</label>
              <input
                type="number"
                {...register("cvc", { valueAsNumber: true })}
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
