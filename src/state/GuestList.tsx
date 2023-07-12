import React, { useState } from 'react';

const GuestList: React.FC = () => {
  const [name, setName] = useState('');
  const [list, setList] = useState<string[]>([]);

  const addToListHandler = () => {
    setName('');
    setList([...list, name]);
  };

  return (
    <div>
      <h3>Guest List:</h3>

      <ul>
        {list.map((name, idx) => (
          <li key={idx}>{name}</li>
        ))}
      </ul>

      <input onChange={(e) => setName(e.target.value)} value={name} />
      <button onClick={addToListHandler}>Add Guest</button>
    </div>
  );
};

export default GuestList;
