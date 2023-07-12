import classNames from 'classnames/bind';
import styles from './Video.module.scss';
import ControlVideo from '../ControlVideo';
import { useRef } from 'react';

const cx = classNames.bind(styles);

function Video({ src, index }) {
    const refVideo = useRef();
    return (
        <div className={cx('wrapper')}>
            <video loop ref={refVideo}>
                <source src={src} type="video/mp4" />
            </video>
            <ControlVideo refVideo={refVideo} index={index} />
        </div>
    );
}

export default Video;
