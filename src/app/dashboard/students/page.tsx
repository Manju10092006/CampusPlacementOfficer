import { prisma } from "@/lib/prisma";
import { StudentClient } from "./client";

export const dynamic = "force-dynamic";

export default async function StudentRosterPage() {
  const students = await prisma.student.findMany({
    include: {
      programs: {
        include: { program: true }
      }
    },
    orderBy: { rollNumber: 'asc' }
  });

  const formattedStudents = students.map(s => ({
    id: s.id,
    roll: s.rollNumber,
    name: s.name,
    branch: s.department,
    email: s.email || "N/A",
    program: s.programs.length > 0 ? s.programs[0].program.name : "None"
  }));

  return <StudentClient initialStudents={formattedStudents} />;
}
