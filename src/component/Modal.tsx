import { Fragment, VFC } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useModal } from "hooks/useModal";
import { useReset } from "hooks/useReset";

export const Modal: VFC = () => {
  const { isOpen, handleCloseModal } = useModal();
  const { handleReset } = useReset();

  const handleClick = () => {
    handleCloseModal();
    handleReset();
  };
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={handleCloseModal}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 -z-10 bg-black opacity-30" />
        </Transition.Child>

        <div className="min-h-screen px-4 text-center">
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="z-50 my-8 inline-block w-full max-w-md overflow-hidden rounded-2xl border bg-white p-6  align-middle shadow-xl transition-all">
              <Dialog.Title
                as="h3"
                className="text-center text-lg font-medium leading-6 text-gray-900"
              >
                もう1回やる？
              </Dialog.Title>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  下のボタンを押すともう1回挑戦できるよ！
                </p>
              </div>

              <div className="mt-4 text-center">
                <button
                  className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  onClick={handleClick}
                >
                  やる！
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};
