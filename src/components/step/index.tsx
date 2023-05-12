import { FINALIZED, StepData } from "@/constans/step";
import { Step_Interface } from "@/interface/step";

type Props = {
    type: string
};

export default function Step({ type } : Props) {

    const handleChangeClassName = (value: string, id: number): string => {
        if (value === type || type === FINALIZED && id === StepData.length) return "slider-circle-active";
        return "slider-circle";
    };

    return (
        <div className={"slider-step-container"}>
            {StepData.map((data : Step_Interface) => (
                <div className={"slider-step-content"} key={data.id}>
                    <div className={handleChangeClassName(data.type, data.id)}>{data.id}</div>
                    <div className={"slider-step-item"}>
                        <p className={"slider-step-item-p1"}>STEP {data.id}</p>
                        <p className={"slider-step-item-p2"}>{data.type}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}