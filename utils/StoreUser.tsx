"use client"

import { useAppDispatch } from "@/lib/hooks";
import { initUser, user } from "@/lib/slices/user";

export default function StoreUser({user}:{user:user}) {
    const dispatch = useAppDispatch()
    dispatch(initUser(user))
    return null
}
