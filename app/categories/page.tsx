import CardCategory from "@/components/CardCategory";
import Title from "@/components/Title";
import { getCategories } from "@/lib/data/categories";
import { category } from "@/types/types";

export default async function page() {

    const categories = await getCategories()

  return (
    <>
      <Title title="Our Categories" />

      <div className="flex flex-wrap justify-center gap-5 p-5">
        {categories.map((category: category) => {
          return <CardCategory key={category.id} category={category} />;
        })}
      </div>
    </>
  );
}