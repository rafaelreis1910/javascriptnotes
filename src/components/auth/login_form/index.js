import { React, useState } from "react";
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

import UserServices from "../../../services/users";

function LoginForm() {
  const [RedirectToRegister, setRedirectToRegister] = useState(false);
  const [RedirectToNotes, setRedirectToNotes] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  if (RedirectToRegister) return <Navigate to="/register" />;
  else if (RedirectToNotes) return <Navigate to="/notes" />;
  
//chama o método de registro do objeto UsersService
  async function HandleSubmit(event) {
    event.preventDefault();
    try {
      let user = await UserServices.login({ email, password });
      setRedirectToNotes(true);
    } catch (error) {
      setError(true);
    }
  }
  return (
    <>
      <Column.Group centered>
        <form onSubmit={HandleSubmit}>
          <Column size={12}>
            <Field>
              <Label size="small">Email:</Label>
              <Control>
                <Input
                  type="email"
                  required
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Control>
            </Field>
            <Field>
              <Label size="small">Senha:</Label>
              <Control>
                <Input
                  type="password"
                  required
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Control>
            </Field>
            <Field>
              <Control>
                <Column.Group breakpoint="mobile">
                  <Column>
                    <a
                      className="button is-white has-text-custom-purple"
                      onClick={setRedirectToRegister}
                    >
                      Registrar ou
                    </a>
                  </Column>
                  <Column>
                    <Button color="custom-purple" outlined>
                      Login
                    </Button>
                  </Column>
                </Column.Group>
              </Control>
            </Field>
            {error && <Help color="danger">Email ou senha invalida</Help>}
          </Column>
        </form>
      </Column.Group>
    </>
  );
}

export default LoginForm;
