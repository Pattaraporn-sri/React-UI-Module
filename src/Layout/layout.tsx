import App from "../App";
import Style from './layout.module.css'
import img_beans from '../image/Beans-coffee.png'
import logo from '../image/logo2.png'
import shop from '../image/shop.png'
import find from '../image/find.png'
import bars from '../image/bars.png'
import email from '../image/email.png'
import latte from '../image/latte.png'
import different_beans from '../image/different_beans.png'
import croissant from '../image/croissant2.png'
import cup from '../image/coffee-cup2.png'
import coffee1 from '../image/coffee-1.jpg'
import box1 from '../image/box1.png'
import box2 from '../image/box2.png'
import box3 from '../image/box3.png'
import box4 from '../image/box4.png'
import box5 from '../image/box5.png'
import box6 from '../image/box6.png'
import iconC from '../image/icon-c.png'
import ig from '../image/ig.png'
import tw from '../image/twitter.png'
import f from '../image/facebook.png'
import t from '../image/icon-t.png'
import v from '../image/icon-v.png'
import line from '../image/icon-line.png'


function Layout() {
  return (
    <>
    <div >
        <div className={Style.box_section}>
         <div className={Style.nav}>
            <div className={Style.LOGO}>
                <img className={Style.logo} src={logo}/>
            </div>
            <ul className={Style.UL}>
                <li >HOME</li>
                <li className={Style.li}>PACES</li>
                <li >PORTFOLIO</li>
                <li >BLOG</li>
                <li >SHOP</li>
                <li >ELEMENT</li>
                <li ><img className={Style.shop} src={shop}/></li>
                <li ><img className={Style.find} src={find}/></li>
                <li ><img className={Style.bars} src={bars}/></li>
            </ul>
            
            </div>
           <div className={Style.offer_tag}><h1 className={Style.OFFER}>WHAT WE OFFER</h1></div>
        </div>
        
        <div className={Style.coffee_brands}>COFFEE BRANDS</div>
        <div className={Style.line_beans}>
            <hr className={Style.hr_1}/>
                <p><img className={Style.img_beans} src={img_beans}/></p>
            <hr className={Style.hr_2}/>
        </div>
        <div className={Style.p_text}>
            <p className={Style.p}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem ipsum assumenda non dignissimos aspernatur ut repellendus libero?</p>
        </div>
        <div className={Style.container}>
            <ul className={Style.ul_con}>
            <li className={Style.box1}>
                <img className={Style.latte} src={latte}/>
                <p>COFFEE TYPES</p>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, fugiat fugit?</p>
            </li>

            <li className={Style.box2}>
                <img className={Style.different_beans} src={different_beans}/>
                <p>DIFFERENT BEANS</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, iure similique.</p>
            </li>

            <li className={Style.box3}>
                <img className={Style.croissant} src={croissant}/>
                <p>COFFEE & PASTRY</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, rem quaerat!</p>
            </li>

            <li className={Style.box4}>
                <img className={Style.cup} src={cup}/>
                <p>COFFEE TO GO</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, corporis cumque!</p>
            </li>
            </ul>
        </div>
        <div className={Style.section}>
                <li className={Style.box_section1}>
                    <img className={Style.coffee1} src={coffee1}/>
                </li>

                <li className={Style.box_section2}>
                    <div className={Style.box_sec2}></div>
                        <div className={Style.s2}>
                        <h3 className={Style.s2_h3}>HOURS</h3>
                        <p className={Style.s2_p}>Mon-Fri//9.00-23.00</p>
                        <p className={Style.s2_p}>Sat//10.00-1.00</p>
                        <p className={Style.s2_p}>Sun//CLOSE</p>
                        </div>
                    
                </li>
                <li className={Style.box_section3}></li>

                <li className={Style.box_section4}>
                    <div className={Style.box_sec4}></div>
                    <div className={Style.s4}>
                            <h3 className={Style.s4_h3}>OUR SOURCING</h3>
                            <div className={Style.S4}>
                                <p className={Style.s4_p}>Costa</p>
                                <p className={Style.s4_p}>Kenya</p>
                                <p className={Style.s4_p}>Brasil</p>
                                <p className={Style.s4_p}>Columbia</p>
                                <p className={Style.s4_p}>Ethiopia</p> 
                            </div>
                    </div>
                </li>

                <li className={Style.box_section5}>
                    <div className={Style.box_sec5}></div>
                    <div className={Style.s5}>
                        <h3 className={Style.s5_h3}>RESERVATIONS</h3>
                        <p className={Style.s5_p}>Reservation numbers:</p>
                        <p className={Style.s5_p}>+458-874-36-21</p>
                        <p className={Style.s5_p}>+458-471-56-36</p>
                    </div>
                </li>
                <li className={Style.box_section6}></li>

                <li className={Style.box_section7}>
                    <div className={Style.box_sec7}></div>
                    <div className={Style.s7}>
                        <h3 className={Style.s7_h3}>STORES</h3>
                        <p className={Style.s7_p}>Dunsmula Ave, LA</p>
                        <p className={Style.s7_p}>Atoins Ave, NY</p>
                        <p className={Style.s7_p}>Mlik Street, Bosson</p>
                    </div>
                </li>
                <li className={Style.box_section8}>box8</li>
        </div>
        <div className={Style.bottom_nav}>
            <div className={Style.bottom_nav1}>
                <img className={Style.box1_bottom} src={box1}/>
            </div>
            <div className={Style.bottom_nav2}>
                <img className={Style.box2_bottom} src={box2}/>
            </div>
            <div className={Style.bottom_nav3}>
                <img className={Style.box3_bottom} src={box3}/>
            </div>
            <div className={Style.bottom_nav4}>
                <img className={Style.box4_bottom} src={box4}/>
            </div>
            <div className={Style.bottom_nav5}>
                <img className={Style.box5} src={box5} />
            </div>
            <div className={Style.bottom_nav6}>
                <img className={Style.box6} src={box6}/>
            </div>
        </div>

        {/* รูปข้างล่าง */}
        <div className={Style.bottom_box}>
            
            <div className={Style.bottom_text}>
        
                <div><img className={Style.bottom_logo} src={logo}/></div>
                <div className={Style.bottom_p_text}>
                <p className={Style.buttom_p}>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae praesentium labore, a amet adipisci quisquam unde obcaecati officia, optio, doloremque dolorum vero exercitationem repudianda"</p>
                </div>
                <div className={Style.STORES}>STORES</div>
                <p className={Style.bottom_text_p}>Dunsmuir Ave, Los Angeles, CA 90036, USA Atkins Ave, Brooklyn, NY 11208, USA</p>
                <div className={Style.bottom_input_text}>NEWS AS FRESH AS OUR COFEE</div>
                <div  className={Style.bottom_input_box}>
                    <input className={Style.bottom_input} placeholder="your E-mail Address" ></input>
                    <div className={Style.bottom_email_icon}>
                    <img className={Style.bottom_email_box} src={email} />  
                    </div>  
                </div>
            </div>
        </div>

        <div className={Style.end}>
            <div className={Style.bottom_end}>
                <img className={Style.c} src={iconC}/>
                <p className={Style.end_p}>Copyright Themes </p>
            </div>

            <div className={Style.End}>
            <div className={Style.home}>HOME</div>
            <div className={Style.about}>ABOUT</div>
            <div className={Style.shop_end}>SHOP</div>
            <div className={Style.contact}>CONTACT</div>
            </div>

            <div className={Style.ICON}>
                <div className={Style.ICON1}>
                    <img className={Style.ig} src={ig}/>
                </div>
                <div className={Style.ICON2}>
                    <img className={Style.tw} src={tw}/>
                </div>
                <div className={Style.ICON3}>
                    <img className={Style.f} src={f}/>
                </div>
                <div className={Style.ICON4}>
                    <img className={Style.t} src={t}/>
                </div>
                <div className={Style.ICON5}>
                    <img className={Style.v} src={v}/>
                </div>
            </div>
            <div className={Style.IMG}>
                <div className={Style.img_end}>
                    <img className={Style.line} src={line}/>
                </div>
            </div>
        </div>

    </div>
    </>
  )
}

export default Layout