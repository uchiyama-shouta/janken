import JankenButton from "component/janken/JankenButton";
import { memo } from "react";

const JankenButtonList = memo(() => {
  return (
    <div className="fixed inset-x-0 bottom-20 flex justify-around">
      <JankenButton action="gu-" />
      <JankenButton action="choki" />
      <JankenButton action="pa-" />
    </div>
  );
});

export default JankenButtonList;
