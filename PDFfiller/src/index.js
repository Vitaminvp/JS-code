import './styles/style.scss';
import  { Lines }  from './Components/Lines/';
import { params } from "./Components/params";

const root = document.querySelector('#root');

new Lines(root, params);
