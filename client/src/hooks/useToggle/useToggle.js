import { useState } from 'react'

const useToggle = (initialState) => {
  const [toggleValue, setToggleValue] = useState(initialState);
  const toggler = () => { setToggleValue(!toggleValue) };
  return [toggleValue, toggler]
};

export default useToggle 