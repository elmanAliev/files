import {
    ChangeEvent, InputHTMLAttributes, memo,
} from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLElement>, "value" | "onChange" | "readOnly">

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  autoFocus?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = "text",
        ...otherProps
    } = props;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames(cls.wrapper, {}, [className])}>
            <input
                className={cls.input}
                type={type}
                value={value}
                onChange={handleChange}
                {...otherProps}
            />
        </div>
    );
});
