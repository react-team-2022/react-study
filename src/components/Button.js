import { useNavigate } from "react-router-dom";

const Button = function ({ memberName, path }) {
  const navigate = useNavigate();
  const pageRoutes = (e) => {
    if (e.target.textContent === memberName) {
      navigate("/" + path);
    }
  };
  return <button onClick={pageRoutes}>{memberName}</button>;
};

export default Button;
