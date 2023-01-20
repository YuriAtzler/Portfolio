import React, { useState } from "react";
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

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = () => {
    const send = async () => {
      try {
        if (!name || !email || !message)
          throw new Error("Ops!! tem algo faltando!");

        const data = {
          service_id: process.env.REACT_APP_SERVICE_ID,
          template_id: process.env.REACT_APP_TEMPLATE_ID,
          user_id: process.env.REACT_APP_PUBLIC_KEY,
          template_params: {
            user_name: name,
            user_email: email,
            message: message,
          },
        };

        await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
      } catch (err) {
        return Promise.reject(err.message);
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
                onChange={(e) => setName(e.target.value)}
                type="text"
              />
            </Field>
            <Field>
              <div>
                <p>Seu e-mail</p>
              </div>
              <TextInput
                onChange={(e) => setEmail(e.target.value)}
                type="text"
              />
            </Field>
            <Field>
              <div>
                <p>Mensagem</p>
              </div>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                type="text"
                className="description"
              />
            </Field>
            <button className="button-submit" onClick={() => sendEmail()}>
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
