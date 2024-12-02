import { getRelatedProducts } from '@/lib/data/products';
import Title from './Title';
import { product } from '@/types/types';
import CardProduct from './CardProduct';

export default async function RelatedProducts({id, categoryId}:{id: number, categoryId: number}) {
  const products = await getRelatedProducts(id, categoryId)
  return (
    <>
      {!!products.length && (
        <>
          <Title title="Related Products" />
          <div className="flex flex-wrap justify-center gap-5 p-5">
            {products.map((product: product) => {
              return <CardProduct key={product.id} product={product} />;
            })}
          </div>
        </>
      )}
    </>
  );
}
