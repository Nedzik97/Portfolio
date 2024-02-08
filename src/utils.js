export const paths = {
  main: "*",
  about: "/about",
  work: "/work",
  skills: "/skills",
  contacts: "/contacts",
};

export const validateField = (name, value) => {
  let errorMessage = "";

  switch (name) {
    case "name":
      errorMessage =
        value.length < 2 ? "Name must contain at least 2 characters" : "";
      break;
    case "email":
      errorMessage = /^\S+@\S+\.\S+$/.test(value)
        ? ""
        : "Enter a valid email address";
      break;
    case "message":
      errorMessage =
        value.length < 60 ? "Text must contain at least 60 characters" : "";
      break;
    default:
      break;
  }

  return errorMessage;
};
