import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import { Container } from "../../components/container"
import logo from "../../img/Logo.svg"
import { ButtonDark, ButtonPrimary, FormStyled, ImgStyled } from "./styled"
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup"
import { ToastContainer } from "react-toastify";
import { registerSchema } from "./registerSchema";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

function LoginPage() {

    const { submitLogin, loading } = useContext(UserContext)
    
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onBlur",
        resolver: yupResolver(registerSchema)
    })

    function handleNavigate(e) {
        e.preventDefault()
        navigate("/register")
    }

    return (
        <Container>
            <ImgStyled src={logo} alt="Kenzie Hub" />
            <FormStyled onSubmit={handleSubmit(submitLogin)} noValidate>
                <h2>Login</h2>
                <div>
                    <label htmlFor="email">E-mail</label>
                    <input 
                    type="email" 
                    placeholder="Digite aqui seu e-mail"
                    id="email"
                    disabled={loading}
                    {...register("email")}/>
                    {errors.email?.message && <span>{errors.email.message}</span>}
                </div>
                <div>
                    <label htmlFor="password">Senha</label>
                    <input 
                    type="password"
                    placeholder="Digite aqui sua senha"
                    id="password"
                    disabled={loading}
                    {...register("password")}/>
                    {errors.password?.message && <span>{errors.password.message}</span>}
                </div>
                <ButtonPrimary 
                type="submit"
                disabled={loading}>{loading ? "Carregando" : "Entrar"}</ButtonPrimary>            
                <small>Ainda não possuí uma conta?</small>
                <ButtonDark onClick={handleNavigate}>Cadastre-se</ButtonDark>
            </FormStyled>
            <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            />
        </Container>
    )
}

export { LoginPage }