import Image from "next/image";

export default function CardProduct() {
  return (
    <div className="flex flex-col items-center rounded-lg w-64 transition-all bg-[--secondary] p-1 gap-2 hover:bg-[--primary] hover:text-white">
      <Image
        src={"/images/product.jpeg"}
        layout="responsive"
        alt="product1"
        width={700}
        height={475}
        className="rounded-lg"
      />

      <div className="text-xs">Classic Olive Chino Shorts</div>
      <div className="text-sm">84 $</div>
    </div>
  );
}
