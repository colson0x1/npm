import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
