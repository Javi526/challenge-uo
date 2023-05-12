import Card from "@/components/card";
import { cardItem } from "@/constans/card";
import { Card_Interface } from "@/interface/card";
import { Fragment, useContext, useEffect, useState } from "react";
import { Context } from "@/pages";
import { ADD_ONS, DATA_STEP_INIT, DATA_STEP_SUCCESS } from "@/constans/step";
import { GetUseInfo, UpdateUseInfo } from "@/hooks/useInfo";
import { DATA_PLAN, UPDATE_USE_INFO_SUCCESS} from "@/constans/useInfo";

export default function Plan() {
    const [item, setItem] = useState({});

    const { dispatchStep, stateUseInfo, dispatchUseInfo } = useContext(Context);

    const useInfo = GetUseInfo(stateUseInfo.data);

    const handleChangeSelectInit = (): void => {
        if (useInfo[DATA_PLAN]) {
            setItem(useInfo[DATA_PLAN]);
        } else {
            setItem(cardItem[0]);
        }
    };

    useEffect(() => {
        handleChangeSelectInit();
    }, []);


    const handleOnSubmit = (): void => {
        dispatchStep({ type: DATA_STEP_SUCCESS, payload: ADD_ONS });
        UpdateUseInfo(DATA_PLAN, UPDATE_USE_INFO_SUCCESS, item, useInfo, dispatchUseInfo);
    };

    const handleChangeSelected = (data: Card_Interface) => {
        setItem(data);
    };

    return (
        <Fragment>
         <div className={"plan-container"}>
             {cardItem.map((p: Card_Interface) => (
                <Fragment key={p.id}>
                    <Card data={p} item={item} action={handleChangeSelected} />
                </Fragment>
             ))}
          </div>
            <div className={"plan-button-container"}>
                <button className={"button-back"} onClick={() => dispatchStep({ type: DATA_STEP_INIT })}>Go Back</button>
                <button className={"button-next"} onClick={handleOnSubmit}>Next Step</button>
            </div>
        </Fragment>
    )
}