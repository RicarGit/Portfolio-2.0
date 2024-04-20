type SideMenuProps = {
  menu: boolean
  project: string
  children: React.ReactNode
}

export const SideMenu = ({ menu, project, children }: SideMenuProps) => {
  return (
    <aside className={`${(menu || project) ? 'translate-x-0' : '-translate-x-full'} absolute modal-lg:w-[230px] w-full tablet:w-[210px] z-30 pt-7 flex flex-col h-dvh bg-dark-green border-x-[3px] tablet:border-l-0 border-y-[3px] rounded-r bg-[radial-gradient(circle_at_0_20%,_var(--tw-gradient-stops))] from-green via-dark-green via-65% to-dark-green overflow-y-auto tablet:overflow-y-visible -translate-x-full transition-all ease duration-700`}>
      {children}
    </aside>
  )
}