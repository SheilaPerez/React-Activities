import {createContext, Dispatch, SetStateAction} from "react";

export interface ColorContextProps {
    lightOn: boolean;
    setLightOn: Dispatch<SetStateAction<boolean>>;
}

const ColorContext = createContext({
    lightOn: false,
    setLightOn: function noop () {} as any
});

export default ColorContext;