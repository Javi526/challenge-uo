import Image from "next/image";
import IconThank from "@/assets/images/icon-thank-you.svg";
import { text_thank } from "@/constans/finish";

export default function Finalized() {
    return (
        <div className={"finalized-container"}>
            <div className={"finalized-image-container"}>
                <Image className={"finalized-image"} src={IconThank} alt={"image-finish"} />
            </div>
            <div className={"finalized-text-container"}>
                <p className={"finalized-text-p1"}>Thank you!</p>
              <p className={"finalized-text-p2"}>{text_thank}</p>
            </div>
        </div>
    )
}