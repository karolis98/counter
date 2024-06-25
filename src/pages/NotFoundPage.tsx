import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <div className="flex flex-col gap-2">
        404 Not Found
        <Link to="/">Home</Link>
      </div>
      ,
    </div>
  );
};

export default NotFoundPage;
