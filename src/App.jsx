import './App.css';
import DashboardCharts from './DashboardCharts';
import DashboardApexCharts from './DashboardApexCharts';
import Organization from './components/organization/CreateOrganization';
import AdminPanelLayout from './layouts/AdminPanelLayout';
import Login from './Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import OrganizationsForm from './components/organization/CreateOrganization';
import DesignationsForm from './components/organization/CreateDesignation';
import EmployeesForm from './components/organization/CreateEmployee';
import DemoForm from './components/demo/DemoForm';
import ScoreBoardForms from './components/scoreboard/ScoreBoardForms';
import ScoreListTable from './components/scoreboard/components/ScoreListTable'

import CardTypeForm from './components/settings/CardType';
import ScoreTypeForm from './components/settings/ScoreType';
import FieldTypeForm from './components/settings/FieldType';
import FieldValueTypeForm from './components/settings/FieldValueType';
import CalendarTypeForm from './components/settings/CalendarType';
import AggregationTypeForm from './components/settings/AggregationType';
import Data from './Data/mok.json';

function App() {
  return (
        <Routes>
        <Route path="/" element={<AdminPanelLayout />} >
        <Route index element={<DashboardCharts />} />

        <Route path="settings/CreateCardType" element={<CardTypeForm />} />
        <Route path="settings/CreateScoreType" element={<ScoreTypeForm />} />
        <Route path="settings/CreateFieldType" element={<FieldTypeForm />} />
        <Route path="settings/CreateFieldValueType" element={<FieldValueTypeForm />} />
        <Route path="settings/CreateCalendarType" element={<CalendarTypeForm />} />
        <Route path="settings/CreateAggregationType" element={<AggregationTypeForm />} />
        <Route path="scoreboard/ScoreListTable" element={<ScoreListTable />} />
        <Route path="scoreCard/CreateScoreCard" element={<ScoreBoardForms />} />
        <Route path="organization/CreateOrganization" element={<OrganizationsForm />} />
        <Route path="organization/CreateDesignation" element={<DesignationsForm />} />
        <Route path="organization/CreateEmployee" element={<EmployeesForm />} />
        <Route path="demo/DemoForm" element={<DemoForm />} />
      </Route>

      <Route path="/login" element={<Login />} />

    </Routes>

  );
}

export default App;