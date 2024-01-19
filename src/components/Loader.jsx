/**
 * The Loader function returns a React component that displays a loading message and a spinner while a
 * product is being fetched.
 * @returns The Loader component is being returned.
 */
function Loader() {
  return (
    <div className="loader">
      <h1>😊Wait, Product is fetching...😊</h1>
      <div className="spinner-border text-success" role="status"></div>
      <p>Loading...</p>
    </div>
  );
}

export default Loader;
