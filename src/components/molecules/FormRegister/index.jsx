// React
import { createRef, useEffect, useState, useRef } from "react";
// API
import API from "../../../services/api";
// Helpers
import { postRegister } from "../../../helper/user";
import { registerSchema } from "../../../helper/FormValidation";
// Dependencies
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
// ContextAPI
import { useData } from "../../../providers/UserContext";
// Components
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import Text from "../../atoms/Text";
// Styles
import FormStyled from "./styles";

const FormRegister = () => {
  const ref = createRef();
  const [error, setError] = useState(null);
  const history = useHistory();
  const [snackOpen, setSnackOpen] = useState(false);
  const mounted = useRef(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    errors[Object.keys(errors)[0]]?.message && setSnackOpen(true);
    error && setSnackOpen(true);
  }, [errors, error]);

  const handleCloseSnack = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackOpen(false);
  };

  const handleForm = async (data) => {
    try {
      await API.post(postRegister(), {
        ...data,
        phone: "",
        address: [],
        cc: [],
        productor: false,
        shoppingCount: 0,
      });
      reset();
      history.push("/login");
    } catch (e) {
      console.log(e.message);
      if (e.message === "Request failed with status code 400") {
        setError("Email já cadastrado");
      }
    }
  };

  return (
    <FormStyled.Container>
      <FormStyled.Snackbar
        open={snackOpen}
        autoHideDuration={5000}
        onClose={handleCloseSnack}
        message={
          (errors && errors[Object.keys(errors)[0]]?.message) ||
          (error && error)
        }
      />
      <FormStyled
        onSubmit={handleSubmit(handleForm)}
        onClick={() => setSnackOpen(false)}
      >
        <Text weigth="semiBold" size="large">
          Registro
        </Text>
        <Input
          ref={ref}
          type="text"
          placeholder="Email"
          size="large"
          {...register("email")}
        />
        <Input
          ref={ref}
          type="password"
          placeholder="Senha"
          size="large"
          {...register("password")}
        />
        <Input
          ref={ref}
          type="text"
          placeholder="Nome"
          size="large"
          {...register("name")}
        />
        <Input
          ref={ref}
          type="number"
          placeholder="Idade"
          size="large"
          {...register("age")}
        />
        <Button type="submit" color="primary" size="large">
          Cadastrar
        </Button>
      </FormStyled>
      <FormStyled.Text>
        <p onClick={() => history.push("/login")}>
          Já é membro? <span>Entre</span>
        </p>
      </FormStyled.Text>
    </FormStyled.Container>
  );
};

export default FormRegister;
