// React
import { createRef, useEffect } from "react";
// API
import API from "../../../services/api";
// Helpers
import { postProduct } from "../../../helper/products";
import { registerProductSchema } from "../../../helper/FormValidation";
// Dependencies
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// ContextAPI
import { useProducts } from "../../../providers/ProductsContext";
import { useData } from "../../../providers/UserContext";
// Components
import TextArea from "../../atoms/TextArea";
import Button from "../../atoms/Button";
import { StyledForm } from "./styles";
import Input from "../../atoms/Input";

const FormRegisterProduct = ({ currentStoreId, toggleModal }) => {
  const { userData } = useData();
  const { productsData, setProductsData } = useProducts();
  const ref = createRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(registerProductSchema),
  });

  const handleForm = async (data) => {
    const info = { ...data };
    try {
      const response = await API.post(
        postProduct(),
        { info, storeId: currentStoreId, userId: userData.id },
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        }
      );
      console.log(userData.id);
      console.log(response.data);
      setProductsData([...productsData, response.data]);
      reset();
      setTimeout(() => {
        toggleModal();
      }, 800);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(handleForm)}>
      <Input
        type="text"
        ref={ref}
        placeholder="Nome"
        size="large"
        {...register("name")}
      />
      <p>{errors.name?.message}</p>
      <Input
        type="text"
        ref={ref}
        placeholder="Preço"
        size="large"
        {...register("price")}
      />
      <p>{errors.price?.message}</p>
      <TextArea
        type="text"
        ref={ref}
        placeholder="Descrição"
        size="large"
        {...register("description")}
      />
      <p>{errors.description?.message}</p>

      <Button type="submit" color="primary" size="medium">
        Cadastrar
      </Button>
    </StyledForm>
  );
};

export default FormRegisterProduct;
