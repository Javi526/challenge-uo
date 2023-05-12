import { action } from "@/interface/action";
import { DATA_STEP_INIT, DATA_STEP_SUCCESS, STEP_INIT } from "@/constans/step";

type Props = {
    type: string
}

export const StepInitialState: Props = {
    type: STEP_INIT,
};

export const StepReducer = (state: Props, action: action): Props => {
    switch (action.type) {
        case DATA_STEP_INIT:
            return StepInitialState;
        case DATA_STEP_SUCCESS:
            return {
                type: action.payload,
            };
        default:
            return state;
    }
};