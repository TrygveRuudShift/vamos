//Create component stories navbar

import { NavBar } from './NavBar';

export default {
    title: 'atom/NavBar',
    component: NavBar,
    args : { children : 'NavBar' },
};

export const Default = {}

export const Title = { args : { title : 'Title' } }
export const TitleAndChildren = { args : { title : 'Title', children: "Children" } }
export const TitleAndChildrenAndProps = { args : { title : 'Title', children: "Children", color: "red" } }
export const TitleAndProps = { args : { title : 'Title', color: "red" } }
export const ChildrenAndProps = { args : { children: "Children", color: "red" } }
export const Props = { args : { color: "red" } }
