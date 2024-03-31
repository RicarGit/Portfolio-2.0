type MediaButtonProps = {
  children: React.ReactNode
}

export const SocialMediaButtons = ({ children }: MediaButtonProps) => {
  return (
    <div className="absolute tablet:top-[10%] top-[6%] laptop:mr-2 flex desktop:gap-12 gap-10">
      {children}
    </div>
  )
}
