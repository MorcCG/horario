import React from 'react'
import Actividad from './Actividad';
import './Estilo.css';

export default function Tabla() {

    const horaArray = ["08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00"];
    
    return (
        <div><table class="table table-bordered">
    <thead>
      <tr>
        <th class="hora"scope="col">Hora</th>
        <th class="titulo"scope="col">Lunes</th>
        <th class="titulo"scope="col">Martes</th>
        <th class="titulo"scope="col">Miércoles</th>
        <th class="titulo"scope="col">Jueves</th>
        <th class="titulo"scope="col">Viernes</th>
        <th class="titulo"scope="col">Sábado</th>
        <th class="titulo"scope="col">Domingo</th>

      </tr>
    </thead>
    <tbody>
      {horaArray.map(hora => (
        <tr>
          
                  
                    <th classs="hora" scope="row">{hora}</th>
                    {/*Lunes*/}<td><Actividad/></td>
                    {/*Martes*/}<td><Actividad/></td>
                    {/*Miércoles*/}<td><Actividad/></td>
                    {/*Jueves*/}<td><Actividad/></td>
                    {/*Viernes*/}<td><Actividad/></td>
                    {/*Sábado*/}<td><Actividad/></td>
                    {/*Domingo*/}<td><Actividad/></td>
                  
              
              
          
              
        </tr>  
      ))}
      
    </tbody>
    
  </table></div>
    )
}
