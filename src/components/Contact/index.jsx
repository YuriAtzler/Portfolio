import React from "react";
import {
  SkillContainer,
  ContainerList,
  ContainerForm,
  ContainerDescription,
  Wrapper,
  TextInput,
  Field,
} from "./styled";
import * as Components from "../";
import { toast } from "react-toastify";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  user_name: yup.string().required("Seu nome é obrigatório!"),
  user_email: yup
    .string()
    .email("E-mail inválido!")
    .required("Seu e-mail é obrigatório!"),
  message: yup.string().required("A mensagem é obrigatória!"),
});

export const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const sendEmail = (data) => {
    const send = async () => {
      try {
        const dataResult = {
          service_id: process.env.REACT_APP_SERVICE_ID,
          template_id: process.env.REACT_APP_TEMPLATE_ID,
          user_id: process.env.REACT_APP_PUBLIC_KEY,
          template_params: data,
        };

        await axios
          .post("https://api.emailjs.com/api/v1.0/email/send", dataResult)
          .then(() => reset({ user_email: "", user_name: "", message: "" }));
      } catch (err) {
        return Promise.reject(err);
      }
    };
    toast.promise(send, {
      pending: "Enviando e-mail!",
      success: "E-mail enviado com sucesso!",
      error: "Ops!! algo deu errado!",
    });
  };

  return (
    <SkillContainer id="contact">
      <Wrapper>
        <ContainerDescription data-aos="fade-down">
          <Components.TextGradientComponent
            size={`${window.innerWidth <= 900 ? "35px" : "55px"}`}
            weight={"bold"}
          >
            Fale comigo
          </Components.TextGradientComponent>
        </ContainerDescription>
        <ContainerList>
          <Components.Divider width={"90%"} color={"var(--background-100)"} />
          <Components.TagScript right open>
            Contato
          </Components.TagScript>
          <ContainerForm>
            <Field>
              <div>
                <p>Seu nome</p>
              </div>
              <TextInput
                {...register("user_name")}
                type="text"
                placeholder="Digite seu nome..."
              />
            </Field>
            {errors.user_name && <span>{errors.user_name.message}</span>}
            <Field>
              <div>
                <p>Seu e-mail</p>
              </div>
              <TextInput
                {...register("user_email")}
                type="email"
                placeholder="Digite seu e-mail..."
              />
            </Field>
            {errors.user_email && <span>{errors.user_email.message}</span>}
            <Field>
              <div>
                <p>Mensagem</p>
              </div>
              <textarea
                {...register("message")}
                type="text"
                className="description"
                placeholder="Digite uma mensagem..."
              />
            </Field>
            {errors.message && <span>{errors.message.message}</span>}
            <button className="button-submit" onClick={handleSubmit(sendEmail)}>
              <Components.TextGradientComponent
                size={`${window.innerWidth <= 900 ? "15px" : "20px"}`}
                weight={"bold"}
              >
                Enviar
              </Components.TextGradientComponent>
            </button>
          </ContainerForm>
          <Components.TagScript closed>Contato</Components.TagScript>
        </ContainerList>
      </Wrapper>
    </SkillContainer>
  );
};
