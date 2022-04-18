import { FC } from "react";
import { Modal as MantineModal } from "@mantine/core";
import { useModal } from "hooks/useModal";
import { useReset } from "hooks/useReset";

const Modal: FC = () => {
  const { isOpen, handleCloseModal } = useModal();
  const { handleReset } = useReset();

  const handleClick = () => {
    handleCloseModal();
    handleReset();
  };

  console.log(isOpen);
  return (
    <MantineModal
      opened={isOpen}
      onClose={handleCloseModal}
      withCloseButton={false}
      centered
      classNames={{
        modal: "rounded-2xl",
      }}
    >
      <div className="text-center">
        <h3 className="text-center text-lg font-medium leading-6 text-gray-900">
          もう1回やる？
        </h3>
        <div className="mt-2">
          <p className="mb-3 text-sm text-gray-500">
            下のボタンを押すともう1回挑戦できるよ！
          </p>
        </div>
        <button
          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          onClick={handleClick}
        >
          やる！
        </button>
      </div>
    </MantineModal>
  );
};

export default Modal;
