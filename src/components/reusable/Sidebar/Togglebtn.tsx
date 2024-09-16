import React from 'react'
const Togglebtn = (): JSX.Element => {
  return (
    <div className="">
      <div className="border-neutral-55 border-2 rounded-xl h-[45px] flex items-center justify-between px-1">
        {/* <button className="text-white">Light</button>
    <button className="text-white">Dark</button> */}
        <button
          className="text-primary-55 rounded-lg bg-primary-35/15 dark:bg-[transparent] px-9 py-1 tooltip dark:text-neutral-40 dark:px-9 dark:py-2 focus:outline-none font-roboto font-normal"
          onClick={() => {
            document.body.classList.remove('dark')
          }}
        >
          Light
        </button>
        <button
          className=" dark:text-primary-55 text-neutral-60 dark:rounded-lg dark:bg-primary-95 dark:px-9 dark:py-1 dark:tooltip px-9 py-2 focus:outline-none font-roboto font-normal"
          onClick={() => {
            document.body.classList.add('dark')
          }}
        >
          Dark
        </button>
      </div>
    </div>
  )
}

export default Togglebtn
