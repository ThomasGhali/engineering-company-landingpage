import { ChevronRight } from 'lucide-react';

export default function ActionBtn() {
  return (
    <button className="text-sm text-text-main border-text-main border flex mt-5 mb-2 rounded-[2px]">
      <span className="flex items-center px-5 font-semibold">Read more</span>

      <div className="border-l border-text-main pl-2 p-1.5">
        <ChevronRight strokeWidth={2} />
      </div>
    </button>
  );
}
