import CssBaseline from "@mui/material/CssBaseline";
import { Route, Routes, Navigate } from "react-router-dom";

import { Header } from "components/Header";
import { ROUTES } from "constantsApp";
import { Main } from "./routes/Main";
import { Owners } from "routes/Owners";
import { Owner } from "routes/Owner";

function App() {
  return (
    <div>
      <CssBaseline />
      <Header />
      <Routes>
        <Route path={ROUTES.main} element={<Main />} />
        <Route path={ROUTES.owners} element={<Owners />} />{" "}
        <Route path={ROUTES.owner} element={<Owner />} />
        <Route path={ROUTES.properties} element={<div>Pooop</div>} />
        <Route path="*" element={<Navigate to={ROUTES.main} />} />
      </Routes>
    </div>
  );
}

export default App;
