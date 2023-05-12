import { ADD_ONS, FINALIZED, SELECT_PLAN, SUMMARY, YOUR_INFO } from "@/constans/step";
import PersonalInfoForm from "@/components/form";
import Plan from "@/components/plan";
import AddOns from "@/components/add-ons";
import Summary from "@/components/summary";
import Finalized from "@/components/finalized";
import {useContext} from "react";
import {Context} from "@/pages";

type Props = {
    type: string,
    component: JSX.Element
}

const Components: Props[] = [
    { type: YOUR_INFO, component: <PersonalInfoForm /> },
    { type: SELECT_PLAN, component: <Plan /> },
    { type: ADD_ONS, component: <AddOns /> },
    { type: SUMMARY, component: <Summary /> },
    { type: FINALIZED, component: <Finalized /> }
];

export const StepComponent = (type: string) => {
        const value: Props[] = Components.filter((data: Props) => data.type === type);
        if (value.length) return value[0].component;
        return null;
};

export const ResponsiveBackground = () => {
    const { stateStep } = useContext(Context);
    if (stateStep.type !== FINALIZED) return <div className={"background-responsive"} />
    return null
}