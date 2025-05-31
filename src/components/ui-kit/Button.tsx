interface ButtonProps {
    color?: 'brand' | 'raised',
    type?: 'button' | 'submit',
    tag?: 'button' | 'anchor',
    href?: string,
    content: string
}

const Button = ({ color = 'brand', type = 'button', tag = 'button', content, href}: ButtonProps) => {
    const colorVariant = {
        brand: 'bg-brand-sec--bg text-primary--txt',
        raised: 'bg-raised--bg text-primary--txt',
    }

    if (tag === 'anchor' || href) {
        return (<a href={href} className={`${colorVariant[color]} rounded-lg px-4 py-2`}>{ content }</a>)
    }

    return (
        <button type={type} className={`${colorVariant[color]} rounded-lg px-4 py-2`}>{ content }</button>
    )
}

export default Button