import Slide from "@/components/slide";
import Layout from "@/components/layout";
import Content from "@/components/content";
import BackgroundMobile from "@/components/common/mobile";
import { createContext, useReducer } from "react";
import { StepReducer, StepInitialState } from "@/reducers/step";
import { UseInfoReducer , UseInfoInitialState} from "@/reducers/useInfo";

export const Context = createContext<any>(null);

export default function Home() {
    const [stateStep, dispatchStep] = useReducer(StepReducer, StepInitialState);
    const [stateUseInfo, dispatchUseInfo] = useReducer(UseInfoReducer, UseInfoInitialState);

    const reducers = {
        stateStep,
        dispatchStep,
        stateUseInfo,
        dispatchUseInfo
    };

  return (
      <Context.Provider value={reducers}>
      <main className={"common-container"}>
        <BackgroundMobile />
        <Layout>
          <Slide />
          <Content />
        </Layout>
      </main>
      </Context.Provider>
  )
}
