import { useEffect, useState } from "react";

export function usePagination(items) {
  const [visibleCount, setVisibleCount] = useState(6);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    function updateCount() {
      const width = window.innerWidth;
      if (width < 576) setVisibleCount(3);
      else if (width < 992) setVisibleCount(4);
      else setVisibleCount(6);
    }

    updateCount();

    window.addEventListener("resize", updateCount);

    return () => window.removeEventListener("resize", updateCount);
  }, []);

  const maxStart = Math.max(0, items.length - visibleCount);

  useEffect(() => {
    setStartIndex((i) => Math.min(i, maxStart));
  }, [maxStart]);

  const visibleItems = items.slice(startIndex, startIndex + visibleCount);
  const goPrev = () => setStartIndex((i) => Math.max(0, i - 1));
  const goNext = () => setStartIndex((i) => Math.min(maxStart, i + 1));

  return {
    visibleItems,
    goPrev,
    goNext,
    isFirst: startIndex === 0,
    isLast: startIndex === maxStart,
  };
}
