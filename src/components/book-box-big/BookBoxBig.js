import React from 'react';
import './BookBoxBiig.css';
import { Rate } from 'antd';
import { Icon } from 'antd';
import { Modal, Button, Popover } from 'antd';
import {Link} from 'react-router-dom';
let sumery =
    'رمان به هوای دزدیدن اسب‌ها نوشته‌ی پر پترسون(1952) یکی از مهم‌ترین رمان‌های ادبیات نروژ در چند سال گذشته محسوب می‌شود. رمانی که در سال ' +
    '2007برای نویسنده‌اش جایزه‌ی معتبر ((ایمپک دوبلین)) را به ارمغان آورد و او را یک شبه مشهور کرد. پترسون این رمان را در سال 2003 نوشت. ' +
    'داستانی از عمق سرمای نروژ. روایت از زندگی مردی در آستانه‌ی کهن‌سالی آغاز می‌شود که در اعماق جنگل‌های نروژ همراه سگش تنها در کلبه‌ای ' +
    'چوبی زندگی می‌کند. شادکام از این تنهایی و دوری از مردم خشمگین. حادثه‌ای کوچک در همسایگی‌‌اش داستان را می‌برد به پنجاه و اندی سال عقب.' +
    ' به کودکی قهرمان پترسون و روایت آن‌چه بر او گذشته تا به این زندگی رسیده است. رمانی داستان گو و به شدت مملو از خرده روایت . '

const info =()=> {
        Modal.info({
        title: 'به هوای دزدین اسب ها',
        content: (
            <div>
                <p className='sumery'>{sumery}</p>
            </div>
        ),
        onOk() {},
    });
};

const content = (
    <div>
        <p>Content</p>
        <p>Content</p>
    </div>
);

class BookBoxBig extends React.Component {
    render() {

        return(
            <div className='card-body' >
                <div style={{flex:'5'}}>
                    <img className='card-img' src={this.props.cover} />
                    <Icon type="shopping-cart" className='shopping-cart' />
                   <Link to='/book-page'>
                    <h4 className='card-name'>{this.props.title}</h4>
                        <p className="writer">{this.props.author}</p>
                    </Link>
                </div>
                <div  style={{flex:'1'}}>
                    <div className='poshte-jeld'> خلاصه </div>
                    <Icon type="read" className='posht-logo' onClick={info}/>
                    <Rate allowHalf defaultValue={4.5} className='stars'/>

                    <Popover content={this.props.publisher} title={this.props.price} trigger="click">
                        <Icon type="info-circle" className="info-book"  />
                    </Popover>
                 </div>

            </div>

        )
    }
}



export default BookBoxBig;