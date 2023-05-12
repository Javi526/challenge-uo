import { Dispatch } from "react";
import { InfoAction } from "@/interface/action";

export const GetUseInfo = (state: object | string) => {
    if (typeof window === "object") {
        const localData = localStorage.getItem("useInfo");
        if (localData !== null) {
            return JSON.parse(localData);
        }
    }
    return state;
};

export const UpdateUseInfo = (
    key: string,
    type: string,
    data: any,
    state: object,
    dispatch: Dispatch<InfoAction>
): void => {
    const dataInfo: any = state;
    dataInfo[key] = data;
    dispatch({ type, payload: dataInfo });
    localStorage.setItem("useInfo", JSON.stringify(dataInfo));
};