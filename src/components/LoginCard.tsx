import { Box, Center, Input } from "@chakra-ui/react"
import { login } from "../services/login"
import { Button } from "./Button"

export const LoginCard = () => {
  return (
    <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
      <Center>
        <h1>Faça o login</h1>
      </Center>
      <Input placeholder="email" />
      <Input placeholder="password" />
      <Center>
        <Button onClick={login}>
          Continuar
        </Button>
      </Center>
    </Box>
  )
}
