import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Workload from "./component/Workload";
import Income from "./component/Income";
import QuarterGDP from "./component/QuarterGDP";
import QualityIndex from "./component/QualityIndex";
import OnboardData from "./component/OnboardData";
import PersonnelDistribution from "./component/PersonnelDistribution";
import TeamDynamics from "./component/TeamDynamics";
import EquippedVehicles from "./component/EquippedVehicles";
import RadioactiveSources from "./component/RadioactiveSources";
import ExplosionSubstances from "./component/ExplosionSubstances";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/工作量·产值" element={<Workload />} />
            <Route path="/产值·收入" element={<Income />} />
            <Route path="/季度产值" element={<QuarterGDP />} />
            <Route path="/质量指标" element={<QualityIndex />} />
            <Route path="/车载数据" element={<OnboardData />} />
            <Route path="/人员分布" element={<PersonnelDistribution />} />
            <Route path="/队伍动态" element={<TeamDynamics />} />
            <Route path="/装备车辆" element={<EquippedVehicles />} />
            <Route path="/放射源" element={<RadioactiveSources />} />
            <Route path="/民爆品" element={<ExplosionSubstances />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
