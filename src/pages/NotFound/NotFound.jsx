import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
      <div>
        Sorry, this page doesn't exist. Please check the URL or go back to the 
          <Link to='/'>
              <span>Home page</span>
          </Link>
      </div>
  );
}