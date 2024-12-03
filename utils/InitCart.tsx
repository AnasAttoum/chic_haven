"use client"

import { useAppDispatch } from "@/lib/hooks";
import { initCart } from "@/lib/slices/cart";
import { useEffect } from "react";

export default function InitCart() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(initCart());
    }, [dispatch]);

  return null;
}