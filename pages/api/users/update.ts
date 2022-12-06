import {updateUserDB} from '../db/users'; 

// nao e uma boa pratica usar o any , porque em alguns casos dá bug!

export default async (req:any, res:any) =>{
    const {u_id, u_name, u_email, u_password}  = req.body
    //let numero = Number (u_id)

    const updateUser = await updateUserDB(u_id,u_name, u_email, u_password)
    
    res.json({
        Message: 'Actualizado com sucesso!',
        data: updateUser
    })
}