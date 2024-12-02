"use client"

import Image from "next/image";
import { useState } from "react";

export default function ProductImages({title, images}:{title: string, images: string[]}) {
    const [image, setImage] = useState(images[0])
  return (
    <div className="flex max-sm:flex-col justify-center items-center w-full lg:w-1/2 gap-5 px-2">
      {/* All Images */}
      <div className="flex sm:flex-col flex-wrap gap-5">
        {images.map((img, index) => {
          return (
            <Image key={index} src={img} alt={title} width={75} height={75} className="rounded-md" 
            style={image===img?{outline:'3px solid var(--primary)', outlineOffset:'3px'}:{cursor:'pointer'}}
            onClick={ () => setImage(img) }
             />
          );
        })}
      </div>

      {/* Big Image */}
      <Image src={image} alt={title} width={400} height={400} className="rounded-md" />
    </div>
  );
}