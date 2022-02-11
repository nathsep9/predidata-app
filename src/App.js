import CssBaseline from "@mui/material/CssBaseline";
import { Route, Routes } from "react-router-dom";

import { Navegation } from "components/Navegation";
import { ROUTES } from "constantsApp";
import { Main } from "./routes/Main";
import { Owners } from "routes/Owners";

function App() {
  return (
    <div>
      <CssBaseline />
      <Navegation />
      <Routes>
        <Route path={ROUTES.main} element={<Main />} />
        <Route path={ROUTES.owners} element={<Owners />} />
        <Route path={ROUTES.properties} element={<div>Pooop</div>} />
      </Routes>
    </div>
  );
}

export default App;
