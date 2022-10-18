import s from './LocationDetails.module.css'
import mapImg from '../../../icons/map.png'
import locationIcon from '../../../icons/location.png'
import phoneIcon from '../../../icons/phone.png'
import linkIcon from '../../../icons/link.png'
import mailIcon from '../../../icons/mail.png'
import clockIcon from '../../../icons/clock.png'
import facebook from '../../../icons/facebook.png'
import twitter from '../../../icons/twitter.png'
import instagram from '../../../icons/instagram.png'
import pinterest from '../../../icons/pinterest.png'


function LocationDetails() {
    return (
        <div>
            <div className={s.mapContent}>
                <div className={s.mapImg}>
                    <img src={mapImg} alt="mapImg"/>
                </div>
                <div className={s.mapInfo}>
                    <div className={s.infoContent}>
                        <div className={s.title}>LONDON</div>
                        <div className={s.address}>180-182 Regent Street, London, W1B 5BT</div>
                        <div className={s.description}>Lorem ipsum dolor sit amet, consectetur adipiscing esi elit. Viorem ipsum dolor sit amet,
                            consectetur adipiscing esi elit. Viorem ipsum dolor sit amet, consectetur adipiscing esi elit. Viorem ipsum dolor sit amet,
                            consectetur adipiscing esi elit. Viorem ipsum dolor sit amet, consectetur adipiscing esi elit. Viorem ipsum dolor sit amet,
                        </div>
                        <div className={s.info}>
                            <img src={locationIcon} alt="locationIcon"/>
                            <p>180-182 Regent Street, London, W1B 5BT</p>
                        </div>
                        <div className={s.info}>
                            <img src={phoneIcon} alt="phoneIcon"/>
                            <p>0123-456-789</p>
                        </div>
                        <div className={s.info}>
                            <img src={linkIcon} alt="linkIcon"/>
                            <p>www.yourwebsite.com</p>
                        </div>
                        <div className={s.info}>
                            <img src={mailIcon} alt="mailIcon"/>
                            <p>support@yourwebsite.com</p>
                        </div>
                        <div className={s.info}>
                            <img src={clockIcon} alt="clockIcon"/>
                            <p>Monday-Friday: 9am to 6pm Saturday: 10am to 6pm Sunday: 10am to 2pm</p>
                        </div>
                        <div className={s.socialLinks}>
                            <div className={s.link}><img src={facebook} alt="facebook"/></div>
                            <div className={s.link}><img src={twitter} alt="twitter"/></div>
                            <div className={s.link}><img src={instagram} alt="instagram"/></div>
                            <div className={s.link}><img src={pinterest} alt="pinterest"/></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LocationDetails;
