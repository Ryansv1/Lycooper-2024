import { Flex, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

export default function SignupForm() {
  return (
    <Flex className="flex flex-col gap-8">
      <h1 className="text-md">Crie sua conta</h1>
      <form
        action="http://localhost:8000/auth/register"
        method="POST"
        className="space-y-4"
      >
        <FormControl isRequired>
          <FormLabel>E-mail</FormLabel>
          <Input
            placeholder="ex: user@domain.com"
            variant="filled"
            _placeholder={{ opacity: 1, color: "gray.600" }}
            type="email"
            name="userEmail"
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Usuário</FormLabel>
          <Input
            placeholder="Seu usuário"
            variant="filled"
            _placeholder={{ opacity: 1, color: "gray.600" }}
            type="text"
            name="userName"
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            placeholder="Sua senha"
            variant="filled"
            _placeholder={{ opacity: 1, color: "gray.600" }}
            type="password"
            name="userPassword"
          />
        </FormControl>
        <Button className="mt-8 animate-pulse" type="submit">
          Cadastre-se!
        </Button>
      </form>
    </Flex>
  );
}
