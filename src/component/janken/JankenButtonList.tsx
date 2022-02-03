import { JankenButton } from "component/janken/JankenButton";
import { memo } from "react";

export const JankenButtonList = memo(() => {
  return (
    <div className="absolute inset-x-0 bottom-20 flex justify-around">
      <JankenButton action="gu-" />
      <JankenButton action="choki" />
      <JankenButton action="pa-" />
    </div>
  );
});
