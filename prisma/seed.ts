import { prisma } from '../src/lib/prisma'

async function seed() {
  await prisma.event.create({
    data: {
      id: "e9e1abc1-df56-4ead-b347-1c5d4e2507a7",
      title: "Unite Summit",
      slug: "unite-summit",
      details: "Um evento para devs apaixonados(as) por código!",
      maximumAttendees: 120,
    },
  })
}

seed().then(() => {
  console.log('Database seeded!')
  prisma.$disconnect()
})