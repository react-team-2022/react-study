import styled from "styled-components";

// styled-components
const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 0px;
`;

const ModalInnerTextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 400px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalTextUlTag = styled.ul`
  list-style-type: none;
`;

const ModalText = styled.li`
  color: ${(props) => props.color || "yellow"};
  margin-bottom: 20px;
  font-size: 30px;
`;

const Modal = ({ onShow }) => {
  return (
    <>
      <ModalContainer onClick={onShow}>
        <ModalInnerTextContainer onClick={(e) => e.stopPropagation()}>
          <ModalTextUlTag>
            <ModalText color="orange" onClick={() => alert("복사되었습니다")}>
              1. 주소복사
            </ModalText>
            <ModalText
              onClick={() => {
                alert("카톡 공유되었습니다");
              }}
            >
              2. 카카오톡 공유
            </ModalText>
            <ModalText
              onClick={() => {
                alert("페북 공유되었습니다");
              }}
              color="green"
            >
              3. 페이스북 공유
            </ModalText>
          </ModalTextUlTag>
        </ModalInnerTextContainer>
      </ModalContainer>
    </>
  );
};

export default Modal;
