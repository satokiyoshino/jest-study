import React, { useState, useCallback } from 'react';

import { getUser } from '../../repositories/getUser';

export type User = {
  name: string;
};

export const useUser = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const [userIdForm, setUserIdForm] = useState<string>('');
  const [user, setUser] = useState<User | null>(null);

  const onIdChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setUserIdForm(e.target.value);
  }, []);

  const submit = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const user = await getUser(userIdForm);
      setUser(user);
    } catch (error) {
      setError(error instanceof Error ? error : new Error('hooks Error'));
    } finally {
      setLoading(false);
    }
  }, [userIdForm]);

  return [user, loading, error, { userIdForm, onIdChange, submit }] as const;
};
