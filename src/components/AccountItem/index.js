import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Image from '../Image';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/f0d5299a324e257a6972ea68015c85c4.jpeg?x-expires=1677834000&x-signature=GeaZL4g2UIBe%2BFlOhJFW435j%2F2o%3D"
                alt="Chao"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Le Van Son</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}> le van son</span>
            </div>
        </div>
    );
}

export default AccountItem;
