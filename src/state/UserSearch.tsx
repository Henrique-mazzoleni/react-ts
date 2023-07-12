import React, { useState } from 'react';

const usersList = [
  { name: 'Henrique', age: 38 },
  { name: 'Annia', age: 39 },
  { name: 'Gabizinha', age: 2 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  const searchUserHandler = () => {
    const foundUser = usersList.find((user) => user.name === name);
    setUser(foundUser);
  };
  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={searchUserHandler}>Search</button>
      <br />
      {user && user.name}
      <br />
      {user && user.age}
    </div>
  );
};

export default UserSearch;
