import React from "react";
import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();


if (error.status === 404){
  return (
    <section className="error-section"> 
            <div id="error-text">
    <figure>
      <img
        src="https://cdn3d.iconscout.com/3d/premium/thumb/girl-with-404-error-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--page-not-found-empty-webpage-cute-pack-people-illustrations-5841595.png?f=webp"
        alt="404 page"
      />
    </figure>
    <div className="tet-center">
      <p className="p-a">
          . The page you were looking for could not be found 
      </p>
      <p className="p-b">... back to previous page </p>

    </div>
  </div>
  </section>

  ) 
}
  
  <h1></h1>;
};
