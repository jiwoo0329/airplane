'use client';

import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

interface CustomAlertProps {
  message: string;
  onConfirm: () => void;
}

const CustomAlert = ({message, onConfirm}: CustomAlertProps) => {
    const [showModal, setShowModal] = useState(false);

  const handleConfirm = () => {
    setShowModal(false);
    setTimeout(() => onConfirm(), 1);
  };

  useEffect(() => {
    setTimeout(() => setShowModal(true), 1);
  }, []);

  return (
    <>
        {showModal && (
            <div className="layer_form fixed_layer alert_layer block">
                <div className="layer_cnt basic_cnt">
                    <div className="popup_cnt">
                        <div className="alert_title">알림</div>
                        <div className="alert_text">
                            {/* 줄바꿈 시 \n 사용 */}
                            <p>{message}</p>
                        </div>
                    </div>
                    <button
                        className="alert_button"
                        autoFocus
                        onClick={handleConfirm}
                    >
                        확인
                    </button>
                    <button
                        className="popup_close"
                        onClick={handleConfirm}
                    >
                        닫기
                    </button>
                </div>
                <button
                    className="layer_bg"
                    onClick={handleConfirm}
                >
                    닫기
                </button>
            </div>
        )}
    </>
  );
}


const myAlert = (message: string, callback?:()=>void) => {

  const handleConfirm = () => {
    const modalRoot = document.getElementById("modal-alert-portal-wrapper");
    if (modalRoot){ 
      modalRoot.remove();

      if (callback) callback();
    };
  };

  if (typeof window !== "undefined") {
    const subDiv = document.createElement("div");
    subDiv.id = "modal-alert-portal-wrapper";
    document.body.appendChild(subDiv);

    const root = createRoot(subDiv);
    root.render(<CustomAlert message={message} onConfirm={handleConfirm} />);
  }
};

export default myAlert;
