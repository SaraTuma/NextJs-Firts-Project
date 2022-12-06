import {createUserDB} from '../db/users'; 

// nao e uma boa pratica usar o any , porque em alguns casos dá bug!

export default async (req:any, res:any) =>{
    const {u_name, u_email, u_password}  = req.body

    const createUser = await createUserDB(u_name, u_email, u_password)
    
    res.json({
        Message: 'Adicionado com sucesso!',
        data: createUser
    })
}