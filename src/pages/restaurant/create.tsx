import { useAuth } from 'react-oidc-context';

function CreateRestaurantPage() {
  const auth = useAuth();
  return (
    <div>
      Hello {auth.user?.profile.sub}{' '}
      <button onClick={() => void auth.removeUser()}>Log out</button>
    </div>
  );
}

export default CreateRestaurantPage;
