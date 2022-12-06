import {deleteUserDB} from '../db/users'; 

// nao e uma boa pratica usar o any , porque em alguns casos dá bug!

export default async (req:any, res:any) =>{
    const {u_id}  = req.body
    //let numero = Number (u_id)

    const updateUser = await deleteUserDB(u_id)
    
    res.json({
        Message: 'Eliminado com sucesso!',
        data: updateUser
    })
}