import css from "./Error.module.css";

const ErrorMessage = ({ isVisible }) => {
  if (!isVisible) {
    return null;
  }

  return (
    <p className={css.textError}>
      {"Something went wrong. Please try again!🙃"}
    </p>
  );
};

export default ErrorMessage;
