//React
import { createRef, useState } from "react";
//API
import API from "../../../services/api";
//ContextAPI
import { useData } from "../../../providers/UserContext";
//Dependencias
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router";
//Helpers
import { registerStoreSchema } from "../../../helper/FormValidation";
import { patchStore, getOneStore } from "../../../helper/stores";
import { patchUser } from "../../../helper/user";
//Components
import Input from "../../atoms/Input";
import TextArea from "../../atoms/TextArea";
import Button from "../../atoms/Button";
import { useStores } from "../../../providers/StoresContext";
import { FormStyled } from "./style";

const FormEditStore = ({ currentStoreId, toggleModal }) => {
  const [token] = useState(() => {
    const sessionToken = localStorage.getItem("token") || "";
    return JSON.parse(sessionToken);
  });
  const history = useHistory();
  const { userData } = useData();
  const { storeData, setStoreData } = useStores();

  const ref = createRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(registerStoreSchema) });

  const handleForm = async (data) => {
    try {
      await API.patch(
        patchStore(currentStoreId),
        { ...data, userId: userData.id, rating: [] },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const response = await API.get(getOneStore(currentStoreId), {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      });

      setStoreData(response.data);
      reset();
      setTimeout(() => {
        toggleModal();
      }, 800);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <FormStyled>
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
        <TextArea
          ref={ref}
          type="text"
          placeholder="Descreva sua loja!"
          size="large"
          {...register("description")}
        />
        <p>{errors.description?.message}</p>
        <Button type="submit" color="primary" size="large">
          Alterar
        </Button>
      </form>
    </FormStyled>
  );
};

export default FormEditStore;
