import type { FC } from "react";
import Image from "next/image";
import { useAtom } from "jotai";
import { opponentJankenAtom } from "atom/jankenAtom";

const Opponent: FC = () => {
  const [action] = useAtom(opponentJankenAtom);
  const jankenn = {
    "gu-": "/image/gu-.png",
    choki: "/image/choki.png",
    "pa-": "/image/pa-.png",
  } as const;

  return (
    <>
      {action ? (
        <Image src={jankenn[action]} width={90} height={90} alt="グー" />
      ) : (
        <div className="h-[90px] w-[90px] rounded-full bg-gray-400"></div>
      )}
    </>
  );
};

export default Opponent;
