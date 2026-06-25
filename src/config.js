import scheduleImg from "./assets/schedule.jpeg";
import timetableImg from "./assets/timetable.jpeg";
import dco from "./assets/syllabus/dco.jpg";
import dsp from "./assets/syllabus/dsp.jpg";
import wco from "./assets/syllabus/wco.jpg";
import rfs from "./assets/syllabus/rfs.jpg";
import fpgat from "./assets/syllabus/fpga_theory.jpg";
import had from "./assets/syllabus/had.jpg";
import aanddlab from "./assets/syllabus/a&d lab.jpg";
import mp from "./assets/syllabus/miniproject.jpg";
import skillslab from "./assets/syllabus/skills lab.jpg";
import dsplab from "./assets/timetable.jpeg";
import fpgalab from "./assets/syllabus/fpga lab.jpg";
import dspU1 from "./assets/Unit_1_Notes.pdf";
import dspobservation1to5 from "/pdffiles/DSP_observation_1-5.pdf";
import adclab from "/pdffiles/ADC LAB.pdf"

export const PASS = {
  sub0: "dc01",
  sub1: "dsp02",
  sub2: "wc03",
  sub3: "rfs04",
  sub4: "fpga05",
  sub5: "had06",
  sub6: "adc07",
  sub7: "mp08",
  sub8: "sspd09",
  sub9: "dsp010",
  sub10: "fpga011",
};

export const SUBJECTS = [
  "Digital Communication",
  "Digital Signal Processing",
  "Wireless Communication",
  "Transmission Lines And RF Systems",
  "PE-1(Digital Design with FPGA)",
  "PE-2(Human Assist Devices)",
  "Analog And Digital Communication Laboratory",
  "Mini - Project",
  "Soft Skills And Personality Development Laboratory",
  "Digital Signal Processing (Integrated Lab)",
  "PE-1[Digital Dising with FPGA(Integrated Lab)",
];

export const LABS = [
  "Analog And Digital Communication Laboratory",
  "Mini - Project",
  "Soft Skills And Personality Development Laboratory",
  "Digital Signal Processing (Integrated Lab)(1 to 5)",
  "Digital Signal Processing (Integrated Lab)",
  "PE-1[Digital Dising with FPGA(Integrated Lab)",
];

export const FILES = {
  scheduleImg,
  timetableImg,
  syllabusImgs: [
    dco,
    dsp,
    wco,
    rfs,
    fpgat,
    had,
    aanddlab,
    mp,
    skillslab,
    dsplab,
    fpgalab,
  ],

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

  records: [
    adclab,
    "",
    "",
    dspobservation1to5,
    "",
  ],
  pyq: [
  ["https://example.com/paper1.pdf", "https://example.com/paper2.pdf"],
  ["", "https://example.com/paper4.pdf"],
  ["https://example.com/paper5.pdf", "https://example.com/paper6.pdf"],
  ["https://example.com/paper7.pdf", "https://example.com/paper8.pdf"],
  ["https://example.com/paper9.pdf", "https://example.com/paper10.pdf"],
  ["https://example.com/paper11.pdf", "https://example.com/paper12.pdf"],
  ["https://example.com/paper13.pdf", "https://example.com/paper14.pdf"],
  ["https://example.com/paper15.pdf", "https://example.com/paper16.pdf"],
]
  // pyq: Array(SUBJECTS.length)
  //   .fill(0)
  //   .map((_, i) => (i === 0 ? [dspU1, dspU1] : [null, null])),
    
    
    

  // pyq:     Array(8).fill(0).map(() => Array(2).fill(dspU1)),
};

