import Header from "@/components/header";
import { FINALIZED } from "@/constans/step";
import { StepComponent } from "@/ui";
import { Context } from "@/pages";
import { useContext } from "react";


export default function Content() {
    const { stateStep } = useContext(Context);
    const showHeader: boolean = stateStep.type !== FINALIZED;

    return (
        <div className={"content-container"}>
            {showHeader && <Header type={stateStep.type} />}
            {StepComponent(stateStep.type)}
        </div>
    )
}