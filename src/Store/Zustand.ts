import { create } from "zustand";



export let dataUser = create((set) => ({
    data: [
        {

           id:1,
        status: true,
        phone: 919023439
        }
    ],

    deleteUser: (id) => set((state) => ({ data: state.data.filter((user) => user.id !== id) }))
}));

