export default interface Menu {
  title: string
  icon?: string
  to?: string
  section?: string
  submenu?: SubMenu[]
}

interface SubMenu {
  title: string
  icon?: string
  to?: string
  section?: string
}
