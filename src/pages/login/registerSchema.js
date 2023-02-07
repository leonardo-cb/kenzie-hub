import * as yup from "yup";

const registerSchema = yup.object().shape({
    email: yup.string().required("O e-mail é obrigatório")
    .email("Digite um e-mail válido"),
    password: yup.string().required("A senha é obrigatória")
})

export { registerSchema }