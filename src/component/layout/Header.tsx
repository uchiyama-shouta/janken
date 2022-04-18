import { memo } from "react";

const Header = memo(() => {
  return (
    <header className="border-b py-3 text-center text-xl">
      じゃんけんゲーム
    </header>
  );
});

export default Header;
