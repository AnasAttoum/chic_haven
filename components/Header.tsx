"use client";

import { satisfy } from "@/app/ui/fonts";
import { links } from "@/constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const auth = false;
  const pathname = usePathname();

  return (
    <div className="flex justify-around items-center gap-10 py-5">
      <Link href={'/'} className={`${satisfy.className} antialiased text-2xl`}>
        Chic Haven
      </Link>

      <div className="flex justify-center gap-5">
        {auth ? (
          links.map(({ name, url }) => {
            return (
              <Link
                href={url}
                key={url}
                className={url === pathname ? "text-[--primary]" : ""}
              >
                {name}
              </Link>
            );
          })
        ) : (
          <>
            <Link href={'/login'} className="btn">
              Log In
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
