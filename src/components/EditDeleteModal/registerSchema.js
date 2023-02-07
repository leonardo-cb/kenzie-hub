import * as yup from "yup";

const registerSchemaModal = yup.object().shape({
    status: yup.string().required("Selecione um status")
})

export { registerSchemaModal }