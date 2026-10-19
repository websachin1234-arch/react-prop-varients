
const Badge = ({children}) => {
  return (
    <div className="h-7.25 py-1.5 px-4 bg-badge max-w-fit text-white text-sm leading-[100%] flex items-center justify-center rounded-[114.9px] cursor-pointer">
      {children}
    </div>
  )
}

export default Badge
