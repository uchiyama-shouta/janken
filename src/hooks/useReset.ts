import { useAtom } from "jotai";
import { resultAtom, myJankenAtom, opponentJankenAtom } from "atom/jankenAtom";

export const useReset = () => {
  const [, setResult] = useAtom(resultAtom);
  const [, setMyAction] = useAtom(myJankenAtom);
  const [, setAction] = useAtom(opponentJankenAtom);

  const handleReset = () => {
    setResult(undefined);
    setMyAction(undefined);
    setAction(undefined);
  };

  return {
    handleReset,
  };
};
