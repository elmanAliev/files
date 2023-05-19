import { memo } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Text.module.scss';

type TextTheme = "primary" | "error";

type TextAlign = "right" | "left" | "center";

type TextSize = "size_s" | "size_m" | "size_l";


interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
  size?: TextSize;
}

type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    "size_s": 'h3',
    "size_m": 'h2',
    "size_l": 'h1',
};

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        theme = "primary",
        align = "left",
        size = "size_m",
    } = props;

    const mods: Mods = {
        [cls[theme]]: true,
        [cls[align]]: true,
        [cls[size]]: true,
    };

    const HeaderTag = mapSizeToHeaderTag[size];

    return (
        <div className={classNames(cls.Text, mods, [className])}>
            {title
            && (
                <HeaderTag
                    className={cls.title}
                >
                    {title}
                </HeaderTag>
            )}
            {text
            && (
                <p
                    className={cls.text}
                >
                    {text}
                </p>
            )}
        </div>
    );
});
