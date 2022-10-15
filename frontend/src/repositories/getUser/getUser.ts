import type { User } from '../../hooks/useUser';

export const _users: Record<string, User> = {
  '1': { name: 'John' },
  '2': { name: 'Bob' },
  '3': { name: 'Smith' },
  '4': { name: 'Micheal' },
};

export const getUser = async (id: string): Promise<User> => {
  const sleep = (second: number) => new Promise((resolve) => setTimeout(resolve, second * 1000));

  return await sleep(0.5)
    .then(() => {
      if (_users[id] === undefined) throw new Error('There is no user');
      return _users[id];
    })
    .catch((error) => {
      throw error instanceof Error ? error : new Error('getUser Error');
    });
};
