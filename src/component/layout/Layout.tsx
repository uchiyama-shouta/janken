import type { ReactNode, FC } from "react";
import { useEffect, lazy } from "react";
import { useAtom } from "jotai";

import { Header } from "component/layout/Header";
import { resultAtom } from "atom/jankenAtom";
import { useModal } from "hooks/useModal";

type Props = {
  children: ReactNode;
};

const Modal = lazy(() => import("component/Modal"));

export const Layout: FC<Props> = ({ children }) => {
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
