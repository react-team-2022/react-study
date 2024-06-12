import { useCallback, useReducer, useState } from "react";

const useInput2 = (initialForm) => {
  const [form, setForm] = useState(initialForm);

  const onChange2 = useCallback((e) => {
    const { value, name } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  }, []);

  const reset = useCallback(() => {
    setForm(initialForm);
  }, [initialForm]);

  return [form, onChange2, reset];
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        [action.name]: action.value,
      };
    case "RESET":
      return Object.keys(state).reduce((acc, cur) => {
        acc[cur] = "";
        return acc;
      }, {});
    default:
      return state;
  }
};

const useInput = (initialForm) => {
  const [form, dispatch] = useReducer(reducer, initialForm);

  //   const { users } = state.users;
  //   const { email, username } = state.inputs;

  const onChange2 = useCallback((e) => {
    const { name, value } = e.target;
    dispatch({ type: "CHANGE", name, value });
  }, []);

  const reset = useCallback(() => {
    dispatch({ type: "RESET" });
  }, []);
  return [form, onChange2, reset];
};

export default useInput;
