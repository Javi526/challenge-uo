import { ReactNode } from "react";
import { ResponsiveBackground } from "@/ui";

type Props = {
    children: ReactNode
};

export default function Layout({ children }: Props) {
    return (
        <div className={"layout-container"}>
            <div className={"layout-content"}>
                {children}
            </div>
            <ResponsiveBackground />
        </div>
    )
}