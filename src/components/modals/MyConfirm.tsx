'use client';

import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

interface CustomConfirmProps {
  message: string;
  onConfirm: () => void;
  onConfirmOk: () => void;
}

const CustomConfirm = ({message, onConfirm, onConfirmOk}: CustomConfirmProps) => {
  const [showModal, setShowModal] = useState(false);

  const handleConfirm = () => {
    setShowModal(false);
    setTimeout(() => onConfirm(), 1);
  };

  const handleConfirmOk = () => {
    setShowModal(false);
    setTimeout(() => onConfirmOk(), 1);
  };

  useEffect(() => {
    setTimeout(() => setShowModal(true), 1);
  }, []);

  return (
    <>
        {showModal && (
            <div className="layer_form fixed_layer confirm_layer block">
                <div className="layer_cnt basic_cnt">
                    <div className="popup_cnt">
                        <div className="alert_title">알림</div>
                        <div className="alert_text">
                            {/* 줄바꿈 시 \n 사용 */}
                            <p>{message}</p>
                        </div>
                    </div>
                    <div className="confirm_buttons">
                      <button
                          className="alert_button cancel_btn"
                          onClick={() => {
                              handleConfirm();
                          }}
                      >
                          취소
                      </button>

                      <button
                          className="alert_button"
                          onClick={() => {
                              handleConfirmOk();
                          }}
                      >
                          확인
                      </button>
                  </div>
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


const myConfirm = (message: string, callback?: () => void, callbackOk?: () => void) => {

  const handleConfirm = () => {
    const modalRoot = document.getElementById("modal-confirm-portal-wrapper");
    if (modalRoot){ 
      modalRoot.remove();

      if (callback) callback();
    };
  };

  const handleConfirmOk = () => {
    const modalRoot = document.getElementById("modal-confirm-portal-wrapper");
    if (modalRoot){ 
      modalRoot.remove();

      if (callbackOk) callbackOk();
    };
  };

  if (typeof window !== "undefined") {
    const subDiv = document.createElement("div");
    subDiv.id = "modal-confirm-portal-wrapper";
    document.body.appendChild(subDiv);

    const root = createRoot(subDiv);
    root.render(<CustomConfirm message={message} onConfirm={handleConfirm} onConfirmOk={handleConfirmOk}/>);
  }
};

export default myConfirm;
