import ReactDOM from "react-dom";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  className?: string;
}

const Modal = ({ children, isOpen, className }: ModalProps) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-300 ease-in-out overflow-y-auto ${className}`}
    >
      <div className="w-screen h-screen opacity-100 transition-opacity duration-300 ease-in-out ">
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
