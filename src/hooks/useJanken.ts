import { useCallback, useEffect } from "react";
import { useAtom } from "jotai";

import { opponentJankenAtom, myJankenAtom, resultAtom } from "atom/jankenAtom";

import { outputResult } from "util/outputResult";
import { random } from "util/random";

import type { Action } from "type/Action";

export const useJanken = () => {
  const [action, setAction] = useAtom(opponentJankenAtom);
  const [myAction, setMyAction] = useAtom(myJankenAtom);
  const [, setResult] = useAtom(resultAtom);

  const handleClick = useCallback(
    (myAction: Action | undefined) => {
      const randomAction = random();
      setAction(randomAction);
      setMyAction(myAction);
    },
    [setAction, setMyAction],
  );

  useEffect(() => {
    if (typeof myAction === "undefined" || typeof action === "undefined") {
    } else {
      const result = outputResult(myAction, action);
      setResult(result);
    }
  }, [action, myAction, setResult]);

  return {
    handleClick,
  };
};
