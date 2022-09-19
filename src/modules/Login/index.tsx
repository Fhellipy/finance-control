import { Avatar } from "@components/ui/Avatar";
import { Button } from "@components/ui/Button";
import { Input } from "@components/ui/Input";
import { Navbar } from "@components/common/lib/NavBar";
import { Paragraph } from "@components/ui/Paragraph";
import { Display } from "@components/common/layouts/Display";
import { Form } from "@components/common/lib/Form";
import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useMutation } from "react-query";
import { Container } from "./styles";

import { login as loginFetch } from "./services/api/user";
import type { Login as LoginType } from "@dto/user";

function LoginPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [formFields, setFormFields] = useState<Record<string, string>>({});

  const login = useMutation<void, Error, LoginType>(loginFetch);

  function handleFormField(event: ChangeEvent<HTMLInputElement>) {
    const name = event.target.name;
    const fields = new Map();
    fields.set(name, event.target.value);

    setFormFields({
      ...formFields,
      ...Object.fromEntries(fields),
    });
  }

  function submitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    login.mutate({
      email: formFields?.email,
      password: formFields?.senha,
    });
  }

  if (login.isSuccess) {
    navigate(searchParams.get("redirect") ?? "/", { replace: true });
  }

  return (
    <Container>
      <Display
        css={{
          height: "$18",
        }}
      >
        <Navbar bg="primary">
          <Paragraph size="lg" />
        </Navbar>
      </Display>

      <Display align="center" justify="center" flex css={{ height: "100%" }}>
        <Form
          method="POST"
          onSubmit={submitHandler}
          border="solid"
          css={{
            gap: "$1",
            zIndex: "$overlay",
            padding: "$8",
            width: "$40",
            height: "$80",
            "@mp": {
              width: "$64",
            },
          }}
        >
          <Avatar
            align="center"
            size="lg"
            src="https://www.pngitem.com/pimgs/m/24-248235_user-profile-avatar-login-account-fa-user-circle.png"
          />

          <Paragraph size="lg" align="center" justify="center">
            LOGIN
          </Paragraph>

          <Input
            size="lg"
            placeholder="Email"
            onChange={handleFormField}
            type="text"
            name="email"
            required
            css={{ display: "block", width: "100%", marginBottom: "10px" }}
          />
          <Input
            size="lg"
            placeholder="Password"
            onChange={handleFormField}
            name="senha"
            type="password"
            required
            css={{ display: "block", width: "100%", marginBottom: "10px" }}
          />

          <Button
            type="submit"
            bg="primary"
            size="lg"
            css={{ cursor: "pointer" }}
          >
            Login
          </Button>
        </Form>
      </Display>

      <Display
        css={{
          height: "$18",
        }}
      >
        <Navbar bg="primary">
          <Paragraph size="lg" />
        </Navbar>
      </Display>
    </Container>
  );
}

export { LoginPage };
