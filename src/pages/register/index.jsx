import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Container } from "../../components/container";
import logo from "../../img/Logo.svg"
import { ButtonPrimary } from "../login/styled";
import { ButtonSmall, FormStyled } from "./styled";
import { yupResolver } from "@hookform/resolvers/yup"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registerSchema } from "./registerSchema";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

function RegisterPage() {

    const { submitRegister } = useContext(UserContext)
    
    const navigate = useNavigate()
    
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onBlur",
        resolver: yupResolver(registerSchema)
    })

    function returnPage(){
        navigate(-1)
    }

    return (
        <Container>
            <header>
                <img src={logo} alt="Kenzie Hub" />
                <ButtonSmall onClick={returnPage}>Voltar</ButtonSmall>
            </header>
            <FormStyled onSubmit={handleSubmit(submitRegister)} noValidate>
                <h2>Crie sua conta</h2>
                <small>Rapido e grátis, vamos nessa</small>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input 
                    type="text" 
                    placeholder="Digite aqui seu nome"
                    id="name"
                    {...register("name")} />
                    {errors.name?.message && <span>{errors.name.message}</span>}
                </div>
                <div>
                    <label htmlFor="email">E-mail:</label>
                    <input 
                    type="email"
                    placeholder="Digite aqui seu e-mail"
                    id="email"
                    {...register("email")} />
                    {errors.email?.message && <span>{errors.email.message}</span>}
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input 
                    type="password"
                    placeholder="Digite aqui sua senha"
                    id="password"
                    {...register("password")} />
                    {errors.password?.message && <span>{errors.password.message}</span>}
                </div>
                <div>
                    <label htmlFor="confirm-password">Confirmar Senha:</label>
                    <input 
                    type="password"
                    placeholder="Digite aqui sua senha"
                    id="confirm-password"
                    {...register("confirm_password")} />
                    {errors.confirm_password?.message && <span>{errors.confirm_password.message}</span>}
                </div>
                <div>
                    <label htmlFor="bio">Bio:</label>
                    <input 
                    type="text"
                    placeholder="Fale sobre você"
                    id="bio"
                    {...register("bio")} />
                    {errors.bio?.message && <span>{errors.bio.message}</span>}
                </div>
                <div>
                    <label htmlFor="contact">Contato:</label>
                    <input 
                    type="tel"
                    placeholder="Digite aqui seu número telefonico"
                    id="contact"
                    {...register("contact")} />
                    {errors.contact?.message && <span>{errors.contact.message}</span>}
                </div>
                <div>
                    <label htmlFor="module">Selecionar Módulo:</label>
                    <select name="module" id="module" {...register("course_module")}>
                        <option value="">Selecionar Módulo</option>
                        <option value="Primeiro Modulo">Primeiro Módulo</option>
                        <option value="Segundo Modulo">Segundo Módulo</option>
                        <option value="Terceiro Modulo">Terceiro Módulo</option>
                        <option value="Quarto Modulo">Quarto Módulo</option>
                    </select>
                    {errors.course_module?.message && <span>{errors.course_module.message}</span>}
                </div>
                <ButtonPrimary type="submit">Cadastrar</ButtonPrimary>
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

export { RegisterPage }