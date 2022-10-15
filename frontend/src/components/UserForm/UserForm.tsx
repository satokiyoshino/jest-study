import { memo } from 'react';

import { useUser } from '../../hooks/useUser';

export const UserForm = memo(() => {
  const [user, loading, error, userForm] = useUser();

  if (loading) return <div data-testid='loading'>loading</div>;
  if (error) return <div data-testid='error'>error</div>;

  return (
    <div>
      <div>
        <input type="text" data-testid='id-input' onChange={userForm.onIdChange} value={userForm.userIdForm} />
        <button onClick={userForm.submit} data-testid='submit-button'>SUBMIT</button>
      </div>
      <div data-testid='name-display'>{user === null ? 'NO USER' : user.name}</div>
    </div>
  );
});
