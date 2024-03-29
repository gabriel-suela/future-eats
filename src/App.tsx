import Router from "./routes/router";
import { GlobalStyle } from "./GlobalStyled";
import { ChakraProvider } from "@chakra-ui/react";
import GlobalState from "./context/GlobalState";
function App() {
  return (
    <ChakraProvider>
      <GlobalState>
        <Router />
        <GlobalStyle />
      </GlobalState>
    </ChakraProvider>
  );
}

export default App;
