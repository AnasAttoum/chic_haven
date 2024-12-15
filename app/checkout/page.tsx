"use client"

import Title from "@/components/Title";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { clearCart } from "@/lib/slices/cart";
import { RootState } from "@/lib/store";
import { Divider } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {

    const cart = useAppSelector((state: RootState) => state.cart);
    const [done, setDone] = useState(false)
    const dispatch = useAppDispatch();
    const router = useRouter()

    useEffect(()=>{
        if(!cart.length && !done)
            router.replace('/products')
    },[cart, router, done])

    const handleOrder = () => {
      setDone(true)
      dispatch(clearCart())
      setTimeout(()=>{
        setDone(false)
      },3000)
    };

  return (
    <>
      {done || (!done && !cart.length) ? (
        <div className="flex flex-col justify-center items-center smallPage">
          <div className="text-[--hover]">Done! Thanks for using Chic Haven</div>
          <iframe src="/done.svg" className="w-[50vw] h-[50vh]" />
        </div>
      ) : (
        <>
          <div style={{ minHeight: "calc(100vh - 120px)" }}>
            <Title title="CheckOut" />

            <div className="flex max-lg:flex-col-reverse justify-evenly px-5">
              <div className="w-full lg:w-1/2">
                <Title title="Delivery Details" />
                <div>
                  <label htmlFor="address">Address :</label>
                  <input id="address" type="text" className="input" />
                </div>
                <div className="mt-2">
                  <label htmlFor="note">Order Note :</label>
                  <input id="note" type="text" className="input" />
                </div>
                <div className="flex justify-center my-5">
                  <div className="btn" onClick={handleOrder}>
                    Order Now
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <Title title="Billing Details" />

                <div className="flex flex-col items-center justify-center p-5 max-sm:text-xs">
                  {cart.map(({ product, count }) => {
                    return (
                      <div
                        key={product.id}
                        className="flex justify-between w-full lg:w-3/4"
                      >
                        <div className="text-gray-800">
                          {product.title}{" "}
                          <span className="font-bold"> x {count}</span>
                        </div>
                        <div className="font-bold">{count * product.price}</div>
                      </div>
                    );
                  })}
                </div>

                <Divider />
                <div className="flex flex-col items-center justify-center p-5 max-sm:text-xs">
                  <div className="flex justify-between w-full lg:w-3/4">
                    <div className="text-gray-800">Products:</div>
                    <div className="font-bold">{cart.length}</div>
                  </div>
                  <div className="flex justify-between w-full lg:w-3/4">
                    <div className="text-gray-800">Items:</div>
                    <div className="font-bold">
                      {cart.reduce((acc, { count }) => {
                        return acc + count;
                      }, 0)}
                    </div>
                  </div>
                  <div className="flex justify-between w-full lg:w-3/4">
                    <div className="text-gray-800">Total:</div>
                    <div className="font-bold">
                      {cart.reduce((acc, { product, count }) => {
                        return acc + product.price * count;
                      }, 0)}{" "}
                      $
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}