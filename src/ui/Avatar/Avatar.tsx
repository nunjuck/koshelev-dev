import { FC } from 'react'
import Image from 'next/image'
import { IAvatarProps, TSizeAvatarImage } from '@/ui/Avatar/interfaces'
import { ESizeImageAvatar } from '@/ui/Avatar/constants'
import styles from './Avatar.module.css'

export const Avatar: FC<IAvatarProps> = (props) => {
  const { src, alt, size } = props

  const getSizeAvatarImage = (size: TSizeAvatarImage) => {
    switch (size) {
      case 'medium':
        return ESizeImageAvatar.MEDIUM
      case 'small':
        return ESizeImageAvatar.SMALL
      default:
        return ESizeImageAvatar.MEDIUM
    }
  }

  const sizeAvatar = getSizeAvatarImage(size)

  return (
    <div className={styles.avatar} style={{ width: sizeAvatar, height: sizeAvatar }}>
      <Image src={src} alt={alt} width={sizeAvatar} height={sizeAvatar} title={alt} />
    </div>
  )
}
