import BackgroundBlue from "@/assets/images/bg-sidebar-desktop.svg";
import Image from "next/image";
import Step from "@/components/step";
import { useContext } from "react";
import { Context } from "@/pages";

export default function Slide() {
    const { stateStep } = useContext(Context);

    return (
        <div className={"slider-container"}>
            <Step type={stateStep.type} />
            <Image className={"slide-image"} src={BackgroundBlue} alt={"Slide-BackgroundBlue-Desktop"} />
        </div>
    )
}
