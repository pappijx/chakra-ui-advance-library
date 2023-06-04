import { ChakraProvider, theme } from "@chakra-ui/react";
import AppRoutes from "./Routes";

export const App = () => (
  <ChakraProvider theme={theme}>
    <AppRoutes />
  </ChakraProvider>
);
