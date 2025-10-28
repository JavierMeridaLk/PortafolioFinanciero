import { CaMoney, FlReceiptMoney, McPigMoneyLine, BxMoneyWithdraw, AnOutlinedTeam } from "@kalimahapps/vue-icons";
import { BxMoneyWithdraw, CaMoney, McPigMoneyLine, FlReceiptMoney } from "@kalimahapps/vue-icons";

import { AkDashboard, AkInfo } from "@kalimahapps/vue-icons";
import {
    CoBrandBitcoin,   
    SiEuro,           
    SiYen,            
    SiCocaCola,       
    SiAmazon,        
    FaOilCan,         
    SiMicrosoft,     
    SiApple,         
    BsGoogle,        
    SiWalmart 
} from "@kalimahapps/vue-icons";


    export const indexData = {
    topCards: [
        {
        icon: BxMoneyWithdraw,
        title: 'Capital Inicial',
        value: 1_000_000,
        class: 'text-green-500',
        },
        {
        icon: CaMoney,
        title: 'Capital Utilizado',
        value: 999_980.50,
        class: 'text-red-500',
        },
        {
        icon: McPigMoneyLine,
        title: 'Capital Restante',
        value: 19.50,
        class: 'text-amber-500',
        },
        {
        icon: FlReceiptMoney,
        title: 'Ganancia Total',
        value:  49_072.61,
        class: 'text-slate-200',
        },
    ]
    }

    export const menuItems = [
    {
        name: "General",
        separator: true,
        icon: null,
        class: "!text-indigo-500 !bg-indigo-950",
    },
    {
        name: "Vista General",
        path: "/",
        icon: AkDashboard,
        class: "!text-indigo-500 !bg-indigo-950",
    },
    {
        name: "Equipo de Trabajo",
        path: "/team",
        icon: AnOutlinedTeam,
        class: "!text-indigo-500 !bg-indigo-950",
    },
    {
        name: "Información",
        path: "/info",
        icon: AkInfo,
        class: "!text-teal-500 !bg-teal-950",
    },
    {
        name: "Portafolio de Inversiones",
        separator: true,
        icon: null,
        class: "!text-indigo-500 !bg-indigo-950",
    },
    {
        name: "Monedas",
        separator: true,
        icon: null,
        class: "!text-indigo-500 !bg-indigo-950",
    },
    {
        name: "Euro",
        path: "/stock/euro",
        icon: SiEuro,
        class: "!text-indigo-500 !bg-blue-950",
    },
    {
        name: "Yen",
        path: "/stock/yen",
        icon: SiYen,
        class: "!text-yellow-500 !bg-red-950",
    },
    {
        name: "Recursos",
        separator: true,
        icon: null,
        class: "!text-indigo-500 !bg-indigo-950",
    },
    {
        name: "Oro",
        path: "/stock/oro",
        icon: CoBrandBitcoin,
        class: "!text-indigo-500 !bg-yellow-950",
    },
    {
        name: "Petróleo",
        path: "/stock/petroleo",
        icon: FaOilCan,
        class: "!text-indigo-500 !bg-gray-950",
    },
    {
        name: "Empresas",
        separator: true,
        icon: null,
        class: "!text-indigo-500 !bg-indigo-950",
    },
    {
        name: "The Coca-Cola Company",
        path: "/stock/coca",
        icon: SiCocaCola,
        class: "!text-blue-500 !bg-red-950",
    },
    {
        name: "Amazon Inc",
        path: "/stock/amazon",
        icon: SiAmazon,
        class: "!text-amber-500 !bg-amber-950",
    },
    {
        name: "Microsoft Corporation",
        path: "/stock/microsoft",
        icon: SiMicrosoft,
        class: "!text-blue-500 !bg-blue-950",
    },
    {
        name: "Apple Inc",
        path: "/stock/apple",
        icon: SiApple,
        class: "!text-green-500 !bg-slate-900",
    },
    {
        name: "Google LLC",
        path: "/stock/google",
        icon: BsGoogle,
        class: "!text-green-500 !bg-green-950",
    },
    {
        name: "Walmart Inc",
        path: "/stock/walmart",
        icon: SiWalmart,
        class: "!text-red-500 !bg-blue-950",
    },
];