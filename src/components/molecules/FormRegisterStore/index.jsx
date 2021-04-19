//React
import { createRef, useState } from "react";
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

const FormRegisterStore = () => {
  const [token] = useState(() => {
    const sessionToken = localStorage.getItem("token") || "";
    return JSON.parse(sessionToken);
  });
  const history = useHistory();
  const { userData, setUserData } = useData();
  const { getAllStores } = useStores();

  const ref = createRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(registerStoreSchema) });

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

  return (
    <form onSubmit={handleSubmit(handleForm)}>
      <Input
        ref={ref}
        type="text"
        placeholder="Nome da Loja"
        size="large"
        {...register("businessName")}
      />
      <p>{errors.businessName?.message}</p>
      <Input
        ref={ref}
        type="text"
        placeholder="Razão Social"
        size="large"
        {...register("registeredName")}
      />
      <p>{errors.registeredName?.message}</p>
      <Input
        ref={ref}
        type="text"
        placeholder="CNPJ"
        size="large"
        {...register("cnpj")}
      />
      <p>{errors.cnpj?.message}</p>
      <Input
        ref={ref}
        type="text"
        placeholder="Descreva sua loja!"
        size="large"
        {...register("description")}
      />
      <p>{errors.description?.message}</p>
      <Button type="submit" color="primary" size="large">
        Cadastrar
      </Button>
    </form>
  );
};
export default FormRegisterStore;
