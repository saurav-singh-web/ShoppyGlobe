const ErrorMessage = ({ message }) => {
  return (
    <p style={{ color: "red", textAlign: "center" }}>
      {message || "Something went wrong"}
    </p>
  );
};

export default ErrorMessage;