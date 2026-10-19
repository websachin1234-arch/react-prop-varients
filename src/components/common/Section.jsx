import BgImg from "../../assets/purple-bg.svg"
const Section = ({children}) => {
  return (
    <section className="bg-cover bg-center bg-no-repeat min-h-161 max-w-320.25 w-full flex flex-col items-center justify-center" style={{backgroundImage: `url(${BgImg})`}}>
      {children}
    </section>
  )
}

export default Section
