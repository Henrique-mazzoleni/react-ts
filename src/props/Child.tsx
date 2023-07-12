import React from 'react';

interface ChildProps {
  color: string;
  onButtonClick: () => void;
  children?: React.ReactNode;
}

export const Child = ({ color, onButtonClick }: ChildProps) => {
  return (
    <div style={{ color: color }}>
      <button onClick={onButtonClick}>Click!</button>
      Hi There!
    </div>
  );
};

export const ChildFC: React.FC<ChildProps> = ({ color }) => {
  return <div style={{ color: color }}>Hi There!</div>;
};
