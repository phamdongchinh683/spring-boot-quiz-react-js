import React from "react";
import { Link } from 'react-router-dom';
import "./index.scss";
const NotFound = () => {

  return (
    <section class="page_404">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>404</i>
      </p>
      <Link to="/" class="link_404">
        Go to Home
      </Link>
    </section >
  );
};

export default NotFound;
