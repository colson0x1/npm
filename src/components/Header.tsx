/* Link is a react component that's going to show an anchor element to the
 * user. User can then click on this thing and navigate to our application.
 * Anytime we want to navigate a user around to different pages of our app,
 * we're going to use this Link element and if we ever want to navigate a
 * user to some page outside of our app like google.com, we'll fallback to
 * using traditional anchor element
 * To designate where user's is gonna navigate to, we put in a `to` prop.
 * This is going to be a string saying exactly where we want to navigate
 * the user to.
 */

/* Link uses declarative navigation. Programmatic Navigation is when run our
 * code at some point in time and then navigate user to a different page
 * in our app
 */
import { Link } from 'react-router-dom';
import SearchInput from './SearchInput';

export default function Header() {
  return (
    <div>
      <Link to='/'>NPM Registry</Link>
      <SearchInput />
    </div>
  );
}
