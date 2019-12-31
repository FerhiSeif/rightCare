import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, useRouteMatch } from 'react-router-dom';
import DashboardIcon from '../../../../assets/images/dashboard/menu/dashboard.svg';
import AgentIcon from '../../../../assets/images/dashboard/menu/agent.svg';
import TicketIcon from '../../../../assets/images/dashboard/menu/ticket.svg';
import ChannelIcon from '../../../../assets/images/dashboard/menu/channel.svg';
import ProfileIcon from '../../../../assets/images/dashboard/menu/profile.svg';
import SettingIcon from '../../../../assets/images/dashboard/menu/setting.svg';
import LogoutIcon from '../../../../assets/images/dashboard/menu/logout.svg';
import ActiveDashboardIcon from '../../../../assets/images/dashboard/menu/active/dashboard-active.svg';
import ActiveProfileIcon from '../../../../assets/images/dashboard/menu/active/profile-active.svg';
import ActiveAgentIcon from '../../../../assets/images/dashboard/menu/active/agent-active.svg';
import ActiveSettingIcon from '../../../../assets/images/dashboard/menu/active/setting-active.svg';
import ActiveLogoutIcon from '../../../../assets/images/dashboard/menu/active/logout-active.svg';
import ActiveTicketIcon from '../../../../assets/images/dashboard/menu/active/ticket-active.svg';
import ActiveChannelIcon from '../../../../assets/images/dashboard/menu/active/channel-active.svg';

const MenuSide = (props) => {
  const {
    t,
  } = props;
  const { path } = useRouteMatch();
  const dashboardLink = React.createRef();
  const profileLink = React.createRef();
  const settingLink = React.createRef();
  const agentLink = React.createRef();
  const ticketLink = React.createRef();
  const channelLink = React.createRef();
  const logoutLink = React.createRef();

  const currentDashboardIcon = path === '/dashboard' ? ActiveDashboardIcon : DashboardIcon;
  // const currentAgentIcon = path === '/agents' ? ActiveAgentIcon : AgentIcon;
  const currentTicketIcon = path === '/tickets' ? ActiveTicketIcon : TicketIcon;
  // const currentChannelIcon = path === '/channels' ? ActiveChannelIcon : ChannelIcon;
  // const currentProfileIcon = path === '/profile' ? ActiveProfileIcon : ProfileIcon;
  const currentSettingIcon = path === '/settings' ? ActiveSettingIcon : SettingIcon;
  const currentLogoutIcon = path === '/logout' ? ActiveLogoutIcon : LogoutIcon;

  const handleMouseOut = (kind) => {
    switch (kind) {
      case 'dashboard':
        dashboardLink.current.src = path === '/dashboard' ? ActiveDashboardIcon : DashboardIcon;
        break;
      case 'profile':
        profileLink.current.src = path === '/profile' ? ActiveProfileIcon : ProfileIcon;
        break;
      case 'setting':
        settingLink.current.src = path === '/settings' ? ActiveSettingIcon : SettingIcon;
        break;
      case 'agent':
        agentLink.current.src = path === '/agents' ? ActiveAgentIcon : AgentIcon;
        break;
      case 'ticket':
        ticketLink.current.src = path === '/tickets' ? ActiveTicketIcon : TicketIcon;
        break;
      case 'channel':
        channelLink.current.src = path === '/channels' ? ActiveChannelIcon : ChannelIcon;
        break;
      case 'logout':
        logoutLink.current.src = path === '/logout' ? ActiveLogoutIcon : LogoutIcon;
        break;
      default:
        break;
    }
  };

  const handleMouseOver = (kind) => {
    switch (kind) {
      case 'dashboard':
        dashboardLink.current.src = ActiveDashboardIcon;
        break;
      case 'profile':
        profileLink.current.src = ActiveProfileIcon;
        break;
      case 'setting':
        settingLink.current.src = ActiveSettingIcon;
        break;
      case 'agent':
        agentLink.current.src = ActiveAgentIcon;
        break;
      case 'ticket':
        ticketLink.current.src = ActiveTicketIcon;
        break;
      case 'channel':
        channelLink.current.src = ActiveChannelIcon;
        break;
      case 'logout':
        logoutLink.current.src = ActiveLogoutIcon;
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <p className="menu-label">
        {t('side_menu.menu')}
      </p>
      <ul className="menu-list">

        <li>
          <NavLink
            activeClassName="selected"
            className="sidelink"
            to="dashboard"
            onMouseOver={() => handleMouseOver('dashboard')}
            onMouseOut={() => handleMouseOut('dashboard')}
            onFocus={(e) => e}
            onBlur={(e) => e}
          >
            <img alt="dash icon" src={currentDashboardIcon} ref={dashboardLink} />
            {t('side_menu.dashboard')}
          </NavLink>
        </li>
        {/* <li>
          <NavLink
            activeClassName="selected"
            className="sidelink"
            to="agents"
            onMouseOver={() => handleMouseOver('agent')}
            onMouseOut={() => handleMouseOut('agent')}
            onFocus={(e) => e}
            onBlur={(e) => e}
          >
            <img alt="agent icon" src={currentAgentIcon} ref={agentLink} />
            {t('side_menu.agents')}
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="selected"
            className="sidelink"
            to="channels"
            onMouseOver={() => handleMouseOver('channel')}
            onMouseOut={() => handleMouseOut('channel')}
            onFocus={(e) => e}
            onBlur={(e) => e}
          >
            <img alt="chan icon" src={currentChannelIcon} className="channel" ref={channelLink} />
            {t('side_menu.channels')}
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="selected"
            className="sidelink"
            to="profile"
            onMouseOver={() => handleMouseOver('profile')}
            onMouseOut={() => handleMouseOut('profile')}
            onFocus={(e) => e}
            onBlur={(e) => e}
          >
            <img alt="pro icon" src={currentProfileIcon} ref={profileLink} />
            {t('side_menu.profile')}
          </NavLink>
        </li> */}
        <li>
          <NavLink
            activeClassName="selected"
            className="sidelink"
            to="tickets"
            onMouseOver={() => handleMouseOver('ticket')}
            onMouseOut={() => handleMouseOut('ticket')}
            onFocus={(e) => e}
            onBlur={(e) => e}
          >
            <img alt="ticket icon" src={currentTicketIcon} ref={ticketLink} />
            {t('side_menu.tickets')}
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="selected"
            className="sidelink"
            to="settings"
            onMouseOver={() => handleMouseOver('setting')}
            onMouseOut={() => handleMouseOut('setting')}
            onFocus={(e) => e}
            onBlur={(e) => e}
          >
            <img alt="set icon" src={currentSettingIcon} ref={settingLink} />
            {t('side_menu.settings')}
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="selected"
            className="sidelink"
            to="logout"
            onMouseOver={() => handleMouseOver('logout')}
            onMouseOut={() => handleMouseOut('logout')}
            onFocus={(e) => e}
            onBlur={(e) => e}
          >
            <img alt="log icon" src={currentLogoutIcon} ref={logoutLink} />
            {t('side_menu.logout')}
          </NavLink>
        </li>

      </ul>
    </div>
  );
};

MenuSide.propTypes = {
  t: PropTypes.func.isRequired,
};

export default MenuSide;
