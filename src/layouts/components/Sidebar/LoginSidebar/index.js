import classNames from 'classnames/bind';

import Button from '../../../../components/Button';

import styles from './LoginSidebar.module.scss';

const cx = classNames.bind(styles);

function LoginSidebar() {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('title')}>Log in to follow creators, like videos, and view comments.</p>

            <Button className={cx('btn')}> Log in </Button>
        </div>
    );
}

export default LoginSidebar;
