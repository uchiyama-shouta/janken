import type { VFC } from "react";
import { memo } from "react";
import Image from "next/image";
import { useJanken } from "hooks/useJanken";
import type { Action } from "type/Action";

type Props = {
  action: Action;
};

export const JankenButton: VFC<Props> = memo(({ action }) => {
  const { handleClick } = useJanken();
  const jankenn = {
    "gu-": "/image/gu-.png",
    choki: "/image/choki.png",
    "pa-": "/image/pa-.png",
  } as const;
  const src = jankenn[action];

  return (
    <div
      className="flex h-20 w-20 items-center justify-center rounded-full border border-slate-700"
      onClick={() => handleClick(action)}
    >
      <Image src={src} width={50} height={50} alt={action} quality={50} />
    </div>
  );
});
