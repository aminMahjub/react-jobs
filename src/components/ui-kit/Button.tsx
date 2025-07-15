import type { MouseEvent } from "react"

interface ButtonProps {
    color?: 'brand' | 'raised',
    type?: 'button' | 'submit',
    tag?: 'button' | 'anchor',
    variant?: 'fill' | 'text'
    href?: string,
    content: string,
    contentClass?: string,
    click?: (e: MouseEvent) => void
}

const Button = ({ 
    color = 'brand',
    type = 'button',
    tag = 'button',
    variant = 'fill', 
    content,
    href,
    contentClass = '',
    click }: ButtonProps) => {

    const getButtonVariantClass = () => {
        const fillVariant = {
            brand: 'bg-brand-sec--bg text-primary--txt',
            raised: 'bg-raised--bg text-primary--txt',
        }

        const textVariant = {
            brand: 'text-brand--txt',
            raised: 'text-raised--txt',
        }

        if (variant === 'fill') {
            return fillVariant[color]
        }

        return textVariant[color]

    }

    const getComponentClass = `${getButtonVariantClass()} rounded-lg px-4 py-2 cursor-pointer ${contentClass}`

    const handleButtonClick = (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
        if (click) {
            click(event)
        }
    }

    if (tag === 'anchor' || href) {
        return (<a href={href} className={getComponentClass} onClick={(event) => handleButtonClick(event)}>{ content }</a>)
    }

    return (
        <button type={type} className={getComponentClass} onClick={(event) => handleButtonClick(event)}>{ content }</button>
    )
}

export default Button