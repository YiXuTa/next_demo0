import {PrismaClient} from "@prisma/client"

const client = new PrismaClient()
// async function main() {
//     let result = await client.user.create({
//         data: {
//             name: 'Alice',
//             email: '1@1.com',
//             posts: {
//                 create: {
//                     title:'second',
//                     content: '2',
//                 }
//             }
//         }
//     })
//     console.log("result:", result)
// }

async function main() {
    let result = await client.a.findMany({
    })
    console.log("result:", result)
}

main()
    .catch(e => {throw e})
    .finally(async () => {await client.$disconnect()})
