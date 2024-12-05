

import React from 'react';
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
        <h1>404 Page Not Found</h1>
        <Link to = "/" className="mt-4 text-blue-500 underline">
         Go Back to Home
       </Link>
    </div>
  )
}

export default ErrorPage;
