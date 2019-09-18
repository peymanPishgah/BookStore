import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import './Footer.css';
import { Form, Icon, Input, Button} from 'antd';


class Footer extends Component {
    render() {
        return(
            <div className='footer-box'>
                <div className='footer-left-box'>
                    <h6>Copyrights can be granted by public law and are in that case considered "territorial rights"</h6>
                    {/*<br/>*/}
                    <h6 style={{borderTop: '1px solid black',textAlign:"center", paddingTop: '5px'}}> برای اطلاع از نشرهای جدید ثبت نام کنید </h6>
                    <form className='footer-form'>
                            <input className='footer-input-1' type="email" placeholder="ایمل خود را وارد کنید"/>
                                <input className='footer-input-2' type="submit" value="ارسال"/>
                    </form>
                    <p>با خرید کتاب از بهترین ناشران ایرانی در موضوعات مختلف، کاربران می‌توانند در اپلیکیشن کتابخانه‌ای‌ شخصی برای خود بسازند و از امکانات منحصر به فرد آن استفاده کنند. برای تیم فیدیبو هدف خرید کتاب نیست بلکه ایجاد محیطی بری ارتباط بیشتر اهالی کتاب است.</p>

                </div>
                <div className='media-holder-1'>
                    <Link to='/'> <Icon type="twitter" className='footer-icon'/></Link>
                    <Link to='/'> <Icon type="mail" className='footer-icon'/></Link>
                    <Link to='/'> <Icon type="youtube" className='footer-icon'/></Link>
                    <Link to='/'> <Icon type="facebook" className='footer-icon'/></Link>
                    <Link to='/'> <Icon type="skype" className='footer-icon'/></Link>
                </div>
                <div className='footer-right-box'>
                    <div style={{flex:'1'}}>
                        <button className='button-app footer-btnn'  >دانلود اپلیکیشن   </button>
                        <button  className='button-forush footer-btnn' >پرفروشترین ها </button>
                        <button  className='button-soti footer-btnn' >  کتاب های صوتی </button>


                    </div>
                    <div style={{flex:'1'}}>
                        <Link to='#'><button className='button-app footer-btn'  >دانلود اپلیکیشن   </button></Link>
                        <Link to='#'><button  className='button-forush footer-btn' >پرفروشترین ها </button></Link>
                        <Link to='#'><button  className='button-soti footer-btn' >  کتاب های صوتی </button></Link>

                    </div>
                </div>
            </div>
        )
    }
}


export default Footer;