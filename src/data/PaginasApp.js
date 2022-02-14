import {v4 as uuid} from "uuid";
import Ejercicio1 from "../components/Ejercicio1";
import Ejercicio2 from "../components/Ejercicio2";
import Ejercicio3 from "../components/Ejercicio3";

const lista=[
    {
        id: uuid(),
        path:'/Ejercicio1',
        title:'Ejercicio 1',
        component: <Ejercicio1/>,
    },
    {
        id: uuid(),
        path:'/Ejercicio2',
        title:'Ejercicio 2',
        component: <Ejercicio2/>,
    },
    {
        id: uuid(),
        path:'/Ejercicio3',
        title:'Ejercicio 3',
        component: <Ejercicio3/>,
    }
];

export default lista;