import { headerData } from "@/constans/header";
import { Header_Interface } from "@/interface/header";

type Props = {
    type: string
};

export default function Header({ type }: Props) {

    const handleChangeText = (type: string) : Header_Interface => {
       const value: Header_Interface[] = headerData.filter((data: Header_Interface) => data.type === type);
       return value[0];
    };

    return (
        <div className={"header-container"}>
            <p className={"header-title"}>{handleChangeText(type)?.title}</p>
            <p className={"header-subtitle"}>{handleChangeText(type)?.subTitle}</p>
        </div>
    )
}