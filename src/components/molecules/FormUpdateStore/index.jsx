import { yupResolver } from "@hookform/resolvers/yup";
import { createRef } from "react";
import { useForm } from "react-hook-form";
import { updateUserSchema } from "../../../helper/FormValidation";
import { patchStore } from "../../../helper/stores";
import { useStores } from "../../../providers/StoresContext";
import { useData } from "../../../providers/UserContext";
import API from "../../../services/api";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";

const FormUpdateStore = () => {
  const ref = createRef();
  const {
    setStoreData,
    listStores,
    setListStores,
    storeData,
    getAllStores,
  } = useStores();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(updateUserSchema) });

  const handleForm = async (data) => {
    const { businessName, description } = data;
    const defaultData = {
      businessName: businessName || storeData.businessName,
      description: description || storeData.description,
    };
    try {
      const response = await API.patch(patchStore(1), defaultData, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      });

      getAllStores();
      setStoreData(response.data);
      console.log(listStores);

      reset();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleForm)}>
      <Input
        ype="text"
        ref={ref}
        placeholder="Alterar Nome"
        size="large"
        {...register("businessName")}
      />
      <p>{errors.businessName?.message}</p>

      <Input
        ype="text"
        ref={ref}
        placeholder="Alterar Descrição"
        size="large"
        {...register("description")}
      />
      <p>{errors.description?.message}</p>

      <Button type="submit" color="primary" size="medium">
        Atualizar
      </Button>
    </form>
  );
};
export default FormUpdateStore;
