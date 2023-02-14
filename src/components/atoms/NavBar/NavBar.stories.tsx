//Create component stories navbar

import { NavBar } from './NavBar';

export default {
    title: 'atom/NavBar',
    component: NavBar,
    args : {},
};

export const Default = { args : {backgroundtype : 'blur', children : 'NavBar'} }

export const Clear = { args : {backgroundtype : 'clear', children : 'Clear'} }
export const Blur = { args : {backgroundtype : 'blur', children : 'Blur'} }


