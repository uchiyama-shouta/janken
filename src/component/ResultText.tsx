import { resultAtom } from "atom/jankenAtom";
import { useAtom } from "jotai";

export const ResultText = () => {
  const [result] = useAtom(resultAtom);
  return (
    <p className="mt-6 mb-16 min-h-[28px] text-center text-xl text-red-500">
      {result}
    </p>
  );
};
