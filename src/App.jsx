import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import { Title } from './components/Title';
import { Image } from './components/Image';
import { Lista } from './components/Lista';
import { Parrafo } from './components/Parrafo';
import { Parrafo2 } from './components/Parrafo2';
import { Parrafo3 } from './components/Parrafo3';
import { Button } from './components/Button';
import { Contador } from './components/Contador';
import { TextoLibre } from './components/TextoLibre';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Title nombre= "Jeneidys" apellido= "Molina"></Title>
    <Image></Image>
    <Parrafo></Parrafo>
    <Lista></Lista>
    <Parrafo2></Parrafo2>
    <Parrafo3></Parrafo3>
    <Button></Button>
    <Contador></Contador>
    <TextoLibre></TextoLibre>
    </div>
  )
}

export default App
