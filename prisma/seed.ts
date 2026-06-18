import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding database with KMIT Placement Data...');

  // 1. Create Admin & TPO Users
  const admin = await prisma.user.upsert({
    where: { email: 'admin@careeros.com' },
    update: {},
    create: {
      email: 'admin@careeros.com',
      name: 'Super Admin',
      role: 'ADMIN',
      status: 'APPROVED',
    },
  })

  const tpo = await prisma.user.upsert({
    where: { email: 'tpo@kmit.in' },
    update: {},
    create: {
      email: 'tpo@kmit.in',
      name: 'Neil Rao',
      role: 'TPO',
      status: 'APPROVED',
    },
  })

  // 2. Create College
  const kmit = await prisma.college.upsert({
    where: { tpoId: tpo.id },
    update: {},
    create: {
      name: 'Keshav Memorial Institute of Technology',
      university: 'JNTUH',
      departments: 'CSE, IT, CSE-AIML, CSE-DS',
      partnershipType: 'External Placement Partner',
      tpoId: tpo.id,
    },
  })

  // 3. Create Programs
  const crt = await prisma.program.create({
    data: { name: 'CRT Level 2 (2025)', description: 'Campus Recruitment Training' }
  })
  const interviewMaster = await prisma.program.create({
    data: { name: 'Interview Master Pro', description: 'Advanced DSA and Interview Prep' }
  })

  // 4. Create Students & Placements
  const departments = ['CSE', 'IT', 'CSE-AIML', 'CSE-DS']
  
  // High-value 2025-26 Placements
  const placements2025 = [
    { company: 'Amazon', ctc: 80.0, role: 'SDE 1' },
    { company: 'Google', ctc: 52.0, role: 'Software Engineer' },
    { company: 'ServiceNow', ctc: 42.0, role: 'Software Engineer' },
    { company: 'Salesforce', ctc: 47.0, role: 'MTS' },
    { company: 'Intuit', ctc: 49.8, role: 'SDE 1' },
    { company: 'JPMC', ctc: 24.0, role: 'Analyst' },
    { company: 'Oracle', ctc: 32.0, role: 'MTS' },
  ]

  let rollCounter = 1;
  for (const placement of placements2025) {
    const dept = departments[Math.floor(Math.random() * departments.length)]
    const roll = `21BD1A05${rollCounter.toString().padStart(2, '0')}`
    rollCounter++

    const student = await prisma.student.create({
      data: {
        name: `Student ${rollCounter}`,
        rollNumber: roll,
        department: dept,
        email: `student${rollCounter}@kmit.in`,
        collegeId: kmit.id,
        programs: {
          create: {
            programId: interviewMaster.id,
            status: 'COMPLETED',
            progress: 100
          }
        }
      }
    })

    await prisma.placement.create({
      data: {
        company: placement.company,
        ctc: placement.ctc,
        role: placement.role,
        year: '2025-26',
        studentId: student.id,
      }
    })
  }

  // Generate some bulk dummy data for past years
  const pastYears = ['2024-25', '2023-24', '2022-23', '2021-22']
  const massRecruiters = ['TCS', 'Infosys', 'Cognizant', 'Accenture', 'Wipro', 'Capgemini']
  
  for (const year of pastYears) {
    for(let i=0; i<10; i++) {
      const dept = departments[Math.floor(Math.random() * departments.length)]
      const roll = `${year.substring(2,4)}BD1A${Math.floor(Math.random() * 9000)}`
      
      const student = await prisma.student.create({
        data: {
          name: `Alumni ${roll}`,
          rollNumber: roll,
          department: dept,
          collegeId: kmit.id,
        }
      })

      await prisma.placement.create({
        data: {
          company: massRecruiters[Math.floor(Math.random() * massRecruiters.length)],
          ctc: Math.floor(Math.random() * 5) + 3.5, // 3.5 to 8.5 LPA
          role: 'Systems Engineer',
          year: year,
          studentId: student.id,
        }
      })
    }
  }

  console.log('Database seeded successfully.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
