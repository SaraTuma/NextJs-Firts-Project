import exp from 'constants'
import { prisma } from './db'

// a pasta DB é como se fosse o model da api ou MVC

export async function getUsersDB(){
    return prisma.users.findMany()
}

// Não deu erro em data porque os parametros têm os mesmos nomes dos atributos da BD

export async function createUserDB(u_name: string, u_email: string, u_password: string) {
    return prisma.users.create({
        data: {
            u_name,
            u_email,
            u_password
        }
    })
}

export async function updateUserDB(u_id: number,u_name: string, u_email: string, u_password: string) {
    return prisma.users.update({
        where:{
            u_id
        },
        data:{
            u_name,
            u_email,
            u_password
        }

    })
}

export async function deleteUserDB(u_id : number) {
    return prisma.users.delete({
        where:{
            u_id
        }
    })
}