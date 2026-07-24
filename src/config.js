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
//import dspU1 from "./assets/Unit_1_Notes.pdf";
import dspobservation1to5 from "/pdffiles/DSP_observation_1-5.pdf";
import adclab from "/pdffiles/ADC LAB.pdf"

export const PASS = {
  sub0: "dc7",
  sub1: "dsp5",
  sub2: "wc3",
  sub3: "rfs1",
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
    // 0 — Digital Signal Processing
    {
      units: [
        "pdffiles/DC unit-1.pdf",
        "",
        "",
        "",
        "",
      ],
      internals: [null, null, null],
    },
    // 1 — VLSI Design
    {
      units: [
        "",
        "",
        "",
        "",
        "",
      ],
      internals: [null, null, null],
    },
    // 2 — Wireless Communication
    {
      units: [
        "",
        "",
        "",
        "",
        "",
      ],
      internals: [null, null, null],
    },
    // 3 — Embedded Systems
    {
      units: [
        "",
        "",
        "",
        "",
        "",
      ],
      internals: [null, null, null],
    },
    // 4 — Computer Networks
    {
      units: [
        "",
        "",
        "",
        "",
        "",
      ],
      internals: [null, null, null],
    },
    // 5 — Control Systems
    {
      units: [
        "",
        "",
        "",
        "",
        "",
      ],
      internals: [null, null, null],
    },
    // 6 — Microprocessors & Controllers
    {
      units: [
       "",
        "",
        "",
        "",
        "",
      ],
      internals: [null, null, null],
    },
    // 7 — Optical Communication
    {
      units: [
        "",
        "",
        "",
        "",
        "",
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
  ["", ""],
  ["", ""],
  ["", ""],
  ["", ""],
  ["", ""],
  ["", ""],
  ["", ""],
  ["", "https://example.com/paper16.pdf"],
]
  // pyq: Array(SUBJECTS.length)
  //   .fill(0)
  //   .map((_, i) => (i === 0 ? [dspU1, dspU1] : [null, null])),
    
    
    

  // pyq:     Array(8).fill(0).map(() => Array(2).fill(dspU1)),
};

