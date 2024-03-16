import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import DetailsPage from './pages/DetailsPage';

/* createBrowserRouter is like an object which is going to look at the
 * current path of the user is visiting and decide on which of these 3
 * different components to display
 */
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/search',
        element: <SearchPage />,
      },
      {
        path: '/packages/:name',
        element: <DetailsPage />,
      },
    ],
  },
]);

function App() {
  /*
   * Router Provider thing is like the same Provider from the Context system.
   * Behind the scenes, react router dom uses the context system to
   * communicate what page user is currently navigating to and lot of state
   * around navigation to the rest of our app
   * We wrap our entire application using this Router Provider thing and we're
   * gonna provide our router as a prop to it
   */
  return <RouterProvider router={router} />;
}

export default App;
