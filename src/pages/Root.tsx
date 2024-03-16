import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

/* Outlet from react-router-dom is a React Component and it reaches up to the
 * Browser Router through the context system and says, hey what is the currently
 * selected component. Which of the page that we're currently supposed to
 * display. Browser Router will tell which to display it and the Outlet will
 * simply display it.
 */

export default function Root() {
  return (
    <div className='container mx-auto px-20'>
      <Header />
      <Outlet />
    </div>
  );
}
