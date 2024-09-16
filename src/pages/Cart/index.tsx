import { useSelector } from 'react-redux'
import LayoutWithHeader from '../../components/layouts/LayoutWithHeader'
import { type RootState } from '../../store'
import PriceDetailsCard from './PriceDetailsCard'
import CartItem from './CartItem'
import { useQuery } from '@tanstack/react-query'
import { type ICourse } from '../../types/course.types'
import { getAllCourses } from '../../api/courses'
import { useEffect, useState } from 'react'

const CartPage = (): JSX.Element => {
  const { cartItems } = useSelector((state: RootState) => state.cartItems)
  const [cartItemsFullDetails, setCartItemsFullDetails] = useState<ICourse[]>(
    []
  )
  const { data, isLoading, isError } = useQuery<ICourse[]>({
    queryKey: ['courses'],
    queryFn: getAllCourses,
  })

  useEffect(() => {
    if (!data) return
    setCartItemsFullDetails(
      cartItems.map((item) =>
        data.find((course) => course._id === item.id)
      ) as ICourse[]
    )
  }, [data, cartItems])

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error</div>
  return (
    <LayoutWithHeader>
      <div className="padding-x m-auto flex flex-col gap-12 pb-12 max-w-[1800px]">
        <div className="mt-12 flex flex-col gap-6 ">
          <h3 className="h3 text-neutral-10">Course Cart Summary</h3>
          <span className="body-text-md text-neutral-10">
            {cartItems.length} courses in cart
          </span>
        </div>
        <div className="flex gap-10 flex-col xl:flex-row">
          <div className="flex-grow flex flex-col gap-10">
            {cartItemsFullDetails.length > 0 ? (
              cartItemsFullDetails.map((item) => (
                <CartItem key={item?._id} item={item as any} />
              ))
            ) : (
              <div>
                <h3 className="h3 text-neutral-10">No items in cart</h3>
                <span className="body-text-md text-neutral-10">
                  Add courses to cart to see them here
                </span>
              </div>
            )}
          </div>
          <PriceDetailsCard items={data!} />
        </div>
      </div>
    </LayoutWithHeader>
  )
}
export default CartPage
