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

export const stocksIdInfo = {

    euro: {
        name: "Euro",
        code: "EUR",
        icon: SiEuro,
        
        cards: [
        {
            icon: LaMoneyBillWaveSolid,
            title: "Costo Inicial",
            value: 0.00,
            class: "text-green-500",
        },
        {
            icon: LaMoneyBillWaveSolid,
            title: "Costo Final",
            value: 0.00,
            class: "text-red-500",
        },
        {
            icon: CaPortfolio,
            title: "Acciones Compradas",
            value: 0.00,
            class: "text-amber-500",
        },
        {
            icon: FlFilledMoneyHand,
            title: "Inversión Inicial",
            value: 20_690.0,
            class: "text-amber-600",
        },
        {
            icon: FlFilledMoneyHand,
            title: "Inversión Final",
            value: 0.00,
            class: "text-blue-400",
        },
        {
            icon: HeOutlineMoneyBag,
            title: "Ganancia",
            value: 0.00,
            class: "text-slate-100",
        },
        ],
        history: [
        { open: 20.69, low: 20.69, high: 20.10, close: 20.10, time: 1723686030 },
        { open: 20.10, low: 20.10, high: 20.13, close: 20.13, time: 1724290830 },
        { open: 20.13, low: 20.13, high: 19.40, close: 19.40, time: 1724895630 },
        { open: 19.40, low: 19.40, high: 19.36, close: 19.36, time: 1725500430 },
        { open: 19.36, low: 19.36, high: 21.14, close: 21.14, time: 1726105230 },
        { open: 21.14, low: 21.14, high: 23.92, close: 23.92, time: 1726710030 },
        { open: 23.92, low: 23.92, high: 22.26, close: 22.26, time: 1727314830 },
        { open: 22.26, low: 22.26, high: 23.22, close: 23.22, time: 1727919630 },
        { open: 23.22, low: 23.22, high: 22.44, close: 22.44, time: 1728524430 },
        { open: 22.44, low: 22.44, high: 22.34, close: 22.34, time: 1729129230 },
        { open: 22.34, low: 22.34, high: 21.52, close: 21.52, time: 1729734030 },
        { open: 21.52, low: 21.52, high: 21.52, close: 21.52, time: 1730338830 }
        ]
        ,
        class: "text-indigo-500",
        description:
        "El Euro es una de las monedas más estables del mundo. Invertir en EUR ayuda a proteger tu portafolio frente a la volatilidad del dólar y proporciona diversificación geográfica en divisas.",
    },
    yen: {
        name: "Yen",
        code: "JPY",
        icon: SiYen,
        
        cards: [
        {
            icon: LaMoneyBillWaveSolid,
            title: "Costo Inicial",
            value: 0.00,
            class: "text-green-500",
        },
        {
            icon: LaMoneyBillWaveSolid,
            title: "Costo Final",
            value: 0.00,
            class: "text-red-500",
        },
        {
            icon: CaPortfolio,
            title: "Acciones Compradas",
            value: 0.00,
            class: "text-amber-500",
        },
        {
            icon: FlFilledMoneyHand,
            title: "Inversión Inicial",
            value: 20_690.0,
            class: "text-amber-600",
        },
        {
            icon: FlFilledMoneyHand,
            title: "Inversión Final",
            value: 0.00,
            class: "text-blue-400",
        },
        {
            icon: HeOutlineMoneyBag,
            title: "Ganancia",
            value: 0.00,
            class: "text-slate-100",
        },
        ],
        history: [
        { open: 20.69, low: 20.69, high: 20.10, close: 20.10, time: 1723686030 },
        { open: 20.10, low: 20.10, high: 20.13, close: 20.13, time: 1724290830 },
        { open: 20.13, low: 20.13, high: 19.40, close: 19.40, time: 1724895630 },
        { open: 19.40, low: 19.40, high: 19.36, close: 19.36, time: 1725500430 },
        { open: 19.36, low: 19.36, high: 21.14, close: 21.14, time: 1726105230 },
        { open: 21.14, low: 21.14, high: 23.92, close: 23.92, time: 1726710030 },
        { open: 23.92, low: 23.92, high: 22.26, close: 22.26, time: 1727314830 },
        { open: 22.26, low: 22.26, high: 23.22, close: 23.22, time: 1727919630 },
        { open: 23.22, low: 23.22, high: 22.44, close: 22.44, time: 1728524430 },
        { open: 22.44, low: 22.44, high: 22.34, close: 22.34, time: 1729129230 },
        { open: 22.34, low: 22.34, high: 21.52, close: 21.52, time: 1729734030 },
        { open: 21.52, low: 21.52, high: 21.52, close: 21.52, time: 1730338830 }
        ]
        ,
        class: "text-indigo-500",
        description:
        "El Yen es una moneda de refugio seguro en tiempos de incertidumbre económica global. Invertir en JPY ofrece estabilidad y reduce riesgo cambiario frente a movimientos bruscos del mercado.",
    },
    oro: {
        name: "Oro",
        code: "XAU",
        icon: CoBrandBitcoin,
        
        cards: [
        {
            icon: LaMoneyBillWaveSolid,
            title: "Costo Inicial",
            value: 0.00,
            class: "text-green-500",
        },
        {
            icon: LaMoneyBillWaveSolid,
            title: "Costo Final",
            value: 0.00,
            class: "text-red-500",
        },
        {
            icon: CaPortfolio,
            title: "Acciones Compradas",
            value: 0.00,
            class: "text-amber-500",
        },
        {
            icon: FlFilledMoneyHand,
            title: "Inversión Inicial",
            value: 20_690.0,
            class: "text-amber-600",
        },
        {
            icon: FlFilledMoneyHand,
            title: "Inversión Final",
            value: 0.00,
            class: "text-blue-400",
        },
        {
            icon: HeOutlineMoneyBag,
            title: "Ganancia",
            value: 0.00,
            class: "text-slate-100",
        },
        ],
        history: [
        { open: 20.69, low: 20.69, high: 20.10, close: 20.10, time: 1723686030 },
        { open: 20.10, low: 20.10, high: 20.13, close: 20.13, time: 1724290830 },
        { open: 20.13, low: 20.13, high: 19.40, close: 19.40, time: 1724895630 },
        { open: 19.40, low: 19.40, high: 19.36, close: 19.36, time: 1725500430 },
        { open: 19.36, low: 19.36, high: 21.14, close: 21.14, time: 1726105230 },
        { open: 21.14, low: 21.14, high: 23.92, close: 23.92, time: 1726710030 },
        { open: 23.92, low: 23.92, high: 22.26, close: 22.26, time: 1727314830 },
        { open: 22.26, low: 22.26, high: 23.22, close: 23.22, time: 1727919630 },
        { open: 23.22, low: 23.22, high: 22.44, close: 22.44, time: 1728524430 },
        { open: 22.44, low: 22.44, high: 22.34, close: 22.34, time: 1729129230 },
        { open: 22.34, low: 22.34, high: 21.52, close: 21.52, time: 1729734030 },
        { open: 21.52, low: 21.52, high: 21.52, close: 21.52, time: 1730338830 }
        ]
        ,
        class: "text-indigo-500",
        description:
        "El oro es un activo refugio histórico. Sirve para proteger el capital contra inflación, crisis financieras o devaluación de monedas, y aporta estabilidad al portafolio.",
    },
    petroleo: {
        name: "Petróleo",
        code: "OIL",
        icon: FaOilCan,
        
        cards: [
        {
            icon: LaMoneyBillWaveSolid,
            title: "Costo Inicial",
            value: 0.00,
            class: "text-green-500",
        },
        {
            icon: LaMoneyBillWaveSolid,
            title: "Costo Final",
            value: 0.00,
            class: "text-red-500",
        },
        {
            icon: CaPortfolio,
            title: "Acciones Compradas",
            value: 0.00,
            class: "text-amber-500",
        },
        {
            icon: FlFilledMoneyHand,
            title: "Inversión Inicial",
            value: 20_690.0,
            class: "text-amber-600",
        },
        {
            icon: FlFilledMoneyHand,
            title: "Inversión Final",
            value: 0.00,
            class: "text-blue-400",
        },
        {
            icon: HeOutlineMoneyBag,
            title: "Ganancia",
            value: 0.00,
            class: "text-slate-100",
        },
        ],
        history: [
        { open: 20.69, low: 20.69, high: 20.10, close: 20.10, time: 1723686030 },
        { open: 20.10, low: 20.10, high: 20.13, close: 20.13, time: 1724290830 },
        { open: 20.13, low: 20.13, high: 19.40, close: 19.40, time: 1724895630 },
        { open: 19.40, low: 19.40, high: 19.36, close: 19.36, time: 1725500430 },
        { open: 19.36, low: 19.36, high: 21.14, close: 21.14, time: 1726105230 },
        { open: 21.14, low: 21.14, high: 23.92, close: 23.92, time: 1726710030 },
        { open: 23.92, low: 23.92, high: 22.26, close: 22.26, time: 1727314830 },
        { open: 22.26, low: 22.26, high: 23.22, close: 23.22, time: 1727919630 },
        { open: 23.22, low: 23.22, high: 22.44, close: 22.44, time: 1728524430 },
        { open: 22.44, low: 22.44, high: 22.34, close: 22.34, time: 1729129230 },
        { open: 22.34, low: 22.34, high: 21.52, close: 21.52, time: 1729734030 },
        { open: 21.52, low: 21.52, high: 21.52, close: 21.52, time: 1730338830 }
        ]
        ,
        class: "text-indigo-500",
        description:
        "La inversión en petróleo permite aprovechar la demanda energética global y los ciclos de precios de commodities. Es un activo estratégico que complementa inversiones en monedas y acciones.",
    },
    coca: {
        name: "The Coca-Cola Company",
        code: "KO",
        icon: SiCocaCola,
        
        cards: [
        {
            icon: LaMoneyBillWaveSolid,
            title: "Costo Inicial",
            value: 0.00,
            class: "text-green-500",
        },
        {
            icon: LaMoneyBillWaveSolid,
            title: "Costo Final",
            value: 0.00,
            class: "text-red-500",
        },
        {
            icon: CaPortfolio,
            title: "Acciones Compradas",
            value: 0.00,
            class: "text-amber-500",
        },
        {
            icon: FlFilledMoneyHand,
            title: "Inversión Inicial",
            value: 20_690.0,
            class: "text-amber-600",
        },
        {
            icon: FlFilledMoneyHand,
            title: "Inversión Final",
            value: 0.00,
            class: "text-blue-400",
        },
        {
            icon: HeOutlineMoneyBag,
            title: "Ganancia",
            value: 0.00,
            class: "text-slate-100",
        },
        ],
        history: [
        { open: 20.69, low: 20.69, high: 20.10, close: 20.10, time: 1723686030 },
        { open: 20.10, low: 20.10, high: 20.13, close: 20.13, time: 1724290830 },
        { open: 20.13, low: 20.13, high: 19.40, close: 19.40, time: 1724895630 },
        { open: 19.40, low: 19.40, high: 19.36, close: 19.36, time: 1725500430 },
        { open: 19.36, low: 19.36, high: 21.14, close: 21.14, time: 1726105230 },
        { open: 21.14, low: 21.14, high: 23.92, close: 23.92, time: 1726710030 },
        { open: 23.92, low: 23.92, high: 22.26, close: 22.26, time: 1727314830 },
        { open: 22.26, low: 22.26, high: 23.22, close: 23.22, time: 1727919630 },
        { open: 23.22, low: 23.22, high: 22.44, close: 22.44, time: 1728524430 },
        { open: 22.44, low: 22.44, high: 22.34, close: 22.34, time: 1729129230 },
        { open: 22.34, low: 22.34, high: 21.52, close: 21.52, time: 1729734030 },
        { open: 21.52, low: 21.52, high: 21.52, close: 21.52, time: 1730338830 }
        ]
        ,
        class: "text-indigo-500",
        description:
        "Coca-Cola es una empresa de consumo masivo con ingresos estables y presencia global. Invertir aquí aporta seguridad y flujo constante de dividendos.",
    },
    amazon: {
        name: "Amazon Inc",
        code: "AMZN",
        icon: SiAmazon,
        
        cards: [
        {
            icon: LaMoneyBillWaveSolid,
            title: "Costo Inicial",
            value: 0.00,
            class: "text-green-500",
        },
        {
            icon: LaMoneyBillWaveSolid,
            title: "Costo Final",
            value: 0.00,
            class: "text-red-500",
        },
        {
            icon: CaPortfolio,
            title: "Acciones Compradas",
            value: 0.00,
            class: "text-amber-500",
        },
        {
            icon: FlFilledMoneyHand,
            title: "Inversión Inicial",
            value: 20_690.0,
            class: "text-amber-600",
        },
        {
            icon: FlFilledMoneyHand,
            title: "Inversión Final",
            value: 0.00,
            class: "text-blue-400",
        },
        {
            icon: HeOutlineMoneyBag,
            title: "Ganancia",
            value: 0.00,
            class: "text-slate-100",
        },
        ],
        history: [
        { open: 20.69, low: 20.69, high: 20.10, close: 20.10, time: 1723686030 },
        { open: 20.10, low: 20.10, high: 20.13, close: 20.13, time: 1724290830 },
        { open: 20.13, low: 20.13, high: 19.40, close: 19.40, time: 1724895630 },
        { open: 19.40, low: 19.40, high: 19.36, close: 19.36, time: 1725500430 },
        { open: 19.36, low: 19.36, high: 21.14, close: 21.14, time: 1726105230 },
        { open: 21.14, low: 21.14, high: 23.92, close: 23.92, time: 1726710030 },
        { open: 23.92, low: 23.92, high: 22.26, close: 22.26, time: 1727314830 },
        { open: 22.26, low: 22.26, high: 23.22, close: 23.22, time: 1727919630 },
        { open: 23.22, low: 23.22, high: 22.44, close: 22.44, time: 1728524430 },
        { open: 22.44, low: 22.44, high: 22.34, close: 22.34, time: 1729129230 },
        { open: 22.34, low: 22.34, high: 21.52, close: 21.52, time: 1729734030 },
        { open: 21.52, low: 21.52, high: 21.52, close: 21.52, time: 1730338830 }
        ]
        ,
        class: "text-indigo-500",
        description:
        "Amazon es líder en e-commerce y cloud computing. Su crecimiento constante hace que sea atractivo para inversión a largo plazo y diversificación tecnológica.",
    },
    microsoft: {
        name: "Microsoft Corporation",
        code: "MSFT",
        icon: SiMicrosoft,
        
        cards: [
        {
            icon: LaMoneyBillWaveSolid,
            title: "Costo Inicial",
            value: 0.00,
            class: "text-green-500",
        },
        {
            icon: LaMoneyBillWaveSolid,
            title: "Costo Final",
            value: 0.00,
            class: "text-red-500",
        },
        {
            icon: CaPortfolio,
            title: "Acciones Compradas",
            value: 0.00,
            class: "text-amber-500",
        },
        {
            icon: FlFilledMoneyHand,
            title: "Inversión Inicial",
            value: 20_690.0,
            class: "text-amber-600",
        },
        {
            icon: FlFilledMoneyHand,
            title: "Inversión Final",
            value: 0.00,
            class: "text-blue-400",
        },
        {
            icon: HeOutlineMoneyBag,
            title: "Ganancia",
            value: 0.00,
            class: "text-slate-100",
        },
        ],
        history: [
        { open: 20.69, low: 20.69, high: 20.10, close: 20.10, time: 1723686030 },
        { open: 20.10, low: 20.10, high: 20.13, close: 20.13, time: 1724290830 },
        { open: 20.13, low: 20.13, high: 19.40, close: 19.40, time: 1724895630 },
        { open: 19.40, low: 19.40, high: 19.36, close: 19.36, time: 1725500430 },
        { open: 19.36, low: 19.36, high: 21.14, close: 21.14, time: 1726105230 },
        { open: 21.14, low: 21.14, high: 23.92, close: 23.92, time: 1726710030 },
        { open: 23.92, low: 23.92, high: 22.26, close: 22.26, time: 1727314830 },
        { open: 22.26, low: 22.26, high: 23.22, close: 23.22, time: 1727919630 },
        { open: 23.22, low: 23.22, high: 22.44, close: 22.44, time: 1728524430 },
        { open: 22.44, low: 22.44, high: 22.34, close: 22.34, time: 1729129230 },
        { open: 22.34, low: 22.34, high: 21.52, close: 21.52, time: 1729734030 },
        { open: 21.52, low: 21.52, high: 21.52, close: 21.52, time: 1730338830 }
        ]
        ,
        class: "text-indigo-500",
        description:
        "Microsoft combina software, nube y servicios corporativos, ofreciendo estabilidad y alto potencial de crecimiento, con ingresos recurrentes por licencias y servicios en la nube.",
    },
    apple: {
        name: "Apple Inc",
        code: "AAPL",
        icon: SiApple,
        
        cards: [
        {
            icon: LaMoneyBillWaveSolid,
            title: "Costo Inicial",
            value: 0.00,
            class: "text-green-500",
        },
        {
            icon: LaMoneyBillWaveSolid,
            title: "Costo Final",
            value: 0.00,
            class: "text-red-500",
        },
        {
            icon: CaPortfolio,
            title: "Acciones Compradas",
            value: 0.00,
            class: "text-amber-500",
        },
        {
            icon: FlFilledMoneyHand,
            title: "Inversión Inicial",
            value: 20_690.0,
            class: "text-amber-600",
        },
        {
            icon: FlFilledMoneyHand,
            title: "Inversión Final",
            value: 0.00,
            class: "text-blue-400",
        },
        {
            icon: HeOutlineMoneyBag,
            title: "Ganancia",
            value: 0.00,
            class: "text-slate-100",
        },
        ],
        history: [
        { open: 20.69, low: 20.69, high: 20.10, close: 20.10, time: 1723686030 },
        { open: 20.10, low: 20.10, high: 20.13, close: 20.13, time: 1724290830 },
        { open: 20.13, low: 20.13, high: 19.40, close: 19.40, time: 1724895630 },
        { open: 19.40, low: 19.40, high: 19.36, close: 19.36, time: 1725500430 },
        { open: 19.36, low: 19.36, high: 21.14, close: 21.14, time: 1726105230 },
        { open: 21.14, low: 21.14, high: 23.92, close: 23.92, time: 1726710030 },
        { open: 23.92, low: 23.92, high: 22.26, close: 22.26, time: 1727314830 },
        { open: 22.26, low: 22.26, high: 23.22, close: 23.22, time: 1727919630 },
        { open: 23.22, low: 23.22, high: 22.44, close: 22.44, time: 1728524430 },
        { open: 22.44, low: 22.44, high: 22.34, close: 22.34, time: 1729129230 },
        { open: 22.34, low: 22.34, high: 21.52, close: 21.52, time: 1729734030 },
        { open: 21.52, low: 21.52, high: 21.52, close: 21.52, time: 1730338830 }
        ]
        ,
        class: "text-indigo-500",
        description:
        "Apple mantiene un ecosistema sólido y productos con alta demanda global. La inversión aprovecha innovación tecnológica y retornos consistentes gracias a márgenes elevados y lealtad de clientes.",
    },
    google: {
        name: "Google LLC",
        code: "GOOGL",
        icon: SiGoogle,
        
        cards: [
        {
            icon: LaMoneyBillWaveSolid,
            title: "Costo Inicial",
            value: 0.00,
            class: "text-green-500",
        },
        {
            icon: LaMoneyBillWaveSolid,
            title: "Costo Final",
            value: 0.00,
            class: "text-red-500",
        },
        {
            icon: CaPortfolio,
            title: "Acciones Compradas",
            value: 0.00,
            class: "text-amber-500",
        },
        {
            icon: FlFilledMoneyHand,
            title: "Inversión Inicial",
            value: 20_690.0,
            class: "text-amber-600",
        },
        {
            icon: FlFilledMoneyHand,
            title: "Inversión Final",
            value: 0.00,
            class: "text-blue-400",
        },
        {
            icon: HeOutlineMoneyBag,
            title: "Ganancia",
            value: 0.00,
            class: "text-slate-100",
        },
        ],
        history: [
        { open: 20.69, low: 20.69, high: 20.10, close: 20.10, time: 1723686030 },
        { open: 20.10, low: 20.10, high: 20.13, close: 20.13, time: 1724290830 },
        { open: 20.13, low: 20.13, high: 19.40, close: 19.40, time: 1724895630 },
        { open: 19.40, low: 19.40, high: 19.36, close: 19.36, time: 1725500430 },
        { open: 19.36, low: 19.36, high: 21.14, close: 21.14, time: 1726105230 },
        { open: 21.14, low: 21.14, high: 23.92, close: 23.92, time: 1726710030 },
        { open: 23.92, low: 23.92, high: 22.26, close: 22.26, time: 1727314830 },
        { open: 22.26, low: 22.26, high: 23.22, close: 23.22, time: 1727919630 },
        { open: 23.22, low: 23.22, high: 22.44, close: 22.44, time: 1728524430 },
        { open: 22.44, low: 22.44, high: 22.34, close: 22.34, time: 1729129230 },
        { open: 22.34, low: 22.34, high: 21.52, close: 21.52, time: 1729734030 },
        { open: 21.52, low: 21.52, high: 21.52, close: 21.52, time: 1730338830 }
        ]
        ,
        class: "text-indigo-500",
        description:
        "Google es líder en búsquedas, publicidad y servicios en la nube. Invertir en Google permite beneficiarse de la innovación tecnológica y monetización de datos masivos.",
    },
    walmart: {
        name: "Walmart Inc",
        code: "WMT",
        icon: SiWalmart,
        
        cards: [
        {
            icon: LaMoneyBillWaveSolid,
            title: "Costo Inicial",
            value: 0.00,
            class: "text-green-500",
        },
        {
            icon: LaMoneyBillWaveSolid,
            title: "Costo Final",
            value: 0.00,
            class: "text-red-500",
        },
        {
            icon: CaPortfolio,
            title: "Acciones Compradas",
            value: 0.00,
            class: "text-amber-500",
        },
        {
            icon: FlFilledMoneyHand,
            title: "Inversión Inicial",
            value: 20_690.0,
            class: "text-amber-600",
        },
        {
            icon: FlFilledMoneyHand,
            title: "Inversión Final",
            value: 0.00,
            class: "text-blue-400",
        },
        {
            icon: HeOutlineMoneyBag,
            title: "Ganancia",
            value: 0.00,
            class: "text-slate-100",
        },
        ],
        history: [
        { open: 20.69, low: 20.69, high: 20.10, close: 20.10, time: 1723686030 },
        { open: 20.10, low: 20.10, high: 20.13, close: 20.13, time: 1724290830 },
        { open: 20.13, low: 20.13, high: 19.40, close: 19.40, time: 1724895630 },
        { open: 19.40, low: 19.40, high: 19.36, close: 19.36, time: 1725500430 },
        { open: 19.36, low: 19.36, high: 21.14, close: 21.14, time: 1726105230 },
        { open: 21.14, low: 21.14, high: 23.92, close: 23.92, time: 1726710030 },
        { open: 23.92, low: 23.92, high: 22.26, close: 22.26, time: 1727314830 },
        { open: 22.26, low: 22.26, high: 23.22, close: 23.22, time: 1727919630 },
        { open: 23.22, low: 23.22, high: 22.44, close: 22.44, time: 1728524430 },
        { open: 22.44, low: 22.44, high: 22.34, close: 22.34, time: 1729129230 },
        { open: 22.34, low: 22.34, high: 21.52, close: 21.52, time: 1729734030 },
        { open: 21.52, low: 21.52, high: 21.52, close: 21.52, time: 1730338830 }
        ]
        ,
        class: "text-indigo-500",
        description:
        "Walmart es un gigante del retail con operación global. Ofrece estabilidad de ingresos y protección ante crisis económicas, gracias a su diversificación de productos y presencia física y digital.",
    },
};