"use client"

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function SignUp() {

  const [errorFormBackend, setErrorFromBackend] = useState("");
  const [submitBtn, setSubmitBtn] = useState("Sign Up");
  const router = useRouter();

  const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitBtn("Loading...");
    setErrorFromBackend("");

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password, avatar:"https://api.lorem.space/image/face?w=640&h=480" }),
    });
    const data = await response.json()
    if(response.ok)
      router.replace('/auth/login')
    else
      setErrorFromBackend(data.message)
    // console.log(data.message)
    

    // const result = await signIn("credentials", {
    //   redirect: false,
    //   email,
    //   password,
    // });

    // if (result?.error) {
    //   setErrorFromBackend("Invalid email or password");
    // } else {
    //   router.refresh();
    // }

    // setErrorFromBackend(
    //   error.message === "Unauthorized"
    //     ? "Invalid Email or Password"
    //     : error.message
    // );

    setSubmitBtn("Sign Up");
  };

  return (
    <div className="flex justify-between items-center smallPage">
      <div className="flex justify-center w-full lg:w-2/3">
        <div className="flex flex-col items-center gap-10 w-full md:w-2/3 p-5 lg:ms-10">
          <div className="flex flex-col gap-3">
            <div className="text-3xl font-extrabold">
              Ready to start your adventure in style?
            </div>
            <div className="text-gray-500">
              Sign up to our website and start shopping in seconds with our
              quick and easy checkout process!
            </div>
          </div>

          <form onSubmit={handleSignUp} className="flex flex-col gap-7 w-full">
            <div className="flex flex-col">
              <label htmlFor="name">Full Name :</label>
              <input id="name" name="name" type="text" className="input" required />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email">Email address :</label>
              <input id="email" name="email" type="text" className="input" required />
            </div>

            <div className="flex flex-col">
              <label htmlFor="password">Password :</label>
              <input id="password" name="password" type="password" className="input" required />
            </div>

            <div className="text-center text-red-500">{errorFormBackend}</div>

            <button type="submit" className="btn">
              {submitBtn}
            </button>
          </form>

          <div className="text-sm text-gray-500">
            Do you have an acoount?{" "}
            <Link href={"/auth/login"} className="text-[--primary] underline">
              Log In
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
        />
      </div>
    </div>
  );
}