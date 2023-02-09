import { InputField } from './InputField';

export default {
    title: 'atom/InputField',
    component: InputField,
    args : { children : 'InputField', type : "text", borderWidth : "thin", borderRadius : "medium" },
};

export const Default = {}

export const Text = { args : { type : 'text', children: "Text" } }
export const Password = { args : { type : 'password', children: "Password" } }



