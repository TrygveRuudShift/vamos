//create inputfield component
import { Input } from "@chakra-ui/react";
interface InputFieldProps { 
    placeholder: string;
    type?: "text" | "password";
    size?: "thin" | "medium" | "thick";
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputField = ({ placeholder, type, value, size, onChange }: InputFieldProps) => {
    let borderWidth = undefined;
    if (size) {
        if (size === "thin") borderWidth = "thin";
        if (size === "medium") borderWidth = "medium";
        if (size === "thick") borderWidth = "thick";
  }

    return (
        <Input placeholder={placeholder} type={type} value={value} borderWidth={borderWidth} onChange={onChange} />
    )
}



