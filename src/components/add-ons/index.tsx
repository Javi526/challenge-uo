import Item from "@/components/item";
import { itemData } from "@/constans/item";
import { Item_Interface } from "@/interface/item";
import { ChangeEvent, Fragment, useContext, useEffect, useState } from "react";
import { Context } from "@/pages";
import { DATA_STEP_SUCCESS, SELECT_PLAN, SUMMARY } from "@/constans/step";
import { GetUseInfo, UpdateUseInfo } from "@/hooks/useInfo";
import { DATA_ADD_ONS, UPDATE_USE_INFO_SUCCESS } from "@/constans/useInfo";

export default function AddOns() {
    const [checked, setCheck] = useState({});
    const [dataInfo, setDataInfo] = useState([]);

    const { dispatchStep, stateUseInfo, dispatchUseInfo } = useContext(Context);

    const useInfo = GetUseInfo(stateUseInfo.data);

    const handleChangeUpdateChecked = () => {
        if (useInfo[DATA_ADD_ONS]?.length) {
            const newObj_ = useInfo.DATA_ADD_ONS.reduce((acumulador : any, objeto : Item_Interface) => {
                acumulador[objeto.id] = objeto.type;
                return acumulador;
            }, {});
            setCheck(newObj_);
            setDataInfo(useInfo.DATA_ADD_ONS);
        }
    };

    useEffect(() => {
        handleChangeUpdateChecked();
    },[]);

    const handleOnSubmit = (): void => {
        const filterData: Item_Interface[] = dataInfo.filter((data: Item_Interface) => data.type);
        dispatchStep({ type: DATA_STEP_SUCCESS, payload: SUMMARY });
        UpdateUseInfo(DATA_ADD_ONS, UPDATE_USE_INFO_SUCCESS, filterData, useInfo, dispatchUseInfo);
    };

    const handleChangeDisabled = (): boolean => {
        if (Object.values(checked).length) {
            if (Object.values(checked).includes(true)) return !Object.values(checked).includes(true);
        }
        return true;
    }

    const classNameDisabled: string = handleChangeDisabled() ? "button-next-disabled" : "button-next";

    const handleChangeSelectData = (data: Item_Interface, type: boolean): void => {
        const array: any = dataInfo;
        const filterData = array.filter((p: any): boolean => p.id === data.id);
        if (filterData.length) {
            filterData[0].type = type;
        } else {
            array.push({ ...data, type });
        }
        setDataInfo(array);
    };

    const handleChangeMultiSelected = (e: ChangeEvent<HTMLInputElement>, data: Item_Interface): void => {
        handleChangeSelectData(data, e.target.checked);
        setCheck(({
           ...checked,
           [data.id]: e.target.checked
        }));

    };

    const handleChangeValueChecked = (id: number): boolean => {
        const data: any = checked;
        if (data[id]) return data[id];
        return false;
    };

    return (
        <div className={"addOns-container"}>
            {itemData.map((p: Item_Interface) => (
                <Fragment key={p.id}>
                    <Item data={p} action={handleChangeMultiSelected} checked={handleChangeValueChecked(p.id)} />
                </Fragment>
            ))}
            <div className={"addOns-button-container"}>
                <button className={"button-back"} onClick={() => dispatchStep({ type: DATA_STEP_SUCCESS, payload: SELECT_PLAN })}>Go Back</button>
                <button className={classNameDisabled} onClick={handleOnSubmit} disabled={handleChangeDisabled()}>Next Step</button>
            </div>
        </div>
    )
}