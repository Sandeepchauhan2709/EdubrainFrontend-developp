import React from 'react'

const Notifications = (): JSX.Element => {
  return (
    <div className="bg-neutral-75 py-5 rounded-xl w-[300px] md:w-[400px]">
      <h1 className="font-Roboto font-normal text-neutral-40 text-[16px] px-4">
        Notification
      </h1>
      <div className="bg-neutral-55 w-full h-[1px] mt-5"></div>

      <div className="py-3 px-6 hover:bg-neutral-45 transition duration-300 cursor-pointer mt-5">
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-full bg-neutral-35"></div>
          <div>
            <div className="flex justify-between items-center">
              <h1 className="font-Montserrat font-semibold text-[16px] text-neutral-10">
                Text
              </h1>
              <p className="font-Roboto text-[14px] font-normal text-neutral-10 text-opacity-40">
                12:00 AM
              </p>
            </div>
            <p className="font-Roboto text-[14px] font-normal text-neutral-10 text-opacity-60 mt-[5px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
        </div>
      </div>

      <div className="py-3 px-6 hover:bg-neutral-45 transition duration-300 cursor-pointer">
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-full bg-neutral-35"></div>
          <div>
            <div className="flex justify-between items-center">
              <h1 className="font-Montserrat font-semibold text-[16px] text-neutral-10">
                Text
              </h1>
              <p className="font-Roboto text-[14px] font-normal text-neutral-10 text-opacity-40">
                12:00 AM
              </p>
            </div>
            <p className="font-Roboto text-[14px] font-normal text-neutral-10 text-opacity-60 mt-[5px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
        </div>
      </div>

      <div className="py-3 px-6 hover:bg-neutral-45 transition duration-300 cursor-pointer">
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-full bg-neutral-35"></div>
          <div>
            <div className="flex justify-between items-center">
              <h1 className="font-Montserrat font-semibold text-[16px] text-neutral-10">
                Text
              </h1>
              <p className="font-Roboto text-[14px] font-normal text-neutral-10 text-opacity-40">
                12:00 AM
              </p>
            </div>
            <p className="font-Roboto text-[14px] font-normal text-neutral-10 text-opacity-60 mt-[5px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notifications
