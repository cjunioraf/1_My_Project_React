import styles from './Message.module.css' 
import { useState, useEffect } from "react"

function Message({type, msg})
{           
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        
        setVisible(true)

        if(!msg){
            setVisible(false)            
        }
        // TIMER DE 3 SEGUNDOS PARA DESAPARECER A MSG 
        const timer = setTimeout(() => {
            setVisible(false)                
        }, 3000)
        // DESLIGA O TIMER 
        return () => clearTimeout(timer)  

    }, [msg])

    return(
        <>
            {/* COMO SE FOSSE UM IF visible == true <-> visible && */}
            {visible &&(
                <div className={`${styles.message} ${styles[type]}`}>
                    {msg}
                </div>        
            )}
        </>
    )       
}

export default Message