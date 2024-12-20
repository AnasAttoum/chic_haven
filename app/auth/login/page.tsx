"use client";

import { satisfy } from "@/utils/fonts";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function LogIn() {
  const [errorFormBackend, setErrorFromBackend] = useState("");
  const [submitBtn, setSubmitBtn] = useState("Log In");
  const router= useRouter();

  const handleLogIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitBtn("Loading...");
    setErrorFromBackend("");

    const formData = new FormData(e.currentTarget);
    const email= formData.get('email')
    const password= formData.get('password')

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      setErrorFromBackend("Invalid email or password");
    } else {
      router.refresh()
    }
    
      // setErrorFromBackend(
      //   error.message === "Unauthorized"
      //     ? "Invalid Email or Password"
      //     : error.message
      // );

    setSubmitBtn("Log In");
  };

  return (
    <div className="flex justify-between items-center smallPage">
      <div className="flex justify-center w-full lg:w-2/3">
        <div className="flex flex-col items-center gap-10 w-full md:w-2/3 p-5 lg:ms-10">
          <div className="flex flex-col gap-3">
            <div className="text-3xl font-extrabold">
              Welcome back to{" "}
              <span
                className={`${satisfy.className} antialiased text-[--primary]`}
              >
                Chic Haven
              </span>
            </div>
            <div className="text-gray-500">
              Log in to access your account, browse your favorite items, and
              continue your shopping journey.
            </div>
          </div>

          <form onSubmit={handleLogIn} className="flex flex-col gap-7 w-full">
            <div className="flex flex-col">
              <label htmlFor="email">Email address :</label>
              <input
                id="email"
                type="text"
                name="email"
                className="input"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="password">Password :</label>
              <input
                id="password"
                type="password"
                name="password"
                className="input"
                required
              />
            </div>

            <div className="text-center text-red-500">{errorFormBackend}</div>

            <button type="submit" className="btn">
              {submitBtn}
            </button>
          </form>

          <div className="text-sm text-gray-500">
            Don’t have an acoount?{" "}
            <Link href={"/auth/signup"} className="text-[--primary] underline">
              Sign Up
            </Link>
          </div>
        </div>
      </div>

      <div className="hidden lg:inline-block w-1/3">
        <Image
          src={"/images/joinUs.png"}
          width={700}
          height={475}
          alt="Chic Haven"
          priority
        />
      </div>
    </div>
  );
}
