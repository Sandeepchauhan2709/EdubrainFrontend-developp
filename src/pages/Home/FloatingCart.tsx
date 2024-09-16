import { useSelector } from 'react-redux'
import { type RootState } from '../../store'
import { Link } from 'react-router-dom'
import PrimaryButton from '../../components/buttons/PrimaryButton'
import cartIcon from '../../assets/icons/shopping_cart.svg'
import { getPriceAfterDiscount } from '../../utils/getPriceAfterDiscount'

const FloatingCart = (): JSX.Element | null => {
  const { cartItems } = useSelector((state: RootState) => state.cartItems)
  return (
    <div
      className={`flex gap-14 fixed bottom-4 right-4 z-50 bg-[#191919] px-8 py-4 rounded-2xl transition-transform
    ${cartItems.length === 0 ? 'scale-0' : 'scale-100'}
    `}
    >
      <div className="flex gap-11 text-white font-Montserrat">
        <div className="flex flex-col items-center gap-1">
          <h3 className="h3">{cartItems.length}</h3>
          <span>Courses</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <h3 className="h3">
            ₹
            {cartItems.reduce(
              (acc, item) =>
                acc +
                getPriceAfterDiscount(item.basePrice, item.discountedPercent),
              0
            )}
          </h3>
          <span>Total</span>
        </div>
      </div>
      <Link to="/cart">
        <PrimaryButton className="flex gap-2 items-center">
          <img src={cartIcon} alt="cart icon" className="invert" />
          <span>Go to Cart</span>
        </PrimaryButton>
      </Link>
    </div>
  )
}
export default FloatingCart
