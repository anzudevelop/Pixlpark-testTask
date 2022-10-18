import s from './Header.module.css'
import TopBar from "./TopBar/TopBar";
import searchIcon from '../../icons/search.png'
import bgPhoto from '../../icons/headerPhoto.png'
import SubNavs from "./SubNavs/SubNavs";
import {useState} from "react";

function Header() {
    const [categoryEnter, setCategoryEnter] = useState({mens: false, womens: false, brand: false, stories: false, lookbook: false})

    const mouseEnter = (categoryName, state) => {
        switch (categoryName) {
            case 'mens':
                if(state) setCategoryEnter({mens: true, womens: false, brand: false, stories: false, lookbook: false})
                else setCategoryEnter({mens: false, womens: false, brand: false, stories: false, lookbook: false})
                break
            case 'womens':
                if(state) setCategoryEnter({mens: false, womens: true, brand: false, stories: false, lookbook: false})
                else setCategoryEnter({mens: false, womens: false, brand: false, stories: false, lookbook: false})
                break
            case 'brand':
                if(state) setCategoryEnter({mens: false, womens: false, brand: true, stories: false, lookbook: false})
                else setCategoryEnter({mens: false, womens: false, brand: false, stories: false, lookbook: false})
                break
            case 'stories':
                if(state) setCategoryEnter({mens: false, womens: false, brand: false, stories: true, lookbook: false})
                else setCategoryEnter({mens: false, womens: false, brand: false, stories: false, lookbook: false})
                break
            case 'lookbook':
                if(state) setCategoryEnter({mens: false, womens: false, brand: false, stories: false, lookbook: true})
                else setCategoryEnter({mens: false, womens: false, brand: false, stories: false, lookbook: false})
                break
        }
    }

    return (
        <div>
            <TopBar />
            <div className={s.content}>
                <div className={s.companyName}><p><b>AVENUE</b> FASHION</p></div>
                <div className={s.nav}>
                    <div className={s.content}>
                        <div className={s.category} onMouseEnter={() => mouseEnter('mens', true)} onMouseLeave={() => mouseEnter('mens', false)}>
                            <p>MENS</p>
                            {categoryEnter.mens ? <SubNavs.Mens /> : null}
                        </div>
                        <div className={s.category} onMouseEnter={() => mouseEnter('womens', true)} onMouseLeave={() => mouseEnter('womens', false)}>
                            <p>WOMENS</p>
                            {categoryEnter.womens ? <SubNavs.Womens /> : null}
                        </div>
                        <div className={s.category} onMouseEnter={() => mouseEnter('brand', true)} onMouseLeave={() => mouseEnter('brand', false)}>
                            <p>THE BRAND</p>
                            {categoryEnter.brand ? <SubNavs.Brand /> : null}
                        </div>
                        <div className={s.category} onMouseEnter={() => mouseEnter('stories', true)} onMouseLeave={() => mouseEnter('stories', false)}>
                            <p>LOCAL STORIES</p>
                            {categoryEnter.stories ? <SubNavs.LocalStories /> : null}
                        </div>
                        <div className={s.category} onMouseEnter={() => mouseEnter('lookbook', true)} onMouseLeave={() => mouseEnter('lookbook', false)}>
                            <p>LOOK BOOK</p>
                            {categoryEnter.lookbook ? <SubNavs.Lookbook /> : null}
                        </div>
                    </div>
                </div>
                <div className={s.search}>
                    <div className={s.input}>
                        <input type="text" placeholder={'Search..'}/>
                        <img src={searchIcon} alt="search"/>
                    </div>
                </div>
            </div>
            <div className={s.bgPhoto}>
                <img src={bgPhoto} alt="bgPhoto"/>
                <div className={s.text}>
                    <h1><b>LOCAL</b> STORES</h1>
                    <h2>FIND A STORE NEAR YOU</h2>
                </div>
            </div>
        </div>
    );
}

export default Header;
