import { ButtonProps as AntButtonProps } from 'antd';
import { ButtonStyled } from './index.styles';
import React from 'react';

export type ButtonType = 'default' | 'primary' | 'link' | 'dashed' | 'text';

type AllowedAntButtonTypes =
    | 'size'
    | 'disabled'
    | 'children'
    | 'block'
    | 'loading'
    | 'onClick'
    | 'htmlType'
    | 'style'
    | 'className';

export interface ButtonProps
    extends Pick<AntButtonProps, AllowedAntButtonTypes> {
    type?: ButtonType;
    suffixIcon?: undefined;
    prefixIcon?: undefined;
    icon?: undefined;
    htmlType?: 'button' | 'submit' | 'reset'; 
}

const WrappedButton = ({
    type = 'default',
    prefixIcon,
    suffixIcon,
    icon: iconConsume,
    children,
    loading,
    className = '',
    htmlType = 'button',
    ...props
}: ButtonProps) => {
    const extraProps: Pick<AntButtonProps, 'icon' | 'className'> = {};
    extraProps.className = `${className}`;
    return (
        <ButtonStyled
            type={type}
            htmlType={htmlType} 
            {...props}
            {...extraProps}
            loading={loading}
        >
            {children}
        </ButtonStyled>
    );
};

export const Button = React.memo(WrappedButton);
