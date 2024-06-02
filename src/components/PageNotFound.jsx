function PageNotFound() {
  return (
    <div className="page-not-found-container">
      <img
        src={"/public/not-found.jpg"}
        alt="Not Found"
        className="page-not-found-image"
      />
      <h1 className="page-not-found-title">404 - Page Not Found</h1>
      <p className="page-not-found-message">
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  );
}

export default PageNotFound;
