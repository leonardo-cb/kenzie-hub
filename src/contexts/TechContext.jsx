import { createContext, useEffect, useState } from "react"
import { api } from "../api"
import { toast } from "react-toastify"

const TechContext = createContext()

const TechProvider = ( {children} ) => {

    const [ tech, setTech ] = useState({})

    function notifyError(){
        toast.error("Ops! Algo deu errado", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    }

    function notifySuccess(text){
        toast.success(text, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    }

    async function addTech(data){

        const token = localStorage.getItem("@token")

        const headers = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        try{
            const request = await api.post("/users/techs", data, headers)
            notifySuccess("Tecnologia adicionada com sucesso!")
        } catch (err) {
            console.log(err)
            notifyError()
        }
    }

    async function deleteTech(id){

        const token = localStorage.getItem("@token")

        const headers = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        try{
            const request = await api.delete(`/users/techs/${id}`, headers)
            notifySuccess("Tecnologia removida com sucesso!")
        } catch (err) {
            console.error(err)
            notifyError()
        }
    }

    async function editTech(data, id){

        const token = localStorage.getItem("@token")

        const headers = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        if(tech.status === data.status) {

            return notifyError()
            
        } else {

            try{
                const request = await api.put(`/users/techs/${id}`, data, headers)
                notifySuccess("Tecnologia editada com sucesso!")
            } catch (err) {
                console.log(err)
                notifyError()
            }

        }

    }

    return (
        <TechContext.Provider
        value = {{ 
            addTech, 
            setTech, 
            tech,
            deleteTech, 
            editTech }}>
            {children}
        </TechContext.Provider>
    )
}

export { TechContext, TechProvider }