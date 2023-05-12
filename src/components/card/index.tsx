import { Card_Interface } from "@/interface/card";
import Image from "next/image";

type Props = {
    data: Card_Interface,
    item: any,
    action: (data: Card_Interface) => void
};

export default function Card({ data, item, action } : Props) {

    const handleChangeClassName = (id: number): string => {
        if (id === item.id) return "card-container-active";
        return "card-container";
    };

    return (
        <div className={handleChangeClassName(data.id)} onClick={() => action(data)}>
            <div className={"card-content-img"}>
              <Image src={data.img} alt={`img-${data.title}`} />
            </div>
            <div className={"card-content-text"}>
              <p className={"card-content-text-p1"}>{data.title}</p>
              <p className={"card-content-text-p2"}>{data.price}</p>
              <p className={"card-content-text-p3"}>{data.time}</p>
            </div>
        </div>
    )
}