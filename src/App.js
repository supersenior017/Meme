import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import LandingV2 from './pages/LandingV2/LandingV2';
import './UpdatedSidebar.css';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
	return (
		<HashRouter>
			<Switch>
				<Route exact strict path="/" render={() => <Dashboard />} />
				<Route exact strict path="/dashboard" render={() => <Dashboard />} />
				<Route
					exact
					strict
					path="/dashboard/staking"
					render={() => <Dashboard />}
				/>
				<Route
					exact
					strict
					path="/dashboard/AITraining"
					render={() => <Dashboard />}
				/>
				<Route
					exact
					strict
					path="/dashboard/celebrity-nfts"
					render={() => <Dashboard />}
				/>
			</Switch>
		</HashRouter>
	);
}

export default App;
