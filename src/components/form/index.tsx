import * as yup from 'yup';
import { useFormik } from "formik";
import { ChangeEvent, useContext, KeyboardEvent, useEffect, useCallback } from "react";
import { Context } from "@/pages";
import { DATA_STEP_SUCCESS, SELECT_PLAN } from "@/constans/step";
import { GetUseInfo, UpdateUseInfo } from "@/hooks/useInfo";
import { DATA_FORM, UPDATE_USE_INFO_SUCCESS } from "@/constans/useInfo";

type PropsFormSchema = {
    name: string
    email: string,
    phone: string,
};

const initialValues: PropsFormSchema = {
    name: "",
    email: "",
    phone: ""
};

type Type_Value = 'name' | 'email' | 'phone';

const DataFormSchema = yup.object().shape({
    name: yup.string().required('This field is required'),
    email: yup.string().email("The email you entered is not correct").required('This field is required'),
    phone: yup.string().required('This field is required'),
});

export default function PersonalInfoForm() {

    const { dispatchStep, stateUseInfo, dispatchUseInfo } = useContext(Context);

    const useInfo = GetUseInfo(stateUseInfo.data);

    const handleOnSubmit = (values: PropsFormSchema): void => {
        dispatchStep({ type: DATA_STEP_SUCCESS, payload: SELECT_PLAN });
        UpdateUseInfo(DATA_FORM, UPDATE_USE_INFO_SUCCESS, values, useInfo, dispatchUseInfo);
    };

    const onKeyPress = (event: KeyboardEvent<HTMLInputElement>): void => {
        if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
        }
    };

    const { setFieldValue, touched, errors, handleSubmit, setValues, values } = useFormik({
        initialValues,
        onSubmit: handleOnSubmit,
        validationSchema: DataFormSchema,
    });

    const handleChangeUpdateForm = useCallback(() => {
        if (Object.values(useInfo).length) {
            setValues(useInfo[DATA_FORM]);
        }
    }, []);

    useEffect(() => {
        handleChangeUpdateForm();
    }, [handleChangeUpdateForm])

    const handleChangeClassName = (value: Type_Value): string => {
        if (touched[value] && errors[value]) return "field-error";
        return "field";
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className={"form-item"}>
                <div className={"form-item-label-and-error-message"}>
                    <label className={"label"}>Name</label>
                    {touched.name && errors.name && <p className={"error"}>{errors.name}</p>}
                </div>
                <input
                    className={handleChangeClassName("name")}
                    type={"text"}
                    name={"name"}
                    value={values.name}
                    placeholder={"Stephen King"}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>  setFieldValue("name", e.target.value)}
                />
            </div>
            <div className={"form-item"}>
                <div className={"form-item-label-and-error-message"}>
                    <label className={"label"}>Email Address</label>
                    {touched.email && errors.email && <p className={"error"}>{errors.email}</p>}
                </div>
                <input
                    className={handleChangeClassName("email")}
                    type={"email"}
                    name={"email"}
                    value={values.email}
                    placeholder={"stephenking@lorem.com"}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>  setFieldValue("email", e.target.value)}
                />
            </div>
            <div className={"form-item"}>
                <div className={"form-item-label-and-error-message"}>
                    <label className={"label"}>Phone Number</label>
                    {touched.phone && errors.phone && <p className={"error"}>{errors.phone}</p>}
                </div>
                <input
                    className={handleChangeClassName("phone")}
                    type={"text"}
                    name={"phone"}
                    value={values.phone}
                    onKeyPress={onKeyPress}
                    placeholder={"+1 234 567 890"}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>  setFieldValue("phone", e.target.value)}
                />
            </div>
            <div className={"field-button-next-container"}>
             <div className={"field-button-next-content"}>
                <button className={"button-next"} type={"submit"}>Next Step</button>
             </div>
            </div>
        </form>
    )
}