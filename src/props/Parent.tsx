import { ChildFC } from './Child';

const Parent = () => {
  return <ChildFC onButtonClick={() => console.log('clicked!')} color="red" />;
};

export default Parent;
