'use client'
import React from 'react'
import Link from 'next/link';
import { Button } from '@nextui-org/react'

export interface ButtonProps {
    label: string;
    role: 'button' | 'link';
    variant: 'primary' | 'secondary' | 'light' | 'dark' | 'outline';
    url?: string;
    icon?: React.ReactNode;
}

export default function ButtonComponent({ label, role, variant, url, icon }: ButtonProps) {
    const baseStyle = 'btn ';
    const style: Record<string, string> = {
        primary: 'primary-btn',
        secondary: 'secondary-btn',
        light: 'light-btn',
        dark: 'dark-btn',
        outline: 'outline-btn',
    }

    return (
        <>
            {role === 'button' ? (
                <Button as="button" className={baseStyle + (style[variant])}>
                    {icon ? icon : null}
                    {label}
                </Button>
            ) : (
                <Link href={url || '#'} className={baseStyle + (style[variant])}>
                    {icon ? icon : null}
                    {label}
                </Link>
            )}
        </>
    );
}