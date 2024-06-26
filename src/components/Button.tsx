import { Button as ChakraButton } from "@chakra-ui/react";

interface IButton {
  onClick: () => void;
}

export const Button = ({ children, onClick }: React.PropsWithChildren<IButton>) => {
  return (
    <ChakraButton onClick={onClick} colorScheme='teal' size='sm' width='100%' marginTop='5px'>
      {children}
    </ChakraButton>
  )
}
