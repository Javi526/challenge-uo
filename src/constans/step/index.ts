import { Step_Interface } from "@/interface/step";

export const STEP_INIT: string = "YOUR INFO";
export const DATA_STEP_INIT: string = "DATA_STEP_INIT";
export const DATA_STEP_SUCCESS: string = "DATA_STEP_SUCCESS";
export const YOUR_INFO: string = "YOUR INFO";
export const SELECT_PLAN: string = "SELECT PLAN";
export const ADD_ONS: string = "ADD-ONS";
export const SUMMARY: string = "SUMMARY";
export const FINALIZED: string = "FINALIZED";

export const StepData: Step_Interface[] = [
    { id: 1, type: YOUR_INFO },
    { id: 2, type: SELECT_PLAN },
    { id: 3, type: ADD_ONS },
    { id: 4, type: SUMMARY }
];