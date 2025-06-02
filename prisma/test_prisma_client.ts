import {PrismaClient} from "@prisma/client"

const client = new PrismaClient()
async function main() {
    let n = await client.post.findMany()
    console.log("n:", n)
}

main()
    .catch(e => {throw e})
    .finally(async () => {await client.$disconnect()})
