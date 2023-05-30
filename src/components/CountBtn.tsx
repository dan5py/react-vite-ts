import { useState } from 'react';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
}

export default function CountBtn({ className }: Props) {
  const [count, setCount] = useState(0);

  return (
    <button
      onClick={() => setCount((count) => count + 1)}
      className={cn(
        'px-4 py-2 mt-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 shadow-[black_0px_4px] active:shadow-[black_0px_2px] active:translate-y-[2px] transition-all',
        className
      )}
    >
      Count is: {count}
    </button>
  );
}
