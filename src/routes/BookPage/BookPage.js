import React from 'react';
import './BookPage.css';
import { Button } from 'antd';
import BookBoxBig from '../../components/book-box-big/BookBoxBig';



class BookPage extends React.Component{
    render(){
        console.log(this.props);

        return(
            <div className='container page-container' >
                <div style={{marginBottom:'20px', height:'5px'}}> </div>
                <div style={{display:'flex'}}>
                    <span className='bp-title'><span style={{color:'#16bf82'}}>نویسنده: </span> استیو تولتز</span>
                    <span className='bp-title'><span style={{color:'#16bf82'}}> انتشارات: </span> {this.props.price}</span>
                    <span className='bp-title'><span style={{color:'#16bf82'}}>نام کتاب: </span> جزء از کل </span>
                </div>

                <div className='book-info-holder'>
                    <div className='bp-img-holder'>
                        <img style={{backgroundImage:'url("joz2.jpeg")'}} className='bp-img' />
                    </div>
                    <div className='bp-sumery'>

                        <p>
                            رمان به هوای دزدیدن اسب‌ها نوشته‌ی پر پترسون(1952) یکی از مهم‌ترین رمان‌های ادبیات نروژ در چند سال گذشته محسوب می‌شود. رمانی که در سال
                            2007برای نویسنده‌اش جایزه‌ی معتبر ((ایمپک دوبلین)) را به ارمغان آورد و او را یک شبه مشهور کرد. پترسون این رمان را در سال 2003 نوشت.
                            داستانی از عمق سرمای نروژ. روایت از زندگی مردی در آستانه‌ی کهن‌سالی آغاز می‌شود که در اعماق جنگل‌های نروژ همراه سگش تنها در کلبه‌ای
                            چوبی زندگی می‌کند. شادکام از این تنهایی و دوری از مردم خشمگین. حادثه‌ای کوچک در همسایگی‌‌اش داستان را می‌برد به پنجاه و اندی سال عقب.
                            به کودکی قهرمان پترسون و روایت آن‌چه بر او گذشته تا به این زندگی رسیده است. رمانی داستان گو و به شدت مملو از خرده روایت . به کودکی قهرمان پترسون و روایت آن‌چه بر او گذشته تا به این زندگی رسیده است. روایت از زندگی مردی در آستانه‌ی کهن‌سالی آغاز می‌شود  رمانی داستان گو و به شدت مملو از خرده روایت.. </p>
                    </div>
                    <div className='bp-img-writer-holder'>
                        <img style={{backgroundImage:'url("steev.jpg")'}} className='bp-img-writer' />
                    </div>
                </div>
                <div style={{width:'70%', margin:'20px auto',textAlign:'justify', direction:'rtl'}}>
                    <h2 >مترجم:</h2>
                    <p>پیمان خاکسار که به زیبایی هرچه تمام تر کار ترجمه را انجام داده است در مقدمه کتاب آورده است:

                        جزء از کل کتابی است که هیچ وصفی، حتا حرف های نویسنده اش، نمی تواند حق مطلب را ادا کند.</p>
                </div>
                <div style={{marginTop:'30px', textAlign:'center'}}>
                    <Button className='bp-btn-dl'>
                        دانلود - 25000 تومان
                    </Button>
                    <Button className='bp-btn-search' type="dashed">جست و جو برای نسخه صوتی</Button>
                    <Button type="dashed" className='bp-btn-nemune'>
                        دریافت نسخه نمونه
                    </Button>
                    <Button type="dashed" className='bp-btn-nazarat'>
                        مشاهده نظرات
                    </Button>
                </div>
                <br/>
                <h2 className='pishnahad-title'> پیشنهاد برای شما </h2>
                <br/>


            </div>
        )
    }
}

export default BookPage