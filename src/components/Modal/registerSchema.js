import * as yup from "yup";

const registerSchemaModal = yup.object().shape({
    title: yup.string().required("O nome é obrigatório")
    .min(2, "Nome precisa ter no mínimo 2 caracteres")
    .max(150, "Nome pode ter no máximo 150 caracteres "),
    status: yup.string().required("Selecione um status")
})

export { registerSchemaModal }