import Finalized from "@/components/finalized";
import {ADD_ONS, FINALIZED, SELECT_PLAN, SUMMARY, YOUR_INFO} from "@/constans/step";

const Components = [
    { type: YOUR_INFO, component: <Pe /> },
    { type: SELECT_PLAN },
    { type: ADD_ONS },
    { type: SUMMARY },
    { type: FINALIZED,  }
]

{/* <Header value={1}/> */}
{/* <PersonalInfoForm/> */}
{/*<Plan/>*/}
{ /* <AddOns/> */}
{ /*<Summary/> */}
<Finalized/>