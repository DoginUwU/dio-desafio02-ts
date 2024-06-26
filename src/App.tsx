import {
  ChakraProvider,
  Box,
} from '@chakra-ui/react'
import { Header } from './components/Header/Header';
import { LoginCard } from './components/LoginCard';

function App() {
  return (
    <ChakraProvider>
      <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
        <Header />
        <LoginCard />
      </Box>
    </ChakraProvider>
  );
}

export default App;
