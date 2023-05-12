import { InfoAction } from "@/interface/action";
import { GET_USE_INFO_SUCCESS, INIT_USE_INFO, UPDATE_USE_INFO_SUCCESS } from "@/constans/useInfo";

type Props = {
    data: object
}

export const UseInfoInitialState = {
    data: {}
}

export const UseInfoReducer = (state: Props, action: InfoAction) => {
    switch (action.type) {
        case INIT_USE_INFO:
            return UseInfoInitialState;
        case GET_USE_INFO_SUCCESS:
            return {
                data: action.payload,
            };
        case UPDATE_USE_INFO_SUCCESS:
            return {
                data: action.payload
            };
        default:
            return state;
    }
}