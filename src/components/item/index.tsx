import { Item_Interface } from "@/interface/item";
import { ChangeEvent } from "react";

type Props = {
   data: Item_Interface,
   action: (event:ChangeEvent<HTMLInputElement>, data: Item_Interface) => void,
   checked: boolean
}

export default function Item({ data, action, checked }: Props) {

    const handleChangeClassName = (): string => {
        if (checked) return "item-active-container";
        return "item-container";
    };

    return (
       <div className={handleChangeClassName()}>
         <div className={"item-content"}>
           <input
               className={"item-check"}
               name={data.title}
               type={"checkbox"}
               onChange={(event:ChangeEvent<HTMLInputElement>) => action(event, data)}
               checked={checked}
           />
           <div className={"item-text"}>
               <p className={"item-text-p1"}>{data.title}</p>
               <p className={"item-text-p2"}>{data.subtitle}</p>
           </div>
         </div>
         <div className={"item-price-container"}>
           <p className={"item-price-p"}>{data.price}</p>
         </div>
       </div>
    )
}