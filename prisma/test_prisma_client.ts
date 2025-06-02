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
    let result = await client.user.findMany({
        skip: 5, // 分页，从第6条查起
        take: 2, // 分页，查2条
        where: {  // GraphQL筛选
            name: {
                startsWith: 'A'
            }
        }
    })
    console.log("result:", result)
}

main()
    .catch(e => {throw e})
    .finally(async () => {await client.$disconnect()})
