import Content from "./Content";
import Footer from "./Footer";

const Page = ({ isDark, setIsDark }) => {
  // 콘솔로 어디까지 왔는지 확인 해보자구~ console.log('context 가져온값: ', )
  return (
    <div className="page">
      <Content isDark={isDark} />
      <Footer isDark={isDark} setIsDark={setIsDark} />
    </div>
  );
};

export default Page;
