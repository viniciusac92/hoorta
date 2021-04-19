//React
import { createRef, useState, useRef, useEffect } from "react";
//API
import API from "../../../services/api";
//ContextAPI
import { useData } from "../../../providers/UserContext";
import { useStores } from "../../../providers/StoresContext";
//Dependencias
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router";
//Helpers
import { registerStoreSchema } from "../../../helper/FormValidation";
import { postStore, getUserStore } from "../../../helper/stores";
import { patchUser } from "../../../helper/user";
//Components
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import { SnackbarStyled } from "./style";
import TextArea from "../../atoms/TextArea";

const FormRegisterStore = () => {
  const [token] = useState(() => {
    const sessionToken = localStorage.getItem("token") || "";
    return JSON.parse(sessionToken);
  });
  const history = useHistory();
  const { userData, setUserData } = useData();
  const { getAllStores } = useStores();
  const mounted = useRef(false);

  const ref = createRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(registerStoreSchema) });
  const [snackOpen, setSnackOpen] = useState(false);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    errors[Object.keys(errors)[0]]?.message && setSnackOpen(true);
  }, [errors]);

  const handleForm = async (data) => {
    try {
      await API.post(
        postStore(),
        { ...data, userId: userData.id, rating: [] },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const response = await API.patch(
        patchUser(userData.id),
        { productor: true },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const storeResponse = await API.get(getUserStore(userData.id), {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      });

      const userStoreData = storeResponse.data[0];

      setUserData({ ...response.data, storeId: userStoreData.id });

      getAllStores();
      reset();
      history.push("/profile");
    } catch (e) {
      console.log(e);
    }
  };

  const handleCloseSnack = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackOpen(false);
  };

  return (
    <form onSubmit={handleSubmit(handleForm)}>
      <SnackbarStyled
        open={snackOpen}
        autoHideDuration={5000}
        onClose={handleCloseSnack}
        message={errors && errors[Object.keys(errors)[0]]?.message}
      />
      <Input
        ref={ref}
        type="text"
        placeholder="Nome da Loja"
        size="large"
        {...register("businessName")}
      />
      <Input
        ref={ref}
        type="text"
        placeholder="Razão Social"
        size="large"
        {...register("registeredName")}
      />
      <Input
        ref={ref}
        type="text"
        placeholder="CNPJ"
        size="large"
        {...register("cnpj")}
      />
      <TextArea
        ref={ref}
        type="text"
        placeholder="Descreva sua loja!"
        size="large"
        {...register("description")}
      />
      <Button type="submit" color="primary" size="large">
        Cadastrar
      </Button>
    </form>
  );
};
export default FormRegisterStore;
