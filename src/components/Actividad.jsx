import React, {useState} from 'react';
import './Estilo.css';


 let Actividad = () => {
  const [value, setValue] = useState('');
  const onChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      <input value={value} onChange={onChange} />
    </>
  );
}

export default Actividad;



