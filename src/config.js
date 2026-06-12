import scheduleImg from "./assets/schedule.jpeg";
import dspU1 from "./assets/Unit_1_Notes.pdf";

export const PASS = {
  
  sub0: "dsp001",
  sub1: "vls002",
  sub2: "wco003",
  sub3: "emb004",
  sub4: "cne005",
  sub5: "cts006",
  sub6: "mpc007",
  sub7: "opt008",
};

export const SUBJECTS = [
  "Digital Signal Processing",
  "VLSI Design",
  "Wireless Communication",
  "Embedded Systems",
  "Computer Networks",
  "Control Systems",
  "Microprocessors & Controllers",
  "Optical Communication",
];

export const LABS = [
  "DSP Lab",
  "VLSI Lab",
  "Embedded Systems Lab",
  "Communication Lab",
];


export const FILES = {
  scheduleImg,
  timetableImg: null,
  syllabusImgs: Array(8).fill(null),

  notes: [
    // 0 — Digital Signal Processing
    {
      units: [
        dspU1,
        "YOUR_DSP_UNIT2_URL",
        "YOUR_DSP_UNIT3_URL",
        "YOUR_DSP_UNIT4_URL",
        "YOUR_DSP_UNIT5_URL",
      ],
      internals: [null, null, null],
    },
    // 1 — VLSI Design
    {
      units: [
        "YOUR_VLS_UNIT1_URL",
        "YOUR_VLS_UNIT2_URL",
        "YOUR_VLS_UNIT3_URL",
        "YOUR_VLS_UNIT4_URL",
        "YOUR_VLS_UNIT5_URL",
      ],
      internals: [null, null, null],
    },
    // 2 — Wireless Communication
    {
      units: [
        "YOUR_WCO_UNIT1_URL",
        "YOUR_WCO_UNIT2_URL",
        "YOUR_WCO_UNIT3_URL",
        "YOUR_WCO_UNIT4_URL",
        "YOUR_WCO_UNIT5_URL",
      ],
      internals: [null, null, null],
    },
    // 3 — Embedded Systems
    {
      units: [
        "YOUR_EMB_UNIT1_URL",
        "YOUR_EMB_UNIT2_URL",
        "YOUR_EMB_UNIT3_URL",
        "YOUR_EMB_UNIT4_URL",
        "YOUR_EMB_UNIT5_URL",
      ],
      internals: [null, null, null],
    },
    // 4 — Computer Networks
    {
      units: [
        "YOUR_CNE_UNIT1_URL",
        "YOUR_CNE_UNIT2_URL",
        "YOUR_CNE_UNIT3_URL",
        "YOUR_CNE_UNIT4_URL",
        "YOUR_CNE_UNIT5_URL",
      ],
      internals: [null, null, null],
    },
    // 5 — Control Systems
    {
      units: [
        "YOUR_CTS_UNIT1_URL",
        "YOUR_CTS_UNIT2_URL",
        "YOUR_CTS_UNIT3_URL",
        "YOUR_CTS_UNIT4_URL",
        "YOUR_CTS_UNIT5_URL",
      ],
      internals: [null, null, null],
    },
    // 6 — Microprocessors & Controllers
    {
      units: [
        "YOUR_MPC_UNIT1_URL",
        "YOUR_MPC_UNIT2_URL",
        "YOUR_MPC_UNIT3_URL",
        "YOUR_MPC_UNIT4_URL",
        "YOUR_MPC_UNIT5_URL",
      ],
      internals: [null, null, null],
    },
    // 7 — Optical Communication
    {
      units: [
        "YOUR_OPT_UNIT1_URL",
        "YOUR_OPT_UNIT2_URL",
        "YOUR_OPT_UNIT3_URL",
        "YOUR_OPT_UNIT4_URL",
        "YOUR_OPT_UNIT5_URL",
      ],
      internals: [null, null, null],
    },
  ],

  records: Array(4).fill(null),
  pyq:     Array(8).fill(0).map(() => Array(2).fill(null)),
};

// export const FILES = {
//   scheduleImg,
//   timetableImg: null,
//   syllabusImgs: Array(8).fill(null),
//   notes: Array(8).fill(0).map(() => ({
//     units: [
//       dspU1,
//     ],
//     // units:     Array(5).fill(dspU1),
//     internals: Array(3).fill(null),
//   })),
//   records: Array(4).fill(null),
//   pyq:     Array(8).fill(0).map(() => Array(2).fill(null)),
// };