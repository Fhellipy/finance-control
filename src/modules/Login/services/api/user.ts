import { Login, User } from "@dto/user";

//Método responsável por cadastrar um novo usuário
async function login({ email, password }: Login) {
  await fetch("/login", {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
  });
}

async function getUser(): Promise<User> {
  return {
    id: 1,
    name: "fhellipy",
    lastName: "santana",
    surname: "Fhellipy",
    email: "fhellipy@gmail.com",
  };
}

export { login, getUser };
