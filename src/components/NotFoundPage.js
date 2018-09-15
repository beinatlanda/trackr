import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    404 - Ups, looks like we have a problem. <Link to="/">Go home</Link>
  </div>
);

export default NotFoundPage;
