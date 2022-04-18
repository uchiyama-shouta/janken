import type { ReactNode, FC } from "react";
import { useEffect } from "react";
import { useAtom } from "jotai";

import Header from "component/layout/Header";
import { resultAtom } from "atom/jankenAtom";
import { useModal } from "hooks/useModal";
import Modal from "component/Modal";

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  const { handleOpenModal } = useModal();
  const [result] = useAtom(resultAtom);
  useEffect(() => {
    if (result === "勝ち！" || result === "負け...") {
      setTimeout(() => {
        handleOpenModal();
      }, 1000);
    }
  }, [result, handleOpenModal]);
  return (
    <>
      <div className="h-full">
        <Header />
        <main>{children}</main>
      </div>
      <Modal />
    </>
  );
};

export default Layout;
