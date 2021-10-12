import { Link } from "react-router-dom";
import React from "react";
const NotFoundPage = () => (
    <p>
      404 Page <Link to="/">Go Home</Link>
    </p>
  );

export {NotFoundPage as default}