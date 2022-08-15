import Navbar from "./Navbar";

export default function Layout({children}) {

  return (
    <div>
      <Navbar />
        <div className="container mx-auto px-2">
            <div className="md:max-w-[668px] mx-auto">
              {children}
            </div>
        </div>
    </div>
  )
}
