import Navbar from '../navbar'

const LayoutWithHeader = ({
  children,
}: {
  children: JSX.Element
}): JSX.Element => {
  return (
    <div className="dark bg-background min-h-screen">
      <Navbar />
      <main className="pt-[64px] xl:pt-[80px]">{children}</main>
    </div>
  )
}
export default LayoutWithHeader
