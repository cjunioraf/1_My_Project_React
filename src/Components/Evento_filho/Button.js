function Button({text, event})
{    
    return <button type="submit" onClick={event}>{text}</button>
}

export default Button