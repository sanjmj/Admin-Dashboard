
import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import SettingsIcon from '@mui/icons-material/Settings';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';

const Sidebar = () => {
 ;

  return (
    <div className='sidebar'>
      <div className="top">
       <Link to='/' style={{textDecoration: 'none'}}>
        <span className="logo">Management</span>
        </Link>
      </div>
      <hr />

      <div className="center">
        <ul>
          
          <p className="title">Main</p>
          <Link to='/' style={{textDecoration: 'none'}}>
          <li>
            <DashboardIcon className='icon'/>
            <span>Dashboard</span>
            </li>
            </Link>

            <p className="title">Lists</p>
            <Link to='/users' style={{textDecoration: 'none'}}>
          <li>
          <PersonOutlinedIcon className='icon' />
            <span>Users</span>
            </li>
            </Link>

            <Link to='/products' style={{textDecoration: 'none'}}>
          <li>
          <StoreIcon className='icon'/>
            <span>Products</span>
            </li>
            </Link>

          <li>
          <CreditCardIcon className='icon'  />
            <span>Orders</span>
          </li>

          <li>
          <LocalShippingIcon className='icon'/>
            <span>Delivery</span>
          </li>

          <p className="title">Links</p>
          <li>
          <InsertChartIcon className='icon'/>
            <span>Stats</span>
          </li>

          <li>
          <NotificationsNoneIcon className='icon'/>
            <span>Notifications</span>
          </li>

          <p className="title">Service</p>
          <li>
          <SettingsSystemDaydreamIcon className='icon'/>
            <span>System Health</span>
          </li>

          <li>
          <PsychologyOutlinedIcon className='icon'/>
            <span>Logs</span>
          </li>

          <li>
          <SettingsIcon className='icon'/>
            <span>Settings</span>
          </li>

          <p className="title">User</p>
          <li>
          <AccountCircleOutlinedIcon className='icon'/>
            <span>Profile</span>
          </li>

          <li>
          <LogoutIcon className='icon'/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      
    </div>
  );
}

export default Sidebar;
