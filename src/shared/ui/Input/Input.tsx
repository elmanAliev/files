import {
    ChangeEvent, InputHTMLAttributes, memo,
} from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLElement>, "value" | "onChange" | "readOnly">

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  hasError?: boolean;
  touched?: boolean;
  errorText?: string
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange: handleChange,
        type = "text",
        hasError,
        errorText,
        touched,
        ...otherProps
    } = props;

    return (
        <div className={classNames(cls.wrapper, {}, [className])}>
            <input
                className={cls.input}
                type={type}
                value={value}
                onChange={handleChange}
                {...otherProps}
            />
            {hasError ? <span className={cls.error}>{touched && errorText}</span> : null}
        </div>
    );
});
