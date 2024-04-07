type SideMenuProps = {
  children: React.ReactNode
}

export const SideMenu = ({ children }: SideMenuProps) => {
  return (
    <aside className="absolute modal-lg:w-[230px] w-full tablet:w-[210px] z-30 pt-7 flex flex-col h-dvh bg-dark-green border-r-[3px] border-y-[3px] rounded-r bg-[radial-gradient(circle_at_0_25%,_var(--tw-gradient-stops))] from-green via-dark-green via-70% to-dark-green overflow-y-auto tablet:overflow-y-visible">
      {children}
    </aside>
  )
}