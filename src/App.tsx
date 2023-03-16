import Router from "./routes/router";
import { GlobalStyle } from "./GlobalStyled";
import { ChakraProvider } from "@chakra-ui/react";
function App() {
  return (
    <ChakraProvider>
      <Router />
      <GlobalStyle />
    </ChakraProvider>
  );
}

export default App;
