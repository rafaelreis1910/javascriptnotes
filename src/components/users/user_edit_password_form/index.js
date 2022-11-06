import React, { Fragment, useState } from "react";
import { Button, Field, Control, Input, Column, Title, Help, Label } from "rbx";
import UserService from "../../../services/users";

function UsersEditFormPassword() {
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    if (password == password_confirmation) {
      try {
        await UserService.updatePassword({ password });
        setStatus("success");
      } catch (err) {
        setStatus("error");
      }
    } else {
      setStatus("error_confirmation_password");
    }
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <Field>
          <Control>
            <Label className="has-text-grey">Senha</Label>
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
            <Label className="has-text-grey">Confirmação da senha</Label>
            <Input
              type="password"
              value={password_confirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              required
              name="password_confirmation"
            />
          </Control>
        </Field>

        <Field>
          <Control>
            <Column.Group>
              <Column className="has-text-right">
                <Button color="custom-purple" outlined>
                  Atualizar senha
                </Button>
              </Column>
            </Column.Group>
          </Control>
        </Field>
        {status == "error_update" && (
          <Help color="danger">Problema na atualização de senha</Help>
        )}
        {status == "error_confirmation_password" && (
          <Help color="danger">A senha não corresponde</Help>
        )}
        {status == "success" && (
          <Help color="primary">Atualizado com sucesso</Help>
        )}
      </form>
    </Fragment>
  );
}

export default UsersEditFormPassword;
