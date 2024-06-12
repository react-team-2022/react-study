// import Content from "./Content";
// import Footer from "./Footer";
import React, { useContext } from "react";
import styled from "styled-components";
import { Darkmode } from "./App";

const ContentStyled = styled.div`
  background-color: ${(props) => (props.isDark ? "black" : "white")};
  color: ${(props) => (props.isDark ? "white" : "black")};
`;

const Content = () => {
  const { isDark } = useContext(Darkmode);
  return (
    <ContentStyled className="content" isDark={isDark}>
      <p>isDark : {isDark ? "true" : "false"}, 좋은 하루 되세요</p>
      {/* // </div> */}
    </ContentStyled>
  );
};

const Footer = () => {
  const { isDark, setIsDark } = useContext(Darkmode);
  const toggleTheme = () => {
    setIsDark(!isDark);
  };
  return (
    <div
      className="footer"
      style={{
        backgroundColor: isDark ? "black" : "white",
        color: isDark ? "white" : "black",
      }}
    >
      <button className="button" onClick={toggleTheme}>
        Dark Mode
      </button>
    </div>
  );
};

const Page = () => {
  // 콘솔로 어디까지 왔는지 확인 해보자구~ console.log('context 가져온값: ', )

  return (
    <div className="page">
      <Content />
      <Footer />
    </div>
  );
};

export default Page;
