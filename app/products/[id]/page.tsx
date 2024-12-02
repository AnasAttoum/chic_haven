import ProductImages from "@/components/ProductImages";
import RelatedProducts from "@/components/RelatedProducts";
import { getProduct } from "@/lib/data/products";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProduct(id);
  if (!product.id) {
    notFound();
  }

  return (
    <>
      <div className="flex max-lg:flex-col-reverse justify-center">
        {/* Left */}
        <ProductImages title={product.title} images={product.images} />

        {/* Right */}
        <div className="flex flex-col gap-5 w-full lg:w-1/2 p-5">
          <div className="text-lg font-extrabold">{product.title}</div>
          <div>
            <Link
              href={`/products?category=${product.category.id}`}
              className="text-white bg-[--primary] rounded-md p-1"
            >
              {product.category.name}
            </Link>{" "}
          </div>
          <div>$ {product.price}</div>

          <div className="text-justify">{product.description}</div>
        </div>
      </div>

      <RelatedProducts id={product.id} categoryId={product.category.id}/>
    </>
  );
}