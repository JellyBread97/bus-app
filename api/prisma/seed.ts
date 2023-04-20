import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()
async function main() {
  const city = await prisma.city.createMany({
    data: [
      {
        name: "London",
        slug: "london",
      },
      {
        name: "Prague",
        slug: "prague",
      },
      {
        name: "Warsaw",
        slug: "warsaw",
      },
    ],
  })

  console.log({ city })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async e => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
