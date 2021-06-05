import React from "react";
import { Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import Cadastro from "./pages/cadastro/Cadastro.jsx";
import Consulta from "./pages/consulta/Consulta.jsx";

const Routes = () => (
	<div className="layout-main">
		<Route path="/" exact component={Dashboard} />
		<Route path="/cadastro" exact component={Cadastro} />
		<Route path="/consulta" exact component={Consulta} />
	</div>
);
export default Routes;