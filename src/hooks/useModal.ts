import { useAtom } from "jotai";
import { modalAtom } from "atom/modalAtom";
import { useCallback } from "react";

export const useModal = () => {
  const [isOpen, setIsOpen] = useAtom(modalAtom);

  const handleCloseModal = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);
  const handleOpenModal = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  return {
    isOpen,
    handleCloseModal,
    handleOpenModal,
  };
};
