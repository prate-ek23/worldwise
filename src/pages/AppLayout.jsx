// import AppNav from "../components/AppNav"
import { useNavigate } from 'react-router-dom';
import Map from '../components/Map';
import Sidebar from '../components/Sidebar';
import User from '../components/User';
import styles from './AppLayout.module.css';

function AppLayout() {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.app}>
        <Sidebar />
        <Map />
        <User />
      </div>
    </>
  );
}

export default AppLayout;
