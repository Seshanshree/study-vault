import scheduleImg from "./assets/schedule.jpeg"; //sem schedule
import timetableImg from "./assets/timetable.jpeg"; //timetable
// syllabus images
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
//lab files
import dspobservation1to5 from "/pdffiles/DSP_observation_1-5.pdf";
import adclab from "/pdffiles/ADC LAB.pdf";
//dc
import dc1 from "/pdffiles/DC unit-1.pdf";
import dc23 from "/pdffiles/DC unit-2&3.pdf";
//dsp
import dspU1 from "/pdffiles/DSP internal Assessment-1 portion.pdf";
import dspqp1 from "/pdffiles/DSP QP1.pdf";
import dspqp2 from "/pdffiles/DSP QP2.pdf";
import dspu2 from "/pdffiles/DSP_Unit_2_Notes.pdf";
import dspu21 from "/pdffiles/DSP_unit_2_IIR _DESIGN_PBMS-2.pdf";
import dspu22 from "/pdffiles/DSP_unit_2_IIR DESIGN-DESIGN STEPS-1.pdf";
import dspu23 from "/pdffiles/DSP-Unit 2- IIR filter Design.pdf";
//wireless communication
import wc1 from "/pdffiles/wc_unit_1.pptx";
import wc2 from "/pdffiles/wc_unit_2.pptx";
import wciat1 from "/pdffiles/wc IAT1.pdf";
import wciat2 from "/pdffiles/WC IAT-2.pdf";
//rf and transmission lines
import tlrf1 from "/pdffiles/TL&RF unit-1.pdf";
import tlrf2 from "/pdffiles/TL&RF unit-2 IAT-1 portion.pdf"; 
import tlrfqp1 from "/pdffiles/tlrfqp1.pdf";
import tlrfqp2 from "/pdffiles/tlrfqp2.pdf";
import tlrfiat2 from "/pdffiles/tlrf_iat2.pdf";
import tlrf_assignment_iat2 from "/pdffiles/tlrf_assignment_iat2.pdf";
import tlrf_iat2 from "/pdffiles/TL & RF internal -2 10 mark.pdf";

//fpga
import fpga1 from "/pdffiles/fpga1.pdf";
//human assist devices
import hadiat1 from "/pdffiles/HAD-IAT-1.pdf";


export const PASS = {
  sub0: "dc7",
  sub1: "dsp5",
  sub2: "wire",
  sub3: "rfv",
  sub4: "fpgaa",
  sub5: "hads",
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
      units: [dc1, dc23,],
      unitTitles: [
        "DC Unit 1 — Notes",
        "DC Unit 2 & 3 — Notes",
        //"Unit 3 — Notes",
        //"Unit 4 — Notes",
        //"Unit 5 — Notes",
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
      units: [dspU1, dspu2, dspu21, dspu22, dspu23],
      unitTitles: [
        "Unit 1 — Notes",
        "Unit 2 — Notes",
        "Unit 2 - IIR Design PBMS-2",
        "Unit 2 - IIR Design - Design Steps-1",
        "Unit 2 - IIR Filter Design",
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
      units: [wc1, wc2, wciat2, "", ""],
      unitTitles: [
        "WC Unit 1 — Notes",
        "WC Unit 2 — Notes",
        "IAT 2 — Notes",
        "Unit 4 — Notes",
        "Unit 5 — Notes",
      ],
      internals: [wciat1, wciat2, null],
      internalTitles: [
        "WC IAT 1 — Question and Answer",
        "WC IAT 2 — Question and Answer",
        "Internal 3 — Question Paper",
      ],
    },
    // 3 — Transmission Lines And RF Systems
    {
      units: [tlrf1, tlrf2, tlrfiat2, tlrf_assignment_iat2,tlrf_iat2],
      unitTitles: [
        "Unit 1 — Notes",
        "Unit 2 — Notes",
        "IAT - 2 Notes",
        "IAT - 2 Assignment",
        "IAT - 2 10 Mark Notes",
      ],
      internals: [null, tlrf_iat2, null],
      internalTitles: [
        "Internal 1 — Question Paper",
        "Internal 2 — Answer",
        "Internal 3 — Question Paper",
      ],
    },
    // 4 — Digital design with FPGA
    {
      units: [fpga1, "", "", "", ""],
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
    // 5 — Human Assist Devices
    {
      units: ["", "", "", "", ""],
      unitTitles: [
        "Unit 1 — Notes",
        "Unit 2 — Notes",
        "Unit 3 — Notes",
        "Unit 4 — Notes",
        "Unit 5 — Notes",
      ],
      internals: [hadiat1, null, null],
      internalTitles: [
        "Internal 1 - Question with Answer",
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
    [tlrfqp1, tlrfqp2],
    ["", ""],
    ["", ""]
  ],
  // pyq: Array(SUBJECTS.length)
  //   .fill(0)
  //   .map((_, i) => (i === 0 ? [dspU1, dspU1] : [null, null])),

  // pyq:     Array(8).fill(0).map(() => Array(2).fill(dspU1)),
};
