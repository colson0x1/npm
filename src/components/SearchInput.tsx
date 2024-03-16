import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/* 3 ways to navigate a user around:
 * i. show a link
 * ii. based on an event
 * iii. based on form submission
 * */

/* useNavigate hook works in kind of surprising fashion.we call useNavigate
 * inside of our component, and this is gonna give us back a function that
 * we most often reffer to as navigate. This function we can then call at
 * any time inside of our component and that's gonna forciably navigate the
 * user over to some other route in our application
 */

export default function SearchInput() {
  const [term, setTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    // programmatic (based on an event)
    // programmatically or kind of forcibly navigate our user over to this
    // other page in our application
    navigate(`/search?term=${term}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={term} onChange={(e) => setTerm(e.target.value)} />
    </form>
  );
}

/* Third way to handle form submission with React Router
 * Based on form submission
 * */

/* One of the upsides of using this form besides its little bit more concise
 * and less code, it also ties nicely with the Browser Router object. So we
 * can use that Browser Router object to do a little bit of kind of automatic
 * data creation. We kind of get the ability to create records and what not.
 * But I personally like to handle that stuff own my own so that's why I
 * personally like to go with more traditional route here.
 */

/*
import { Form } from 'react-router-dom';

export default function SearchInput() {
  return (
    <Form action='/search'>
      <input name='term' />
    </Form>
  );
}
*/
