import Image from 'next/image';

import { category } from '@/types/types';
import Link from 'next/link';

export default function CardCategory({ category:{id,image, name} }: { category: category }) {
  return (
    <Link href={`/products?category=${id}`} className="group relative">
      <div className="group-hover:blur-sm z-0 transition-all">
        <Image
          src={image}
          alt={name}
          width={250}
          height={250}
          className="rounded-lg"
        />
      </div>

      <div className="w-0 transition-all group-hover:flex rounded-lg absolute top-0 left-0 group-hover:w-full h-full bg-[#0007] flex-col justify-center items-center text-white text-lg font-extrabold z-10 overflow-hidden">
        <div className='hidden group-hover:inline-block'>{name}</div>
      </div>
    </Link>
  );
}
