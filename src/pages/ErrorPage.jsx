import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <section className="error-section">
        <div id="error-text">
          <figure>
            <img
              src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif"
              alt="404 page"
            />
          </figure>
          <div className="text-center">
            <p className="p-a">
              . The page you were looking for could not be found
            </p>
            <p className="p-b">... Back to previous page </p>
          </div>
        </div>
      </section>
    );
  }
  console.log(error);

  return <h1>404 error page</h1>;
};
