"use client";

import { SyntheticEvent, useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import { Tooltip } from "@mui/material";
import { useAppDispatch } from "@/lib/hooks";
import { addToCart } from "@/lib/slices/cart";
import { product } from "@/types/types";

export default function AddToCartBtn({ product, title="" }: { product: product, title?: string }) {
  const [added, setAdded] = useState(false);
  const dispatch = useAppDispatch();

  const handleAddToCart = (e: SyntheticEvent) => {
    e.preventDefault();
    setAdded(true);
    dispatch(addToCart({product:product,count:1}));
    setTimeout(() => {
      setAdded(false);
    }, 1000);
  };
  return (
    <div
      className={`flex bg-[--primary] text-[.6rem] sm:text-sm cursor-pointer p-1 rounded-md text-white group 
        ${!title ? "hover:bg-white" : "hover:bg-[--hover] flex justify-center w-32"}`}
    >
      {added ? (
        <DoneOutlineIcon
          fontSize="small"
          className={!title ? "group-hover:text-[--primary]" : ""}
          onClick={(e) => e.preventDefault()}
        />
      ) : (
        <Tooltip title={!!title ? "" : "Add To Cart"}>
          <div onClick={handleAddToCart}>
            <AddShoppingCartIcon
              fontSize="small"
              className={!title ? "group-hover:text-[--primary]" : ""}
            />
            {title}
          </div>
        </Tooltip>
      )}
    </div>
  );
}
