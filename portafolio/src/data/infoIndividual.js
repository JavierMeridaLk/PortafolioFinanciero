import {
    AnFilledGold,   
    AnFilledEuroCircle,           
    BsCurrencyYen,            
    SiCocacola,       
    SiAmazon,        
    FaOilCan,         
    BsMicrosoft,     
    SiApple,         
    DeGoogleOriginal,        
    SiWalmart,
    LaMoneyBillWaveSolid,
    CaPortfolio,
    FlFilledMoneyHand,
    HeOutlineMoneyBag
} from "@kalimahapps/vue-icons";

export const stocksIdInfo = {

    euro: {
        name: "Euro",
        code: "EUR",
        icon: AnFilledEuroCircle,
        
        cards: [
        {
            icon: LaMoneyBillWaveSolid,
            title: "Costo Inicial",
            value: 1.18,
            class: "text-sky-400",
        },
        {
            icon: LaMoneyBillWaveSolid,
            title: "Costo Final",
            value: 1.16,
            class: "text-rose-400",
        },
        {
            icon: CaPortfolio,
            title: "Acciones Compradas",
            value: 50_000.00,
            class: "text-indigo-300",
        },
        {
            icon: FlFilledMoneyHand,
            title: "Inversión Inicial",
            value: 58_895.00,
            class: "text-amber-400",
        },
        {
            icon: FlFilledMoneyHand,
            title: "Inversión Final",
            value: 58_135.00,
            class: "text-amber-300",
        },
        {
            icon: HeOutlineMoneyBag,
            title: "Ganancia",
            value: -760.00,
            class: "text-emerald-400",
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
        icon: BsCurrencyYen,
        
        cards: [
        {
            icon: LaMoneyBillWaveSolid,
            title: "Costo Inicial",
            value: 0.69,
            class: "text-sky-400",
        },
        {
            icon: LaMoneyBillWaveSolid,
            title: "Costo Final",
            value: 0.65,
            class: "text-rose-400",
        },
        {
            icon: CaPortfolio,
            title: "Acciones Compradas",
            value: 50_000.00,
            class: "text-indigo-300",
        },
        {
            icon: FlFilledMoneyHand,
            title: "Inversión Inicial",
            value: 34_582.85,
            class: "text-amber-400",
        },
        {
            icon: FlFilledMoneyHand,
            title: "Inversión Final",
            value: 32_707.50,
            class: "text-amber-300",
        },
        {
            icon: HeOutlineMoneyBag,
            title: "Ganancia",
            value: -1_875.35,
            class: "text-emerald-400",
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
        icon: AnFilledGold,
        
        cards: [
        {
            icon: LaMoneyBillWaveSolid,
            title: "Costo Inicial",
            value: 3_346.50,
            class: "text-sky-400",
        },
        {
            icon: LaMoneyBillWaveSolid,
            title: "Costo Final",
            value: 4_137.80,
            class: "text-rose-400",
        },
        {
            icon: CaPortfolio,
            title: "Acciones Compradas",
            value: 75.00,
            class: "text-indigo-300",
        },
        {
            icon: FlFilledMoneyHand,
            title: "Inversión Inicial",
            value: 250_987.50,
            class: "text-amber-400",
        },
        {
            icon: FlFilledMoneyHand,
            title: "Inversión Final",
            value: 310_335.00,
            class: "text-amber-300",
        },
        {
            icon: HeOutlineMoneyBag,
            title: "Ganancia",
            value: 59_347.50,
            class: "text-emerald-400",
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
            value: 66.49,
            class: "text-sky-400",
        },
        {
            icon: LaMoneyBillWaveSolid,
            title: "Costo Final",
            value: 61.60,
            class: "text-rose-400",
        },
        {
            icon: CaPortfolio,
            title: "Acciones Compradas",
            value: 510.00,
            class: "text-indigo-300",
        },
        {
            icon: FlFilledMoneyHand,
            title: "Inversión Inicial",
            value: 33_909.90,
            class: "text-amber-400",
        },
        {
            icon: FlFilledMoneyHand,
            title: "Inversión Final",
            value: 31_416.00,
            class: "text-amber-300",
        },
        {
            icon: HeOutlineMoneyBag,
            title: "Ganancia",
            value: -2_493.90,
            class: "text-emerald-400",
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
        icon: SiCocacola,
        
        cards: [
        {
            icon: LaMoneyBillWaveSolid,
            title: "Costo Inicial",
            value: 71.35,
            class: "text-sky-400",
        },
        {
            icon: LaMoneyBillWaveSolid,
            title: "Costo Final",
            value: 69.71,
            class: "text-rose-400",
        },
        {
            icon: CaPortfolio,
            title: "Acciones Compradas",
            value: 3_001.00,
            class: "text-indigo-300",
        },
        {
            icon: FlFilledMoneyHand,
            title: "Inversión Inicial",
            value: 214_121.35,
            class: "text-amber-400",
        },
        {
            icon: FlFilledMoneyHand,
            title: "Inversión Final",
            value: 209_199.71,
            class: "text-amber-300",
        },
        {
            icon: HeOutlineMoneyBag,
            title: "Ganancia",
            value: -4_921.64,
            class: "text-emerald-400",
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
            value: 223.41,
            class: "text-sky-400",
        },
        {
            icon: LaMoneyBillWaveSolid,
            title: "Costo Final",
            value: 224.21,
            class: "text-rose-400",
        },
        {
            icon: CaPortfolio,
            title: "Acciones Compradas",
            value: 1_000.00,
            class: "text-indigo-300",
        },
        {
            icon: FlFilledMoneyHand,
            title: "Inversión Inicial",
            value: 223_410.00,
            class: "text-amber-400",
        },
        {
            icon: FlFilledMoneyHand,
            title: "Inversión Final",
            value: 224_210.00,
            class: "text-amber-300",
        },
        {
            icon: HeOutlineMoneyBag,
            title: "Ganancia",
            value: 800.00,
            class: "text-emerald-400",
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
        icon: BsMicrosoft,
        
        cards: [
        {
            icon: LaMoneyBillWaveSolid,
            title: "Costo Inicial",
            value: 498.84,
            class: "text-sky-400",
        },
        {
            icon: LaMoneyBillWaveSolid,
            title: "Costo Final",
            value: 523.61,
            class: "text-rose-400",
        },
        {
            icon: CaPortfolio,
            title: "Acciones Compradas",
            value: 175.00,
            class: "text-indigo-300",
        },
        {
            icon: FlFilledMoneyHand,
            title: "Inversión Inicial",
            value: 87_297.00,
            class: "text-amber-400",
        },
        {
            icon: FlFilledMoneyHand,
            title: "Inversión Final",
            value: 91_631.75,
            class: "text-amber-300",
        },
        {
            icon: HeOutlineMoneyBag,
            title: "Ganancia",
            value: 4_334.75,
            class: "text-emerald-400",
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
            value: 213.55,
            class: "text-sky-400",
        },
        {
            icon: LaMoneyBillWaveSolid,
            title: "Costo Final",
            value: 262.82,
            class: "text-rose-400",
        },
        {
            icon: CaPortfolio,
            title: "Acciones Compradas",
            value: 310.00,
            class: "text-indigo-300",
        },
        {
            icon: FlFilledMoneyHand,
            title: "Inversión Inicial",
            value: 66_200.50,
            class: "text-amber-400",
        },
        {
            icon: FlFilledMoneyHand,
            title: "Inversión Final",
            value: 81_474.20,
            class: "text-amber-300",
        },
        {
            icon: HeOutlineMoneyBag,
            title: "Ganancia",
            value: 15_273.70,
            class: "text-emerald-400",
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
    walmart: {
        name: "Walmart Inc",
        code: "WMT",
        icon: SiWalmart,
        
        cards: [
        {
            icon: LaMoneyBillWaveSolid,
            title: "Costo Inicial",
            value: 98.36,
            class: "text-sky-400",
        },
        {
            icon: LaMoneyBillWaveSolid,
            title: "Costo Final",
            value: 106.17,
            class: "text-rose-400",
        },
        {
            icon: CaPortfolio,
            title: "Acciones Compradas",
            value: 311.00,
            class: "text-indigo-300",
        },
        {
            icon: FlFilledMoneyHand,
            title: "Inversión Inicial",
            value: 30_589.96,
            class: "text-amber-400",
        },
        {
            icon: FlFilledMoneyHand,
            title: "Inversión Final",
            value: 33_018.87,
            class: "text-amber-300",
        },
        {
            icon: HeOutlineMoneyBag,
            title: "Ganancia",
            value: 2_428.91,
            class: "text-emerald-400",
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