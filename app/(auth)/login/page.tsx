import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex justify-between items-center h-full">
      <div className="flex flex-col items-center justify-evenly gap-7 w-full lg:w-2/3 p-3">
        <div>
          <div className="text-3xl font-extrabold">Welcome back</div>
          <div className="text-gray-500">Please enter your details</div>
        </div>

        <form className="flex flex-col gap-7">
          <div className="flex flex-col">
            <label htmlFor="email">Email address :</label>
            <input id="email" type="text" className="input" required />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password">Password :</label>
            <input id="password" type="password" className="input" required />
          </div>

          <button type="submit" className="btn">
            Log In
          </button>
        </form>

        <div className="text-sm text-gray-500">
          Don’t have an acoount?{" "}
          <Link href={"/signup"} className="text-[--primary] underline">
            Sign Up
          </Link>
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
