import Image from "next/image";
import Link from "next/link";

export default function SignUp() {
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

          <form className="flex flex-col gap-7 w-full">
            <div className="flex flex-col">
              <label htmlFor="name">Full Name :</label>
              <input id="name" type="text" className="input" required />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email">Email address :</label>
              <input id="email" type="text" className="input" required />
            </div>

            <div className="flex flex-col">
              <label htmlFor="password">Password :</label>
              <input id="password" type="password" className="input" required />
            </div>

            <button type="submit" className="btn">
              Sign Up
            </button>
          </form>

          <div className="text-sm text-gray-500">
            Do you have an acoount?{" "}
            <Link href={"/login"} className="text-[--primary] underline">
              Log In
            </Link>
          </div>
        </div>
      </div>

      <div className="hidden lg:inline-block w-1/3">
        <Image
          src={"/images/joinUs.png"}
          layout="responsive"
          width={700}
          height={475}
          alt="Chic Haven"
        />
      </div>
    </div>
  );
}