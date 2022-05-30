import Header from "../components/Header";
import { useLocation } from "react-router-dom";

const G1 = ({ members }) => {
  const location = useLocation();
  const pageOwner = members.filter(
    (elm) => "/" + elm.path === location.pathname
  )[0].memberName;

  //   const pageOwner = () => {
  //     for (let member of members) {
  //       if ("/" + member.path === location.pathname) {
  //         return member.memberName;
  //       }
  //     }
  //   };

  return (
    <div>
      <Header members={members} />
      <h1>{pageOwner.slice(1)}의 페이지</h1>
      {/* {pageOwner()}의 페이지 */}
    </div>
  );
};

export default G1;
