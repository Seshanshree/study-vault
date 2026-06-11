import scheduleImg from "./assets/schedule.jpeg";

export const PASS = {
  schedule:  "sch001",
  timetable: "tt0002",
  syllabus:  "syl003",
  notes:     "nte004",
  records:   "rec005",
  pyq:       "pyq006",
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
  notes: Array(8).fill(0).map(() => ({
    units:     Array(5).fill("study-vault/src/assets/Hibernate 1 (intro to lazy loading).pdf"),
    internals: Array(3).fill(null),
  })),
  records: Array(4).fill(null),
  pyq:     Array(8).fill(0).map(() => Array(2).fill(null)),
};