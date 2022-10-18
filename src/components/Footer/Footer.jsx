import s from './Footer.module.css'
import facebook from "../../icons/facebook-2.png";
import twitter from "../../icons/twitter-2.png";
import instagram from "../../icons/instagram-2.png";
import pinterest from "../../icons/pinterest-2.png";
import arrowDown from "../../icons/arrow-down-sign-to-navigate.png";
import shoppingCart from "../../icons/shopping-cart.png";

function Footer() {
    return (
        <div>
            <div className={s.container}>
                <div className={s.content}>
                    <div className={s.categoriesArea}>
                        <div className={s.categories}>
                            <div className={s.category}>INFORMATION</div>
                            <div className={s.item}>The brand</div>
                            <div className={s.item}>Local stores</div>
                            <div className={s.item}>Customer service</div>
                            <div className={s.item}>Privacy & cookies</div>
                            <div className={s.item}>Site map</div>
                        </div>
                        <div className={s.categories}>
                            <div className={s.category}>WHY BUY FROM US</div>
                            <div className={s.item}>Shipping & returns</div>
                            <div className={s.item}>Secure shopping</div>
                            <div className={s.item}>Testimonials</div>
                            <div className={s.item}>Award winning</div>
                            <div className={s.item}>Ethical trading</div>
                        </div>
                        <div className={s.categories}>
                            <div className={s.category}>YOUR ACCOUNT</div>
                            <div className={s.item}>Sign in</div>
                            <div className={s.item}>Register</div>
                            <div className={s.item}>View cart</div>
                            <div className={s.item}>View your lookbook</div>
                            <div className={s.item}>Track an order</div>
                            <div className={s.item}>Update information</div>
                        </div>
                        <div className={s.categories}>
                            <div className={s.category}>LOOKBOOK</div>
                            <div className={s.item}>Latest posts</div>
                            <div className={s.item}>Men's lookbook</div>
                            <div className={s.item}>Women's lookbook</div>
                            <div className={s.item}>Lookbook RSS feed</div>
                            <div className={s.item}>View your lookbook</div>
                            <div className={s.item}>Delete your lookbook</div>
                        </div>
                        <div className={s.categories}>
                            <div className={s.category}>CONTACT DETAILS</div>
                            <div className={s.item}>Head Office: Avenue Fashion, 180-182 Regent Street, London.</div>
                            <div className={s.item}>Telephone: 0123-456-789</div>
                            <div className={s.item}>Email: support@yourwebsite.com</div>
                        </div>
                    </div>
                    <div className={s.bannersArea}>
                        <div className={s.banner}>
                            <div className={s.text}>
                                <h1><b>AWARD WINNER</b></h1>
                                <h1>FASHION AWARDS 2016</h1>
                            </div>
                        </div>
                        <div className={s.banner}>
                            <div className={s.socialLinks}>
                                <div className={s.link}><img src={facebook} alt="facebook"/></div>
                                <div className={s.link}><img src={twitter} alt="twitter"/></div>
                                <div className={s.link}><img src={instagram} alt="instagram"/></div>
                                <div className={s.link}><img src={pinterest} alt="pinterest"/></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={s.footerBar}>
                    <div className={s.footerContent}>
                        <p>©2016 Avenue Fashion™</p>
                        <div className={s.leftFooterSide}>
                            <p>Design by RobbyDesigns.com</p>
                            <p>Dev by Loremipsum.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
