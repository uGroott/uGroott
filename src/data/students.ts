export interface Student {
  id: string;
  name: string;
  rollNumber: string;
  password: string;
  department: string;
  semester: number;
  batch: string;
  marks: {
    subject: string;
    credits: number;
    internal: number;
    external: number;
    maxMarks: number;
    grade: string;
  }[];
}

export const students: Student[] = [
  {
    id: '1',
    name: 'Aditya Rajput',
    rollNumber: 'CSE2024001',
    password: 'aditya123',
    department: 'Computer Science & Engineering',
    semester: 6,
    batch: '2021-2025',
    marks: [
      { subject: 'Database Management Systems', credits: 4, internal: 28, external: 58, maxMarks: 100, grade: 'A' },
      { subject: 'Operating Systems', credits: 4, internal: 27, external: 55, maxMarks: 100, grade: 'A' },
      { subject: 'Computer Networks', credits: 4, internal: 29, external: 57, maxMarks: 100, grade: 'A+' },
      { subject: 'Web Technologies', credits: 3, internal: 28, external: 54, maxMarks: 100, grade: 'A' },
      { subject: 'Software Engineering', credits: 3, internal: 27, external: 56, maxMarks: 100, grade: 'A' }
    ]
  },
  {
    id: '2',
    name: 'Priyanka Sharma',
    rollNumber: 'CSE2024002',
    password: 'priyanka123',
    department: 'Computer Science & Engineering',
    semester: 6,
    batch: '2021-2025',
    marks: [
      { subject: 'Database Management Systems', credits: 4, internal: 29, external: 59, maxMarks: 100, grade: 'A+' },
      { subject: 'Operating Systems', credits: 4, internal: 28, external: 56, maxMarks: 100, grade: 'A' },
      { subject: 'Computer Networks', credits: 4, internal: 27, external: 55, maxMarks: 100, grade: 'A' },
      { subject: 'Web Technologies', credits: 3, internal: 29, external: 58, maxMarks: 100, grade: 'A+' },
      { subject: 'Software Engineering', credits: 3, internal: 28, external: 57, maxMarks: 100, grade: 'A' }
    ]
  },
  {
    id: '3',
    name: 'Rahul Malhotra',
    rollNumber: 'CSE2024003',
    password: 'rahul123',
    department: 'Computer Science & Engineering',
    semester: 6,
    batch: '2021-2025',
    marks: [
      { subject: 'Database Management Systems', credits: 4, internal: 27, external: 55, maxMarks: 100, grade: 'A' },
      { subject: 'Operating Systems', credits: 4, internal: 28, external: 57, maxMarks: 100, grade: 'A' },
      { subject: 'Computer Networks', credits: 4, internal: 26, external: 54, maxMarks: 100, grade: 'B+' },
      { subject: 'Web Technologies', credits: 3, internal: 27, external: 53, maxMarks: 100, grade: 'B+' },
      { subject: 'Software Engineering', credits: 3, internal: 28, external: 56, maxMarks: 100, grade: 'A' }
    ]
  },
  {
    id: '4',
    name: 'Kavya Reddy',
    rollNumber: 'CSE2024004',
    password: 'kavya123',
    department: 'Computer Science & Engineering',
    semester: 6,
    batch: '2021-2025',
    marks: [
      { subject: 'Database Management Systems', credits: 4, internal: 30, external: 58, maxMarks: 100, grade: 'A+' },
      { subject: 'Operating Systems', credits: 4, internal: 29, external: 57, maxMarks: 100, grade: 'A+' },
      { subject: 'Computer Networks', credits: 4, internal: 28, external: 56, maxMarks: 100, grade: 'A' },
      { subject: 'Web Technologies', credits: 3, internal: 29, external: 57, maxMarks: 100, grade: 'A+' },
      { subject: 'Software Engineering', credits: 3, internal: 28, external: 55, maxMarks: 100, grade: 'A' }
    ]
  }
];