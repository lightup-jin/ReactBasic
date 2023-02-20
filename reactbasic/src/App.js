import logo from "./logo.svg";
import "./App.css";
// React와 useState를 불러온다.
import React, { useState } from "react";

// App함수 컴포넌트를 정의한다
function App() {
  // user라는 변수에 Yejin이라는 값을 할당한다.
  const user = "Yejin";

  // useState는 React에서 상태를 관리하기 위한 Hook중 하나
  // 해당 Component에서 상태를 생성하고, 해당 상태를 변경하는 함수를 같이 반환받을 수 있다.
  // useState를 사용해 상태를 변경하면 React가 변경된 상태를 감지해서 자동으로 컴포넌트를 다시 랜더링 한다.
  // modal이라는 상태와 setModal이라는 함수를 useState로 정의한다. modal의 초기값은 false
  const [modal, setMoal] = useState(false);

  // setMoal 함수를 이용해서 Moal의 상태를 true로 업데이트 한다.
  const openModal = () => {
    setMoal(true);
  };
  // setMoal 함수를 이용해서 Moal의 상태를 false 업데이트 한다.
  const closeModal = () => {
    setMoal(false);
  };


  // return문 안에서 JSX를 이용해 UI를 랜더링 한다.
  return (
    <div>
      <h1>Hello, {user}!</h1>
      <p>This is a React app.</p>
      <button onClick={openModal}>Open Modal</button>
      {
        // JSX에서 조건부 랜더링을 하기 위한 방법 중 하나 (모달창이 열린 경우에만 모달창을 렌더링함)
        // modal이 true일 때만 조건부 다음 JSX를 랜더링하고, false일 때는 아무것도 랜더링 하지 않는다.
        // {modal && (실행문)}

        // if (modal) {
        //   return (실행문);
        // } else {
        //   return null;
        // }

        modal && (
          <div>
            {/* <div className="modal-overlay" onClick={closeModal}></div> */}
            <div className="modal-box">
              <div className="modal">
                <h2>Modal Title</h2>
                <p>Modal Content</p>
                <button onClick={closeModal}>Close Modal</button>
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
}

export default App;
