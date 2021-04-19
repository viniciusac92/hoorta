// React
import { createRef } from "react";
// API
import API from "../../../services/api";
// Helpers
import { patchUser } from "../../../helper/user";
import { updateUserSchema } from "../../../helper/FormValidation";
// Dependencies
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// ContextAPI
import { useData } from "../../../providers/UserContext";
// Components
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import Text from "../../atoms/Text";
import { StyledForm } from "./styles";

const FormUpdateUser = () => {
  const ref = createRef();
  const { userData, setUserData } = useData();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(updateUserSchema),
  });

  const handleForm = async (data) => {
    const defaultData = {
      name: data.name || userData.name,
      phone: data.phone || userData.phone,
      age: data.age || userData.age,
      address: {
        road: data.road || userData.address.road,
        number: data.number || userData.address.number,
        city: data.city || userData.address.city,
        state: data.state || userData.address.state,
        cep: data.cep || userData.address.cep,
      },
      cc: {
        cc_number: data.cc_number || userData.cc.cc_number,
        expiration: data.expiration || userData.cc.expiration,
        cvv: data.cvv || userData.cc.cvv,
        owner: data.owner || userData.cc.owner,
      },
    };

    try {
      const response = await API.patch(patchUser(userData.id), defaultData, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      });
      setUserData(response.data);
      reset();
    } catch (e) {
      console.log(e);
    }
  };
  console.log(userData);
  return (
    <StyledForm onSubmit={handleSubmit(handleForm)}>
      <Input
        type="text"
        ref={ref}
        placeholder={userData.name || "Nome"}
        size="large"
        {...register("name")}
      />
      <p>{errors.name?.message}</p>
      <Input
        type="text"
        ref={ref}
        placeholder={userData.age || "Age"}
        size="large"
        {...register("age")}
      />
      <p>{errors.age?.message}</p>
      <Input
        type="text"
        ref={ref}
        placeholder={userData.phone || "Telefone"}
        size="large"
        {...register("phone")}
      />
      <p>{errors.phone?.message}</p>
      <div className="addressContainer">
        <Text weigth="medium" size="small">
          Endereço
        </Text>
        <Input
          type="text"
          ref={ref}
          placeholder={userData.address.road || "Endereço"}
          size="large"
          {...register("road")}
        />
        <p>{errors.address?.message}</p>
        <Input
          type="text"
          ref={ref}
          placeholder={userData.address.number || "Número"}
          size="large"
          {...register("number")}
        />
        <p>{errors.number?.message}</p>
        <Input
          type="text"
          ref={ref}
          placeholder={userData.address.city || "Cidade"}
          size="large"
          {...register("city")}
        />
        <p>{errors.city?.message}</p>
        <Input
          type="text"
          ref={ref}
          placeholder={userData.address.state || "Estado"}
          size="large"
          {...register("state")}
        />
        <p>{errors.state?.message}</p>
        <Input
          type="text"
          ref={ref}
          placeholder={userData.address.cep || "CEP"}
          size="large"
          {...register("cep")}
        />
        <p>{errors.cep?.message}</p>
      </div>
      <div className="ccContainer">
        <Text className="subtitle" weigth="medium" size="small">
          Dados do Cartão
        </Text>
        <Input
          ref={ref}
          type="number"
          placeholder={
            // `XXXX XXXX XXXX ${userData.cc.cc_number.slice(-4)}` ||
            "Número"
          }
          size="large"
          {...register("cc_number")}
        />
        <p>{errors.cc_number?.message}</p>
        <Input
          type="text"
          ref={ref}
          placeholder={userData.cc.expiration || "Validade"}
          size="large"
          {...register("expiration")}
        />
        <p>{errors.expiration?.message}</p>
        <Input
          type="number"
          ref={ref}
          placeholder={userData.cc.cvv || "CVV"}
          size="large"
          {...register("cvv")}
        />
        <p>{errors.cvv?.message}</p>
        <Input
          type="text"
          ref={ref}
          placeholder={userData.cc.owner || "Titular"}
          size="large"
          {...register("owner")}
        />
        <p>{errors.owner?.message}</p>
      </div>
      <Button type="submit" color="primary" size="small">
        Atualizar
      </Button>
    </StyledForm>
  );
};

export default FormUpdateUser;
