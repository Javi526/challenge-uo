import Image from "next/image";
import backgroundMobile from "@/assets/images/bg-sidebar-mobile.svg";

export default function BackgroundMobile() {
    return (
        <div className={"background-mobile"}>
            <Image src={backgroundMobile} alt={"backgroundMobile"} />
        </div>
    )
}