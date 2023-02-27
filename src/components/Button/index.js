import styles from './Button.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function Button({
    //types

    primary = false,
    outline = false,
    text = false,
    rounded = false,
    //sizes

    small = false,
    large = false,
    //props
    leftIcon,
    rightIcon,
    className,
    href,
    to,
    children,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {};

    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        large,
        text,
        rounded,
        [className]: className,
    });
    if (to) {
        Comp = Link;
        props.to = to;
    } else if (href) {
        Comp = 'a';
        props.href = href;
    }

    return (
        <Comp className={classes} {...props} {...passProps} onClick={onClick}>
            <span className={cx('icon')}>{leftIcon}</span>
            <span className={cx('content')}>{children}</span>
            <span className={cx('icon')}>{rightIcon}</span>
        </Comp>
    );
}

export default Button;
