import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      Sorry, this page doesn't exist. Please check the URL or go back to the{' '}
      <Link to="/">
        <span className="homePageLink">Home page</span>
      </Link>
    </div>
  );
};

export default NotFound;
