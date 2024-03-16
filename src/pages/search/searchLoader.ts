/* Uses the 'searchPackages' function to fetch data */
// Gets some data for SearchPage component
import { searchPackages } from '../../api/queries/searchPackages';

// This loader function can make multiple different requests.
// And if we make all those requests and called fetch directly inside
// of this function, it just ends up being really confusing and hard to read.
// So, we extract that request logic into the separate queries/searchPackages.ts
// which will serve us and makes a lot easier for us to orgainze our code!
export async function searchLoader({ request }: { request: Request }) {
  // It's gonna receive some information about the route that we're
  // currently navigating to, it's gonna make a request, return some data.
  // We define loader, and the Browser Router is gonna automatically
  // call that and expose this data to our Search Page component
  // `request` object is going to include some information about the user
  // kind of coming to this path '/search'
  /* console.log(request); */

  // extract url property: represents what a user is trying to navigate to
  // we're going to build a URL object out of it
  // Its a built in feature from browser which allows us to extract
  // certain pieces of infromation out of a url.
  // One piece of information we can extract out is the `searchParams`
  // That's the query string at the very end of the url
  const { searchParams } = new URL(request.url);
  // Taking searchParams object and ask for just the term part of it
  const term = searchParams.get('term');

  if (!term) {
    throw new Error('Search term must be provided');
  }
  // console.log('Search term:', term);

  const results = await searchPackages(term);

  return {
    searchResults: results,
  };
}
