function Error({ message }) {
  return <div>ERROR: {message}</div>;
}

Error.getInitialProps = ({ err }) => {
  const message = err && err.message ? err.message : "";

  return {
    message,
  };
};

export default Error;
