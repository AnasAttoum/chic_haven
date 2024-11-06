import Image from "next/image";

export default function Home() {
  return (
    <div className="flex max-md:flex-col max-md:items-center justify-center md:justify-between bg-[--secondary] p-5 smallPage">
      <div className="max-md:hidden w-3/12 lg:w-3/12">
        <Image
          src={"/images/lampHeader.svg"}
          layout="responsive"
          width={700}
          height={475}
          alt="Chic Haven - Lamp"
        />
      </div>

      <div className="flex flex-col justify-center gap-5 max-md:w-full w-6/12 lg:w-5/12">
        <div>
          <div className="text-md text-[--hover]">Find Your Perfect Fit..</div>
          <div className="text-3xl font-extrabold">
            Shop Our Wide Selection & Discover Your New Favorite Styles
          </div>
        </div>
        <div className="text-xs text-gray-500 text-justify">
          Welcome to Chic Haven, your ultimate destination for curated elegance
          and timeless style. We believe that your home should be a sanctuary of
          sophistication, reflecting your unique personality and taste. Our
          carefully curated collection features a diverse array of home decor,
          furniture, and accessories, each chosen for its exceptional quality,
          exquisite design, and enduring appeal. From minimalist modern pieces
          to classic vintage treasures, we offer something for every aesthetic
          and budget. Discover the joy of transforming your space into a chic
          haven where beauty and comfort intertwine.
        </div>
      </div>

      <div className="flex items-center w-8/12 sm:w-6/12 md:w-3/12 lg:w-4/12">
        <Image
          src={"/images/sofaHeader.svg"}
          layout="responsive"
          width={700}
          height={475}
          alt="Chic Haven - Sofa"
        />
      </div>
    </div>
  );
}