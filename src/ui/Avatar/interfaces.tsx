export type TSizeAvatarImage = 'small' | 'medium'

export interface IAvatarProps {
  src: string
  alt: string
  size: TSizeAvatarImage
}
