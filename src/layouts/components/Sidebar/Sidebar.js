import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';

import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from '../../../components/Icons';
import config from '../../../config';
import SuggestedAccounts from '../../../components/SuggestedAccounts/SuggestedAccounts';
import Discover from '../Discover';
import FooterSidebar from './FooterSidebar';
import LoginSidebar from './LoginSidebar';

const cx = classNames.bind(styles);

function Sidebar({ classNameDiscover, classNameContent }) {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>

            <LoginSidebar />

            <SuggestedAccounts label="Suggested accounts" />
            <SuggestedAccounts label="Following accounts" />

            <Discover className={classNameDiscover} classNameContent={classNameContent} />
            <FooterSidebar />
        </aside>
    );
}

export default Sidebar;
