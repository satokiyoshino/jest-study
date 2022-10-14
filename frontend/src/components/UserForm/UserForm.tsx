import { memo } from 'react';

import { useUser } from '../../hooks/useUser';

export const UserForm = memo(() => {
  const [user, loading, error, userForm] = useUser();

  if (loading) return <>loading</>;
  if (error) return <>error</>;

  return (
    <div>
      <div>
        <input type="text" onChange={userForm.onIdChange} value={userForm.userIdForm} />
        <button onClick={userForm.submit}>SUBMIT</button>
      </div>
      <div>{user === null ? 'NO USER' : user.name}</div>
    </div>
  );
});
