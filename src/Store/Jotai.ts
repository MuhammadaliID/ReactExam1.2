import { atom } from "jotai";


let dataUser = atom([
    {
        id: 1,
        name: "Muhammadali",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFRPWm9XgiagoZOS1r5UmtkqOScHUn9Y86fr3d9EgcIg&s=10"
    }
])



export let DataUser = atom(
    (get) => get(dataUser)
)

export let DeleteUser = atom(
    (get) => get(dataUser),
    (get, set, id) => {
        const currentData = get(dataUser)
        const newData = currentData.filter((user) => user.id !== id)
        set(dataUser, newData)
    }
)