import { satisfy } from "@/app/ui/fonts";

export default function Title({ title }: { title: string }) {
  return (
    <div className="flex justify-center">
      <div className={`${satisfy.className} text-3xl sm:text-4xl text-[--hover] p-10`}>{title}</div>
    </div>
  );
}
