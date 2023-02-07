import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechContext } from "../../contexts/TechContext";
import { ButtonPrimary } from "../../pages/login/styled";
import { registerSchemaModal } from "./registerSchema";
import { ModalBoxStyled, ModalStyled } from "./styled";

function Modal( {modalState, setModalState} ){

    const { addTech } = useContext(TechContext)

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onBlur",
        resolver: yupResolver(registerSchemaModal)
    })

    function submitTech(data){
        addTech(data)
        setModalState(false)
    }

    return (
        <ModalStyled>
            <ModalBoxStyled>
                <div>
                    <h2>Cadastrar Tecnologia</h2>
                    <button onClick={() => setModalState(!modalState)}>X</button>
                </div>
                <form action="submit" onSubmit={handleSubmit(submitTech)}>
                    <section>
                        <label htmlFor="title">Nome</label>
                        <input 
                        type="text" 
                        placeholder="Nome da nova tecnologia"
                        id="title"
                        {...register("title")} />
                    {errors.title?.message && <span>{errors.title.message}</span>}
                    </section>
                    <section>
                    <label htmlFor="status">Selecionar status</label>
                    <select name="status" id="status" {...register("status")}>
                        <option value="">Selecione o status</option>
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                    </select>
                    {errors.status?.message && <span>{errors.status.message}</span>}
                    </section>
                    <ButtonPrimary type="submit">Cadastrar Tecnologia</ButtonPrimary>
                </form>
            </ModalBoxStyled>
        </ModalStyled>
    )
}

export { Modal }