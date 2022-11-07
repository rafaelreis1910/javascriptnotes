import React, { Fragment, useState } from "react";
import UserService from "../../../services/users";
import {
  Button,
  Field,
  Control,
  Input,
  Column,
  Section,
  Help,
  Label,
} from "rbx";
import { Navigate } from "react-router-dom";

function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  const [error, setError] = useState(false);


  //chama o método de registro do objeto UsersService
  
  const HandleSubmit = async (event) => {
    event.preventDefault();
    try {
      await UserService.register({ name, email, password });
      setRedirectToLogin(true);
      console.log("Usuario registrado com sucesso!");
    } catch (error) {
      setError(true);
      console.log("Ocorreu um erro ao registrar o usuario!"); 
    }
  };

  if (redirectToLogin) return <Navigate to="/login" />;

  return (
    <Fragment>
      <Column.Group centered>
        <form onSubmit={HandleSubmit}>
          <Column size={12}>
            <Field>
              <Label size="small">Name:</Label>
              <Control>
                <Input
                  type="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  name="name"
                />
              </Control>
            </Field>
            <Field>
              <Label size="small">Email:</Label>
              <Control>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  name="email"
                />
              </Control>
            </Field>
            <Field>
              <Label size="small">Senha:</Label>
              <Control>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  name="password"
                />
              </Control>
            </Field>
            <Field>
              <Control>
                <Column.Group breakpoint="mobile">
                  <Column>
                    <a
                      onClick={(e) => setRedirectToLogin(true)}
                      className="button is-white has-text-custom-purple"
                    >
                      Login ou
                    </a>
                  </Column>
                  <Column>
                    <Button color="custom-purple" outlined>
                      Registrar
                    </Button>
                  </Column>
                </Column.Group>
              </Control>
            </Field>
            {error && <Help color="danger">Erro ao Cadastrar Usuario</Help>}
          </Column>
        </form>
      </Column.Group>
    </Fragment>
  );
}

export default RegisterForm;
