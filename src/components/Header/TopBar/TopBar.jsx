import s from './TopBar.module.css'
import arrowDown from '../../../icons/arrow-down-sign-to-navigate.png'
import shoppingCart from '../../../icons/shopping-cart.png'

function TopBar() {
    return (
        <div className={s.topBar}>
            <div className={s.content}>
                <div className={s.money}>
                    <p>Currency : GBP</p>
                    <img src={arrowDown} className={s.arrowDown} alt="arrowDown"/>
                </div>
                <div className={s.regButton}><p>Register</p></div>
                <div className={s.signButton}><p>Sign In</p></div>
                <div className={s.cart}>
                    <img src={shoppingCart} className={s.shoppingCart} alt="shoppingCart"/>
                    <p>empty</p>
                    <img src={arrowDown} className={s.arrowDown} alt="arrowDown"/>
                </div>
            </div>
        </div>
    );
}

export default TopBar;
