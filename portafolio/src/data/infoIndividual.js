import {
    AnFilledGold,
    AnFilledEuroCircle,
    BsCurrencyYen,
    SiCocacola,
    SiAmazon,
    BsMicrosoft,
    SiApple,
    LaMoneyBillWaveSolid,
    CaPortfolio,
    FlFilledMoneyHand,
    HeOutlineMoneyBag,
    TaOutlineBrandWalmart,
    MdSharpOilBarrel,
    FaOilCan
} from "@kalimahapps/vue-icons";

export const stocksIdInfo = {

    euro: {
        name: "Euro",
        code: "EUR",
        icon: AnFilledEuroCircle,
        initialValue: 1.18,

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
            { value: 1.18, time: 1751500800 }, // 4/07/2025
            { value: 1.17, time: 1752192000 }, // 11/07/2025
            { value: 1.16, time: 1752796800 }, // 18/07/2025
            { value: 1.16, time: 1753401600 }, // 25/07/2025
            { value: 1.16, time: 1754006400 }, // 1/08/2025
            { value: 1.16, time: 1754611200 }, // 8/08/2025
            { value: 1.17, time: 1755216000 }, // 15/08/2025
            { value: 1.17, time: 1755820800 }, // 22/08/2025
            { value: 1.17, time: 1756425600 }, // 29/08/2025
            { value: 1.17, time: 1757030400 }, // 5/09/2025
            { value: 1.17, time: 1757635200 }, // 12/09/2025
            { value: 1.17, time: 1758240000 }, // 19/09/2025
            { value: 1.17, time: 1758844800 }, // 26/09/2025
            { value: 1.17, time: 1759449600 }, // 3/10/2025
            { value: 1.16, time: 1760054400 }, // 10/10/2025
            { value: 1.17, time: 1760659200 }, // 17/10/2025
            { value: 1.16, time: 1761264000 }, // 24/10/2025
        ],

        class: "text-indigo-500",
        description: "El Euro es una de las monedas más estables del mundo. Invertir en EUR ayuda a proteger tu portafolio frente a la volatilidad del dólar y proporciona diversificación geográfica en divisas.",
    },
    yen: {
        name: "Yen",
        code: "JPY",
        icon: BsCurrencyYen,
        initialValue: 0.69,

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
            { value: 0.69, time: 1751500800 }, // 4/07/2025
            { value: 0.69, time: 1752192000 }, // 11/07/2025
            { value: 0.68, time: 1752796800 }, // 18/07/2025
            { value: 0.67, time: 1753401600 }, // 25/07/2025
            { value: 0.68, time: 1754006400 }, // 1/08/2025
            { value: 0.68, time: 1754611200 }, // 8/08/2025
            { value: 0.68, time: 1755216000 }, // 15/08/2025
            { value: 0.68, time: 1755820800 }, // 22/08/2025
            { value: 0.68, time: 1756425600 }, // 29/08/2025
            { value: 0.68, time: 1757030400 }, // 5/09/2025
            { value: 0.68, time: 1757635200 }, // 12/09/2025
            { value: 0.68, time: 1758240000 }, // 19/09/2025
            { value: 0.68, time: 1758844800 }, // 26/09/2025
            { value: 0.67, time: 1759449600 }, // 3/10/2025
            { value: 0.68, time: 1760054400 }, // 10/10/2025
            { value: 0.66, time: 1760659200 }, // 17/10/2025
            { value: 0.65, time: 1761264000 }, // 24/10/2025
        ],

        class: "text-indigo-500",
        description:
            "El Yen es una moneda clave en los mercados asiáticos y sirve como refugio en contextos de volatilidad regional. Mantener JPY en portafolio aporta diversificación y estabilidad.",
    },
    oro: {
        name: "Oro",
        code: "XAU",
        icon: AnFilledGold,
        initialValue: 3346.50,
        
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
            { value: 3_346.50, time: 1751500800 }, // 3/07/2025
            { value: 3_364.00, time: 1752192000 }, // 10/07/2025
            { value: 3_358.30, time: 1752796800 }, // 17/07/2025
            { value: 3_392.50, time: 1753401600 }, // 24/07/2025
            { value: 3_399.80, time: 1754006400 }, // 31/07/2025
            { value: 3_491.30, time: 1754611200 }, // 7/08/2025
            { value: 3_382.60, time: 1755216000 }, // 14/08/2025
            { value: 3_418.50, time: 1755820800 }, // 21/08/2025
            { value: 3_516.10, time: 1756425600 }, // 28/08/2025
            { value: 3_653.30, time: 1757030400 }, // 4/09/2025
            { value: 3_686.40, time: 1757635200 }, // 11/09/2025
            { value: 3_705.80, time: 1758240000 }, // 18/09/2025
            { value: 3_793.90, time: 1758844800 }, // 25/09/2025
            { value: 3_908.90, time: 1759449600 }, // 2/10/2025
            { value: 4_000.40, time: 1760054400 }, // 9/10/2025
            { value: 4_213.30, time: 1760659200 }, // 16/10/2025
            { value: 4_137.80, time: 1761264000 }, // 23/10/2025
        ],

        class: "text-indigo-500",
        description:
            "El oro es un activo refugio histórico. Sirve para proteger el capital contra inflación, crisis financieras o devaluación de monedas, y aporta estabilidad al portafolio.",
    },

    petroleo: {
        name: "Futuro petróleo crudo",
        code: "OIL",
        icon: FaOilCan,
        initialValue: 66.49,

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
            { value: 66.49, time: 1751500800 }, // 2/07/2025
            { value: 68.45, time: 1752192000 }, // 11/07/2025
            { value: 67.34, time: 1752796800 }, // 18/07/2025
            { value: 65.07, time: 1753401600 }, // 25/07/2025
            { value: 68.39, time: 1754006400 }, // 1/08/2025
            { value: 64.94, time: 1754611200 }, // 8/08/2025
            { value: 63.78, time: 1755216000 }, // 15/08/2025
            { value: 64.08, time: 1755820800 }, // 22/08/2025
            { value: 64.01, time: 1756425600 }, // 29/08/2025
            { value: 62.22, time: 1757030400 }, // 5/09/2025
            { value: 63.02, time: 1757635200 }, // 12/09/2025
            { value: 63.02, time: 1758240000 }, // 19/09/2025
            { value: 66.50, time: 1758844800 }, // 26/09/2025
            { value: 60.88, time: 1759449600 }, // 3/10/2025
            { value: 59.79, time: 1760054400 }, // 10/10/2025
            { value: 57.17, time: 1760659200 }, // 17/10/2025
            { value: 61.60, time: 1761264000 }, // 24/10/2025
        ],
        class: "text-indigo-500",
        description:
            "El petróleo es un commodity con alta volatilidad, sensible a la oferta, demanda y eventos geopolíticos. Sirve para diversificación en portafolios con exposición a energéticos.",
    },

    coca: {
        name: "The Coca-Cola Company",
        code: "KO",
        icon: SiCocacola,
        initialValue: 71.35,

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
            { value: 71.35, time: 1751500800 }, // 3/07/2025
            { value: 69.87, time: 1752192000 }, // 11/07/2025
            { value: 70.45, time: 1752796800 }, // 18/07/2025
            { value: 69.17, time: 1753401600 }, // 25/07/2025
            { value: 68.36, time: 1754006400 }, // 1/08/2025
            { value: 70.34, time: 1754611200}, // 8/08/2025
            { value: 69.92, time: 1755216000}, // 15/08/2025
            { value: 70.13, time: 1755820800 }, // 22/08/2025
            { value: 68.99, time: 1756425600 }, // 29/08/2025
            { value: 67.96, time: 1757030400}, // 5/09/2025
            { value: 67.01, time: 1757635200}, // 12/09/2025
            { value: 66.43, time: 1758240000}, // 19/09/2025
            { value: 65.67, time: 1758844800}, // 26/09/2025
            { value: 66.65, time: 1759449600}, // 3/10/2025
            { value: 67.04, time: 1760054400}, // 10/10/2025
            { value: 68.44, time: 1760659200}, // 17/10/2025
            { value: 69.71, time: 1761264000}, // 24/10/2025
        ],

        class: "text-indigo-500",
        description:
            "The Coca-Cola Company es una de las compañías más reconocidas en el sector de bebidas. Sus acciones ofrecen estabilidad relativa y retornos moderados, siendo atractivas para portafolios diversificados.",
    },

    amazon: {
        name: "Amazon Inc",
        code: "AMZN",
        icon: SiAmazon,
        initialValue: 223.41,

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
            { value: 223.41, time: 1751500800 }, // 2/07/2025
            { value: 225.02, time: 1752192000 }, // 11/07/2025
            { value: 226.13, time: 1752796800 }, // 18/07/2025
            { value: 231.44, time: 1753401600 }, // 25/07/2025
            { value: 214.75, time: 1754006400 }, // 1/08/2025
            { value: 222.69, time: 1754611200 }, // 8/08/2025
            { value: 231.03, time: 1755216000 }, // 15/08/2025
            { value: 228.84, time: 1755820800 }, // 22/08/2025
            { value: 229.00, time: 1756425600 }, // 29/08/2025
            { value: 232.31, time: 1757030400 }, // 5/09/2025
            { value: 231.43, time: 1757635200 }, // 12/09/2025
            { value: 231.48, time: 1758240000 }, // 19/09/2025
            { value: 219.78, time: 1758844800 }, // 26/09/2025
            { value: 219.51, time: 1759449600 }, // 3/10/2025
            { value: 227.74, time: 1760054400 }, // 10/10/2025
            { value: 213.04, time: 1760659200 }, // 17/10/2025
            { value: 224.21, time: 1761264000 }, // 24/10/2025
        ],

        class: "text-indigo-500",
        description:
            "Amazon Inc es una de las mayores compañías de comercio electrónico y tecnología del mundo. Sus acciones presentan volatilidad moderada y oportunidades de crecimiento a largo plazo.",
    }
    ,
    microsoft: {
        name: "Microsoft Corporation",
        code: "MSFT",
        icon: BsMicrosoft,
        initialValue: 498.84,

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
            { value: 498.84, time: 1751500800 }, // 2/07/2025
            { value: 503.32, time: 1752192000 }, // 11/07/2025
            { value: 510.05, time: 1752796800 }, // 18/07/2025
            { value: 513.71, time: 1753401600 }, // 25/07/2025
            { value: 524.11, time: 1754006400 }, // 1/08/2025
            { value: 522.04, time: 1754611200 }, // 8/08/2025
            { value: 520.17, time: 1755216000 }, // 15/08/2025
            { value: 507.23, time: 1755820800 }, // 22/08/2025
            { value: 506.69, time: 1756425600 }, // 29/08/2025
            { value: 495.00, time: 1757030400 }, // 5/09/2025
            { value: 509.90, time: 1757635200 }, // 12/09/2025
            { value: 517.93, time: 1758240000 }, // 19/09/2025
            { value: 511.46, time: 1758844800 }, // 26/09/2025
            { value: 517.35, time: 1759449600 }, // 3/10/2025
            { value: 510.96, time: 1760054400 }, // 10/10/2025
            { value: 513.58, time: 1760659200 }, // 17/10/2025
            { value: 523.61, time: 1761264000 }, // 24/10/2025
        ],

        class: "text-indigo-500",
        description:
            "Microsoft Corporation es un gigante tecnológico con presencia global. Sus acciones son relativamente estables y se consideran una buena opción para portafolios diversificados con exposición tecnológica.",
    },
    apple: {
        name: "Apple Inc",
        code: "AAPL",
        icon: SiApple,
        initialValue: 213.55,

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
            { value: 213.55, time: 1751500800 }, // 2/07/2025
            { value: 210.57, time: 1752192000 }, // 11/07/2025
            { value: 211.18, time: 1752796800 }, // 18/07/2025
            { value: 213.88, time: 1753401600 }, // 25/07/2025
            { value: 204.15, time: 1754006400 }, // 4/08/2025
            { value: 229.25, time: 1754611200 }, // 8/08/2025
            { value: 231.59, time: 1755216000 }, // 15/08/2025
            { value: 227.76, time: 1755820800 }, // 22/08/2025
            { value: 232.14, time: 1756425600 }, // 29/08/2025
            { value: 239.69, time: 1757030400 }, // 5/09/2025
            { value: 234.04, time: 1757635200 }, // 12/09/2025
            { value: 245.50, time: 1758240000 }, // 19/09/2025
            { value: 255.46, time: 1758844800 }, // 26/09/2025
            { value: 258.02, time: 1759449600 }, // 3/10/2025
            { value: 245.27, time: 1760054400 }, // 10/10/2025
            { value: 252.29, time: 1760659200 }, // 17/10/2025
            { value: 262.82, time: 1761264000 }, // 24/10/2025
        ],

        class: "text-indigo-500",
        description:
            "Apple mantiene un ecosistema sólido y productos con alta demanda global. La inversión aprovecha innovación tecnológica y retornos consistentes gracias a márgenes elevados y lealtad de clientes.",
    },

    walmart: {
        name: "Walmart Inc",
        code: "WMT",
        icon: TaOutlineBrandWalmart,
        initialValue: 98.36,

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
            { value: 98.36, time: 1751500800}, // 2/07/2025
            { value: 94.40, time: 1752192000}, // 11/07/2025
            { value: 95.67, time: 1752796800}, // 18/07/2025
            { value: 97.47, time: 1753401600}, // 25/07/2025
            { value: 98.49, time: 1754006400}, // 1/08/2025
            { value: 103.73, time: 1754611200 }, // 8/08/2025
            { value: 100.00, time: 1755216000 }, // 15/08/2025
            { value: 96.83, time: 1755820800}, // 22/08/2025
            { value: 96.98, time: 1756425600}, // 29/08/2025
            { value: 100.51, time: 1757030400 }, // 5/09/2025
            { value: 103.49, time: 1757635200 }, // 12/09/2025
            { value: 102.33, time: 1758240000 }, // 19/09/2025
            { value: 103.16, time: 1758844800 }, // 26/09/2025
            { value: 102.07, time: 1759449600 }, // 3/10/2025
            { value: 101.84, time: 1760054400 }, // 10/10/2025
            { value: 107.73, time: 1760659200 }, // 17/10/2025
            { value: 106.17, time: 1761264000 }, // 24/10/2025
        ],
        class: "text-indigo-500",
        description:
            "Walmart es un gigante del retail con operación global. Ofrece estabilidad de ingresos y protección ante crisis económicas, gracias a su diversificación de productos y presencia física y digital.",
    },


};