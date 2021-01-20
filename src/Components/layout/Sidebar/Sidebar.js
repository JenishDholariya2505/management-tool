import React, { Component } from 'react'
import { SidebarWrapper } from './SidebarStyle'
import { Icons, JdMenu } from '../../Module/components/Index'
import { Link } from "react-router-dom";
import { Panel } from '../../../Core/Helper/Data'

export default class Sidebar extends Component {

  render() {
    const { menuBTN, bradCrumb } = this.props
    return (
      <SidebarWrapper>
        <JdMenu style={{ width: "60px" }} inlineCollapsed={true} mode="inline">
          {Panel.Modual.map((d, i) => (
            <JdMenu.Item key={i} icon={<Icons type={d} />} title={d} className={d === bradCrumb ? 'selected' : 'ant-menu-item'}>
              <Link title='' to={"/ZeronSec/" + d} onClick={() => { menuBTN(d) }} />
            </JdMenu.Item>
          ))}
        </JdMenu>
      </SidebarWrapper >
    )
  }
}