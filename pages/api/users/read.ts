import {getUsersDB} from '../db/users'; 

// nao e uma boa pratica usar o any , porque em alguns casos dá bug!

export default async (req:any, res:any) =>{
    const getUsers = await getUsersDB()

    res.json({
        Message: 'Usuários cadastrados',
        data: getUsers
    })
}