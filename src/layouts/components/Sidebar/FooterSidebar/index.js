import classNames from 'classnames/bind';
import styles from './FooterSidebar.module.scss';

const cx = classNames.bind(styles);

function FooterSidebar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <a href="# "> About</a>
                <a href="# "> Newsroom</a>
                <a href="# "> Contact</a>
                <a href="# "> Careers</a>
                <a href="# "> ByteDance</a>
                <a href="# "> TikTok for Good</a>
            </div>

            <div className={cx('content')}>
                <a href="# "> TikTok for Good</a>
                <a href="# "> Quảng cáo</a>
                <a href="# "> Developers</a>
                <a href="# "> Transparency</a>
                <a href="# "> TikTok Rewards</a>
            </div>

            <div className={cx('content')}>
                <a href="# "> Trợ giúp</a>
                <a href="# "> An toàn</a>
                <a href="# "> Điều khoản</a>
                <a href="# "> Quyền riêng tư</a>
                <a href="# "> Creator Portal</a>
                <a href="# "> Hướng dẫn cộng dồng</a>
            </div>

            <p> Thêm </p>

            <p> © 2022 TikTok </p>
        </div>
    );
}

export default FooterSidebar;
