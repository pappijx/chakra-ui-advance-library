import { ChakraProvider, theme } from "@chakra-ui/react";
import AppRoutes from "./Routes";
import { Layout } from "./components";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Layout>
      <AppRoutes />
    </Layout>
  </ChakraProvider>
);
