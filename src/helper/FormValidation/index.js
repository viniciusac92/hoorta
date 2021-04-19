import * as yup from "yup";

// REGEX
const PHONE_REGEX = /^\([1-9]{2}\) [9]{1}[6-9]{1}[0-9]{3}\-[0-9]{4}$/;

const CNPJ_REGEX = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/;

const CEP_REGEX = /^\d{5}-\d{3}$/;

const EXPIRATION_REGEX = /^\d{2}\/\d{4}$/;

const CC_REGEX = /^[0-9]{16}$/;

const STATE_REGEX = /^[A-Z]{2}$/;

const CVV_REGEX = /^[0-9]{3}$/;

// Error Messages
const required = "é obrigatório!";

// Schemas
export const loginSchema = yup.object().shape({
  email: yup.string().email("Email inválido").required(`Email ${required}`),
  password: yup
    .string()
    .min(6, "A senha deve conter no mínimo 6 caracteres")
    .required(`Senha ${required}`),
});

export const registerSchema = yup.object().shape({
  email: yup.string().email("Email inválido").required(`Email ${required}`),
  password: yup
    .string()
    .min(6, "A senha deve conter no mínimo 6 caracteres")
    .required(`Senha ${required}`),
  name: yup
    .string()
    .strict()
    .max(20, "Máximo 10 caracteres")
    .required(`Nome ${required}`),
  age: yup
    .number()
    .transform((ageData) => (isNaN(ageData) ? undefined : ageData))
    .required(`Idade ${required}`)
    .min(18, "Mínimo 18 anos"),
});

export const updateUserSchema = yup.object().shape({
  name: yup.string().max(20, "Máximo 10 caracteres"),
  phone: yup.string().matches(PHONE_REGEX, {
    message: "Número inválido, formato requerido: (XX) 9XXXX-XXXX",
    excludeEmptyString: true,
  }),
  age: yup.number().min(18, "Mínimo 18 anos").required(`Idade ${required}`),
  road: yup.string(),
  number: yup.string().max(4, "Máximo de 4 dígitos"),
  city: yup.string(),
  state: yup.string().matches(STATE_REGEX, {
    message: "Estado Inválido",
    excludeEmptyString: true,
  }),
  cep: yup.string().matches(CEP_REGEX, {
    message: "Cep inválido, formato requerido: XXXXX-XXX",
    excludeEmptyString: true,
  }),
  cc_number: yup.string().matches(CC_REGEX, {
    message: "Número inválido",
    excludeEmptyString: true,
  }),
  expiration: yup.string().matches(EXPIRATION_REGEX, {
    message: "Data inválida, formato requerido: XX/XXXX",
    excludeEmptyString: true,
  }),
  cvv: yup.string().matches(CVV_REGEX, {
    message: "Número inválido",
    excludeEmptyString: true,
  }),
});

export const registerStoreSchema = yup.object().shape({
  businessName: yup.string().required(`Nome da Loja ${required}`),
  registeredName: yup.string().required(`Razão Social ${required}`),
  cnpj: yup
    .string()
    .matches(CNPJ_REGEX, {
      message: "Número inválido, formato requerido: XX.XXX.XXX/0001-XX",
    })
    .required(`CNPJ ${required}`),
  description: yup.string().required(`Descrição é ${required}`),
});

export const updateStoreSchema = yup.object().shape({
  businessName: yup.string(),
  description: yup.string(),
});

export const registerProductSchema = yup.object().shape({
  name: yup.string().required(required),
  price: yup.number().required(required),
  description: yup.string().required(required),
});

export const updateProductSchema = yup.object().shape({
  name: yup.string(),
  price: yup.number().nullable().default(0),
  description: yup.string(),
});
