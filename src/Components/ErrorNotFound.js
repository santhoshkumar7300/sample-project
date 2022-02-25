export default function Error() {
  const ErrorStyle = {
    color: "red",
  };
  const Total = {
    fontSize: "40px",
    color: "#bfbbbb",
    textAlign: "center",
    paddingTop: "20px",
  };

  return (
    <div>
      <p style={Total}>
        <span style={ErrorStyle}>404</span> Not Found
      </p>
    </div>
  );
}
