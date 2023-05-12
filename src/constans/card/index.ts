import IconArcade from "@/assets/images/icon-arcade.svg";
import IconAdvance from "@/assets/images/icon-advanced.svg";
import IconPro from "@/assets/images/icon-pro.svg";
import { Card_Interface } from "@/interface/card";

export const cardItem: Card_Interface[] = [
    { id: 1, img: IconArcade, title: "Arcade", price: "$90/yr", time: "2 months free" },
    { id: 2, img: IconAdvance, title: "Advanced", price: "$120/yr", time: "2 months free" },
    { id: 3, img: IconPro, title: "Pro", price: "$150/yr", time: "2 months free" }
];