import { ImgHTMLAttributes } from 'react'

import styles from './Avatar.module.css'

interface AvatarPros extends ImgHTMLAttributes<HTMLImageElement>{
    hasBorder?: boolean;
}

export function Avatar({ hasBorder = true, ...props}: AvatarPros) {
    // const { hasBorder = true, src } = props;
    return (   
        <img 
            className={ hasBorder ? styles.avatarWithBorder : styles.avatar } 
            {
               ...props 
            }
            // src={src} 
            // alt=""
        />
    )
}