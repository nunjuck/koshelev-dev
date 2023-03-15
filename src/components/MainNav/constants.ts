import { IMainNavItem } from '@/components/MainNav/interfaces'

export const MAIN_NAV_ITEMS: IMainNavItem[] = [
  {
    label: 'Проекты',
    // TODO: Заменить на константу рутов
    link: '/project',
    disabled: true
  },
  {
    label: 'Блог',
    link: '/blog',
    disabled: true
  }
]
