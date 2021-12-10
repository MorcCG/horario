import React, {useEffect} from 'react';
import Tabla from './components/Tabla';
import Actividad from './components/Actividad';

const KEY ="tareaApp"

export function App() {

  useEffect(() => {localStorage.setItem(KEY, JSON.stringify[<Actividad/>])
},);



       return (
      <div>
        <Tabla/>
      </div>
    )
}


