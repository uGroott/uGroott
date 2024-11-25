import React from 'react';
import type { Student } from '../data/students';
import { Award, BookOpen } from 'lucide-react';

interface ResultCardProps {
  student: Student;
}

export default function ResultCard({ student }: ResultCardProps) {
  const calculateSGPA = () => {
    let totalCredits = 0;
    let totalGradePoints = 0;

    student.marks.forEach(mark => {
      const total = mark.internal + mark.external;
      const gradePoints = getGradePoints(mark.grade);
      totalCredits += mark.credits;
      totalGradePoints += (gradePoints * mark.credits);
    });

    return (totalGradePoints / totalCredits).toFixed(2);
  };

  const getGradePoints = (grade: string) => {
    const gradePoints: { [key: string]: number } = {
      'A+': 10, 'A': 9, 'B+': 8, 'B': 7, 'C+': 6, 'C': 5, 'D': 4, 'F': 0
    };
    return gradePoints[grade] || 0;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl w-full mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 pb-6 border-b border-gray-200">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">{student.name}</h2>
          <div className="space-y-1">
            <p className="text-gray-600">Roll Number: {student.rollNumber}</p>
            <p className="text-gray-600">Department: {student.department}</p>
            <p className="text-gray-600">Semester: {student.semester} | Batch: {student.batch}</p>
          </div>
        </div>
        <div className="mt-4 md:mt-0 flex items-center gap-3 bg-indigo-50 px-6 py-3 rounded-lg">
          <Award className="text-indigo-600" size={28} />
          <div>
            <p className="text-sm text-indigo-600 font-medium">Semester SGPA</p>
            <p className="text-3xl font-bold text-indigo-700">{calculateSGPA()}</p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {student.marks.map((mark, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <BookOpen className="text-indigo-600" size={20} />
                  <h3 className="font-semibold text-gray-800">{mark.subject}</h3>
                </div>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full font-medium">
                  {mark.credits} Credits
                </span>
              </div>
              
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Internal (30)</span>
                    <span className="font-medium text-gray-800">{mark.internal}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div
                      className="bg-green-500 h-1.5 rounded-full"
                      style={{ width: `${(mark.internal / 30) * 100}%` }}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">External (70)</span>
                    <span className="font-medium text-gray-800">{mark.external}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div
                      className="bg-blue-500 h-1.5 rounded-full"
                      style={{ width: `${(mark.external / 70) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex justify-between pt-2 border-t border-gray-200">
                  <span className="font-medium text-gray-700">Grade</span>
                  <span className="font-bold text-indigo-600">{mark.grade}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}