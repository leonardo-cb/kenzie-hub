import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api"
import { toast } from "react-toastify";
import { useEffect } from "react";

const UserContext = createContext()

const UserProvider = ( {children} ) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const navigate = useNavigate()

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

    function notifySuccess(){
        toast.success("Conta criada com sucesso!", {
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

    async function submitRegister(data){
        try {
            const request = await api.post("/users", data)
            notifySuccess()
            setTimeout(() => {
                navigate("/login")
            }, 5000)
        } catch (err) {
            notifyError()
            console.log(err)
        }
    }

    async function submitLogin(data){
        try {
            setLoading(true)
            const request = await api.post("/sessions", data)
            const { token, user: userResponse } = request.data
            setUser(userResponse)
            localStorage.setItem("@token", token)
            localStorage.setItem("@id", userResponse.id)
            navigate("/dashboard")
        } catch (err) {
            notifyError()
            console.log(err)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() =>{
        async function loadUser() {

            const token = localStorage.getItem("@token")

            if(!token){
                setLoading(false)
                return;
            }

            const headers = {
                headers: {
                    Authorization: `Bearer: ${token}`
                }
            }

            try {
                const { data } = await api.get("/profile", headers)
                setUser(data)
            } catch (err) {
                console.log(err)
                localStorage.removeItem("@id")
                localStorage.removeItem("@token")
                navigate("/login")
            } finally {
                setLoading(false)
            }
        }

        loadUser()
    }, [user])


    return (
        <UserContext.Provider 
        value ={{ submitLogin, submitRegister, loading, user }}>
            {children}
        </UserContext.Provider>
    )


}

export { UserContext, UserProvider }