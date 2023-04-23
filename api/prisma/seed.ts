import { PrismaClient } from "@prisma/client"
import { cities } from "./seed-data/cities"
const prisma = new PrismaClient()

async function main() {
  const city = await prisma.city.createMany({
    data: cities,
  })

  console.log({ city })
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
