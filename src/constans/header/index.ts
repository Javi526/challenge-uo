import { Header_Interface } from "@/interface/header";
import { ADD_ONS, SELECT_PLAN, SUMMARY, YOUR_INFO } from "@/constans/step";

export const headerData: Header_Interface[] = [
    { id: 1, title: "Personal info", subTitle: "Please provide your name, email address, and phone number.", type: YOUR_INFO },
    { id: 2, title: "Select your plan", subTitle: "You have the option of monthly or yearly billing.", type: SELECT_PLAN },
    { id: 3, title: "Pick add-ons", subTitle: "Add-ons help enhance your gaming experience", type: ADD_ONS },
    { id: 4, title: "Finishing up", subTitle: "Double-check everything looks OK before confirming", type: SUMMARY },
];