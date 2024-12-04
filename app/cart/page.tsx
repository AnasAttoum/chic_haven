"use client"

import Title from "@/components/Title";
import { RootState } from "@/lib/store";
import Image from "next/image";
import Link from "next/link";
import DeleteIcon from "@mui/icons-material/Delete";
import { Tooltip } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { addToCart, deleteFromCart } from "@/lib/slices/cart";
import DeleteDialog from "@/components/DeleteDialog";
import { useRef, useState } from "react";

export default function Page() {

    const cart = useAppSelector((state:RootState)=>state.cart)
    const dispatch = useAppDispatch()

    const ref = useRef<number>()
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const handleOpenDeleteModal = (id: number) => {
        ref.current = id
      setOpenDeleteModal(true);
    };
    const handleCloseDeleteModal = () => setOpenDeleteModal(false);
    const handleDelete = () => {
        if(ref.current)
            dispatch(deleteFromCart(ref.current));
        handleCloseDeleteModal();
    }

  return (
    <>
      {!cart.length ? (
        <div className="flex flex-col justify-center items-center smallPage">
          <div className="text-[--hover]">No Products Found</div>
          <iframe src="/empty.svg" className="w-[50vw] h-[50vh]" />
        </div>
      ) : (
        <>
          <Title title="My Cart" />

          <div className="grid grid-cols-7 font-extrabold text-[--primary] mb-10 text-center max-lg:text-xs max-lg:grid-cols-6">
            <div className="lg:col-start-2 col-span-2 max-lg:col-span-3">Product</div>
            <div className="max-lg:hidden">Price</div>
            <div>Quantity</div>
            <div>Total</div>
          </div>

          {cart.map(({ product, count }) => {
            return (
              <Link
                key={product.id}
                href={`products/${product.id}`}
                className="grid grid-cols-7 hover:bg-[--secondary] my-5 items-center text-center max-lg:text-[10px] max-lg:grid-cols-6 p-1"
              >
                <div className="flex items-center gap-3 max-lg:gap-1 lg:col-start-2 col-span-2 text-left max-lg:col-span-3">
                  <Image
                    src={product.images[0]}
                    alt={product.title}
                    width={100}
                    height={100}
                    className="max-lg:w-10 rounded-md"
                  />
                  <div
                    style={{
                      display: "-webkit-box",
                      lineClamp: "3",
                      WebkitLineClamp: "3",
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {product.title}
                  </div>
                </div>
                <div className="max-lg:hidden">{product.price} $</div>
                <div className="flex justify-center items-center gap-3 max-lg:gap-1">
                  <svg
                    style={count<2?{visibility:'hidden'}:{}}
                    className="cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(addToCart({ product: product, count: -1 }));
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#3b82f6"
                      d="M18 16H6c-1.654 0-3-1.346-3-3s1.346-3 3-3h12c1.654 0 3 1.346 3 3s-1.346 3-3 3M6 12c-.551 0-1 .449-1 1s.449 1 1 1h12c.551 0 1-.449 1-1s-.449-1-1-1z"
                    />
                  </svg>

                  {count}

                  <svg
                    className="cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(addToCart({ product: product, count: +1 }));
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <g fill="none" fillRule="evenodd">
                      <path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
                      <path
                        fill="#3b82f6"
                        d="M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-4v4a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-4H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h4zm4 0h-2v5a1 1 0 0 1-1 1H5v2h5a1 1 0 0 1 1 1v5h2v-5a1 1 0 0 1 1-1h5v-2h-5a1 1 0 0 1-1-1z"
                      />
                    </g>
                  </svg>
                </div>
                <div>{product.price * count} $</div>
                <Tooltip title="Delete Product">
                  <DeleteIcon
                    sx={{ color: "#ef4444" }}
                    className="max-lg:text-sm"
                    onClick={(e) => {
                      e.preventDefault();
                      handleOpenDeleteModal(product.id);
                    }}
                  />
                </Tooltip>
              </Link>
            );
          })}
        </>
      )}

      <DeleteDialog
        open={openDeleteModal}
        handleClose={handleCloseDeleteModal}
        handleAgree={handleDelete}
        text="Are you sure that you want to delete this product?"
      />
    </>
  );
}