import { Link } from 'react-router';
import { usePuterStore } from '~/lib/puter';

export default function NavBar() {
  const { auth } = usePuterStore();
  const handleLogOut = () => {
    auth.signOut();
  };
  return (
    <nav className='navbar'>
      <Link to={'/'}>
        <p className='text-2xl font-bold text-gradient'>Resumind</p>
      </Link>
      <div className='flex flex-row gap-4'>
        <Link to={'/upload'} className='primary-button w-fit'>
          Upload Resume
        </Link>
        <button className='primary-button w-fit' onClick={handleLogOut}>
          Log Out
        </button>
      </div>
    </nav>
  );
}
