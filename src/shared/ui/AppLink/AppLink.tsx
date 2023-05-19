import { FC, ReactNode, memo } from "react";
import { Link, LinkProps } from "react-router-dom";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./AppLink.module.scss";


interface AppLinkProps extends LinkProps {
    className?: string;
    children?: ReactNode;
}

export const AppLink: FC<AppLinkProps> = memo((props) => {
    const {
        to,
        children,
        className,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className])}
            {...otherProps}
        >
            {children}
        </Link>
    );
});
