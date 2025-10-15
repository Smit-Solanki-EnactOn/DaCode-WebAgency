'use client'
import React from 'react'
import Link from 'next/link';
import '../../app/scss/button.scss';

export interface ButtonProps {
    label?: string;
    role: 'button' | 'link';
    variant: 'primary' | 'secondary' | 'dark' | 'outline' | 'filter' | 'custom';
    url?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    customClass?: string;
}

export default function ButtonComponent({ label, role, variant, url, leftIcon, rightIcon, customClass }: ButtonProps) {
    const baseStyle = 'button ';
    const style: Record<string, string> = {
        primary: 'primary-btn',
        secondary: 'secondary-btn',
        dark: 'dark-btn',
        outline: 'outline-btn',
        filter: 'filter-btn',
        custom: 'custom-btn'
    }

    return (
        <>
            {role === 'button' ? (
                <button className={baseStyle + (style[variant]) + ' ' + (customClass || '')}>
                    {leftIcon ? leftIcon : null}
                    {label ? label : null}
                    {rightIcon ? rightIcon : null}
                </button>
            ) : (
                <Link href={url || '#'} className={baseStyle + (style[variant]) + ' ' + (customClass || '')}>
                    {leftIcon ? leftIcon : null}
                    {label ? label : null}
                    {rightIcon ? rightIcon : null}
                </Link>
            )}
        </>
    );
}