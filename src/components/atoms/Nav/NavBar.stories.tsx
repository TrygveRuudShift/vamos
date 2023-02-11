//Create component stories navbar

import { NavBar } from './NavBar';

export default {
    title: 'atom/NavBar',
    component: NavBar,
    args : {},
};

export const Default = { args : {title : 'VAMOS', backgroundtype : 'blur', children : 'NavBar'} }

export const Clear = { args : {title : 'Title', backgroundtype : 'clear', children : 'Clear'} }
export const Blur = { args : {title : 'Title', backgroundtype : 'blur', children : 'Blur'} }


