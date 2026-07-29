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
import dspobservation1to5 from "/pdffiles/DSP_observation_1-5.pdf";
import adclab from "/pdffiles/ADC LAB.pdf";
import dc1 from "/pdffiles/DC unit-1.pdf";
import dspU1 from "/pdffiles/DSP internal Assessment-1 portion.pdf";
import dspqp1 from "/pdffiles/DSP QP1.pdf";
import dspqp2 from "/pdffiles/DSP QP2.pdf";
import wc1 from "/pdffiles/wc_unit_1.pptx";
import wc2 from "/pdffiles/wc_unit_2.pptx";
import wciat1 from "/pdffiles/wc IAT1.pdf";
import tlrf1 from "/pdffiles/TL&RF unit-1.pdf";
import tlrf2 from "/pdffiles/TL&RF unit-2 IAT-1 portion.pdf";
import tlrfqp1 from "/pdffiles/tlrfqp1.pdf";

export const PASS = {
  sub0: "dc7",
  sub1: "dsp5",
  sub2: "wire",
  sub3: "rfv",
  sub4: "fpga9",
  sub5: "had0",
  sub6: "adc",
  sub7: "mp",
  sub8: "sspd",
  sub9: "dsp",
  sub10: "fpga",
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
    // 0 — Digital Communication
    {
      units: [dc1, "", "", "", ""],
      unitTitles: [
        "DC Unit 1 — Notes",
        "Unit 2 — Notes",
        "Unit 3 — Notes",
        "Unit 4 — Notes",
        "Unit 5 — Notes",
      ],
      internals: [null, null, null],
      internalTitles: [
        "Internal 1 — Question Paper",
        "Internal 2 — Question Paper",
        "Internal 3 — Question Paper",
      ],
    },
    // 1 — Digital Signal Processing
    {
      units: [dspU1, "", "", "", ""],
      unitTitles: [
        "DSP Unit 1 — Notes",
        "Unit 2 — Notes",
        "Unit 3 — Notes",
        "Unit 4 — Notes",
        "Unit 5 — Notes",
      ],
      internals: [null, null, null],
      internalTitles: [
        "Internal 1 — Question Paper",
        "Internal 2 — Question Paper",
        "Internal 3 — Question Paper",
      ],
    },
    // 2 — Wireless Communication
    {
      units: [wc1, wc2, "", "", ""],
      unitTitles: [
        "WC Unit 1 — Notes",
        "WC Unit 2 — Notes",
        "Unit 3 — Notes",
        "Unit 4 — Notes",
        "Unit 5 — Notes",
      ],
      internals: [wciat1, null, null],
      internalTitles: [
        "WC IAT 1 — Question and Answer",
        "Internal 2 — Question Paper",
        "Internal 3 — Question Paper",
      ],
    },
    // 3 — Transmission Lines And RF Systems
    {
      units: [tlrf1, tlrf2, "", "", ""],
      unitTitles: [
        "Unit 1 — Notes",
        "Unit 2 — Notes",
        "Unit 3 — Notes",
        "Unit 4 — Notes",
        "Unit 5 — Notes",
      ],
      internals: [null, null, null],
      internalTitles: [
        "Internal 1 — Question Paper",
        "Internal 2 — Question Paper",
        "Internal 3 — Question Paper",
      ],
    },
    // 4 — Computer Networks
    {
      units: ["", "", "", "", ""],
      unitTitles: [
        "Unit 1 — Notes",
        "Unit 2 — Notes",
        "Unit 3 — Notes",
        "Unit 4 — Notes",
        "Unit 5 — Notes",
      ],
      internals: [null, null, null],
      internalTitles: [
        "Internal 1 — Question Paper",
        "Internal 2 — Question Paper",
        "Internal 3 — Question Paper",
      ],
    },
    // 5 — Control Systems
    {
      units: ["", "", "", "", ""],
      unitTitles: [
        "Unit 1 — Notes",
        "Unit 2 — Notes",
        "Unit 3 — Notes",
        "Unit 4 — Notes",
        "Unit 5 — Notes",
      ],
      internals: [null, null, null],
      internalTitles: [
        "Internal 1 — Question Paper",
        "Internal 2 — Question Paper",
        "Internal 3 — Question Paper",
      ],
    },
    // 6 — Microprocessors & Controllers
    {
      units: ["", "", "", "", ""],
      unitTitles: [
        "Unit 1 — Notes",
        "Unit 2 — Notes",
        "Unit 3 — Notes",
        "Unit 4 — Notes",
        "Unit 5 — Notes",
      ],
      internals: [null, null, null],
      internalTitles: [
        "Internal 1 — Question Paper",
        "Internal 2 — Question Paper",
        "Internal 3 — Question Paper",
      ],
    },
    // 7 — Optical Communication
    {
      units: ["", "", "", "", ""],
      unitTitles: [
        "Unit 1 — Notes",
        "Unit 2 — Notes",
        "Unit 3 — Notes",
        "Unit 4 — Notes",
        "Unit 5 — Notes",
      ],
      internals: [null, null, null],
      internalTitles: [
        "Internal 1 — Question Paper",
        "Internal 2 — Question Paper",
        "Internal 3 — Question Paper",
      ],
    },
  ],

  records: [
    { url: adclab, title: "ADC Lab — Record" },
    { url: "", title: "Mini - Project — Record" },
    {
      url: "",
      title: "Soft Skills And Personality Development Laboratory — Record",
    },
    {
      url: dspobservation1to5,
      title: "DSP Integrated Lab Observation — Record",
    },
    { url: "", title: "FPGA Lab — Record" },
  ],
  pyq: [
    ["", ""],
    [dspqp1, dspqp2],
    ["", ""],
    [tlrfqp1],
    ["", ""],
    ["", ""],
    ["", "https://example.com/paper16.pdf"],
  ],
  // pyq: Array(SUBJECTS.length)
  //   .fill(0)
  //   .map((_, i) => (i === 0 ? [dspU1, dspU1] : [null, null])),

  // pyq:     Array(8).fill(0).map(() => Array(2).fill(dspU1)),
};
