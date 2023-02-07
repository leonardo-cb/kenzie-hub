import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { TechContext } from "../../contexts/TechContext";
import { ButtonPrimary } from "../../pages/login/styled";
import { registerSchemaModal } from "./registerSchema";
import { ButtonDeleteStyled, DivButtonStyled, ModalBoxStyled, ModalStyled } from "./styled";

function EditDeleteModal( {deleteModalState, setDeleteModalState, techName} ){

    const { tech, deleteTech, editTech } = useContext(TechContext)

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onBlur",
        resolver: yupResolver(registerSchemaModal)
    })

    function submitDeletion(e){
        e.preventDefault()
        deleteTech(tech.id)
        setDeleteModalState(!deleteModalState)
    }

    function submitEdition(data){
        editTech(data, tech.id)
        setDeleteModalState(!deleteModalState)
    }

    return (
        <ModalStyled>
            <ModalBoxStyled>
                <div>
                    <h2>Tecnologia Detalhes</h2>
                    <button onClick={() => setDeleteModalState(!deleteModalState)}>X</button>
                </div>
                <form action="submit" onSubmit={handleSubmit(submitEdition)}>
                    <section>
                        <label htmlFor="title">Nome da tecnologia</label>
                        <input 
                        type="text" 
                        placeholder={tech.title}
                        id="title"
                        disabled={true}
                        />
                    </section>
                    <section>
                    <label htmlFor="status">Selecionar status</label>
                    <select name="status" id="status" {...register("status")}>
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                    </select>
                    </section>
                    <DivButtonStyled>
                        <ButtonPrimary type="submit">Editar Tecnologia</ButtonPrimary>
                        <ButtonDeleteStyled onClick={submitDeletion}>Excluir</ButtonDeleteStyled>
                    </DivButtonStyled>
                </form>
            </ModalBoxStyled>
        </ModalStyled>
    )
}

export { EditDeleteModal }