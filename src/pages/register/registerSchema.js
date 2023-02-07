import * as yup from "yup";

const registerSchema = yup.object().shape({
    name: yup.string().required("O nome é obrigatório")
    .min(3, "Nome precisa ter no mínimo 3 caracteres")
    .max(150, "Nome pode ter no máximo 150 caracteres "),
    email: yup.string().required("O e-mail é obrigatório")
    .email("Digite um e-mail válido"),
    password: yup.string().required("A senha é obrigatória")
    .matches(/(?=.*?[A-Z])/, "É necessário ao menos uma letra maiúscula")
    .matches(/(?=.*?[a-z])/, "É necessário ao menos uma letra minúscula")
    .matches(/(?=.*?[0-9])/, "É necessário ao menos um número")
    .matches(/(?=.*?[#?!@$%^&*-])/, "É necessário ao menos um caracter especial")
    .min(8, "É necessário ao menos 8 caracteres"),
    confirm_password: yup.string().required("Por favor, confirme sua senha")
    .oneOf([yup.ref("password")], "As senhas não são iguais"),
    bio: yup.string().required("A bio é obrigatória"),
    contact: yup.string().required("O contato é obrigatório")
    .matches(/^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/, "Insira um contato no formato (DD) XXXXX-XXXX"),
    course_module: yup.string().required("O módulo é obrigatório")
})

export { registerSchema }