import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root';
import HomePage from './pages/HomePage';
import SearchPage from './pages/search/SearchPage';
import { searchLoader } from './pages/search/searchLoader';
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
        loader: searchLoader,
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

/* data fetching through react router
 * React Router itself has a set of tools that allows us to fetch some data
 * and provide that data to some page component that we're about to display
 * on the screen
 *
 * small project - consider fetching with React Router
 * React router makes it really really easy to fetch some data. There's just
 * really not a lot of code that we've to write out. On the other hand,
 * React Router when its fetching data, does not have a lot of complex and
 * very nice features that are included with Redux Toolkit Query out of the box.
 * So there is no tag system, there is no really good way of doing data
 * refetching. there's a lot of feture we get when we use Redux Toolkit Query
 *
 * medium/big - use Redux
 * So with that in mind, if we're working in a medium or large project or
 * even a small project that is a little bit more complex, I would recommend
 * sticking with Redux Toolkit Query
 *
 * Otherwise if we just have something really small and we just want to kind
 * of put a basic app together as quickly as possible, again we might consider
 * doing our data fetching with React Router
 *
 * we add a loader function to fetch data for the page using Browser Router
 *
 * The browser router is incharge of deciding what page we're about to display
 * on the screen. so we're gonna add in series of functions and these function
 * are going to be incharge of fetching some data and they're really gonna be
 * extremely simple functions. we gonna call the functions, its gonna make a
 * request and its goingn to return that data and we can access that data inside
 * of our different page components.
 * These loader functions are going to be passed off to the Browser Router.
 * Whenever we're about to display the home page or the search page or the
 * details page, the Browser Router is going to automatically call some
 * appropriate loader function for us.
 * When we're about to go to the search page, the Browser Router will
 * automatically call the search loader.
 * Our search loader function is going to make a request, reuturn it and then
 * we can just kind of magically get access to that data inside of our
 * search page. And the data is gonna be there, its present.
 * We don't have to worry about any promises or anything like that inside of
 * our search page.
 * We also don't have to worry about useEffect hooks or anything like that as well
 */
