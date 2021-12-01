import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/工作量·产值">工作量·产值</Link>
          </li>
          <li>
            <Link to="/产值·收入">产值·收入</Link>
          </li>
          <li>
            <Link to="/季度产值">季度产值</Link>
          </li>
          <li>
            <Link to="/质量指标">质量指标</Link>
          </li>
          <li>
            <Link to="/车载数据">车载数据</Link>
          </li>
          <div></div>
          <li>
            <Link to="/人员分布">人员分布</Link>
          </li>
          <li>
            <Link to="/队伍动态">队伍动态</Link>
          </li>
          <li>
            <Link to="/装备车辆">装备车辆</Link>
          </li>
          <li>
            <Link to="/放射源">放射源</Link>
          </li>
          <li>
            <Link to="/民爆品">民爆品</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
