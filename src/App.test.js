import { render, screen } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import App from "./App";
import { theme } from "theme";

test("renders learn react link", () => {
  render(
    <ThemeProvider theme={theme}>
      <HashRouter>
        <App />
      </HashRouter>
    </ThemeProvider>
  );
  const linkElement = screen.getByText(/Ver Propiedades/);
  expect(linkElement).toBeInTheDocument();
});
