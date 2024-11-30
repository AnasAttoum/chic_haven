"use client"

import { useAppDispatch } from "@/app/lib/hooks";
import { initUser, user } from "@/app/lib/slices/user";

export default function StoreUser({user}:{user:user}) {
    const dispatch = useAppDispatch()
    dispatch(initUser(user))
    return null
}
