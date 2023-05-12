import { useContext } from "react";
import { Context } from "@/pages";
import { ADD_ONS, DATA_STEP_SUCCESS, FINALIZED } from "@/constans/step";
import { GetUseInfo } from "@/hooks/useInfo";
import { DATA_ADD_ONS, DATA_PLAN } from "@/constans/useInfo";
import { Item_Interface } from "@/interface/item";
import { PriceNumber } from "@/utils";

export default function Summary() {

    const { stateUseInfo, dispatchStep } = useContext(Context);

    const useInfo = GetUseInfo(stateUseInfo.data);

    const handleOnSubmit = (): void => {
        dispatchStep({ type: DATA_STEP_SUCCESS, payload: FINALIZED });
    };

    const handleChangeSumTotal = () : number => {
        const plan : number = PriceNumber(useInfo[DATA_PLAN].price);
        const add_ons = useInfo[DATA_ADD_ONS].map((data: Item_Interface) => PriceNumber(data.price)).reduce((prev: string, curr: string) => {
            return prev + curr
        }, 0);
        return plan + add_ons;
    };

    return (
        <div className={"summary-container"}>
         <div className={"summary-content"}>
            <div className={"summary-text-container"}>
              <p className={"summary-title"}>{useInfo[DATA_PLAN].title} (Yearly)</p>
              <p className={"summary-price"}>{useInfo[DATA_PLAN].price}</p>
            </div>
            <div className={"summary-line"} />
             {useInfo[DATA_ADD_ONS].map((data: Item_Interface) => (
                 <div className={"summary-service-container"} key={data.id}>
                     <p className={"summary-service-text"}>{data.title}</p>
                     <p className={"summary-service-price"}>{data.price}</p>
                 </div>
             ))}
         </div>
         <div className={"summary-total-container"}>
            <p className={"summary-service-text"}>Total (per year)</p>
            <p className={"summary-total-price"}>${handleChangeSumTotal()}/yr</p>
         </div>
            <div className={"summary-button-container"}>
                <button className={"button-back"} onClick={() => dispatchStep({ type: DATA_STEP_SUCCESS, payload: ADD_ONS })}>Go Back</button>
                <button className={"button-confirm"} onClick={handleOnSubmit}>Confirm</button>
            </div>
        </div>
    )
}