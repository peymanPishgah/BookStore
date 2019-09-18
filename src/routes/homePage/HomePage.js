import React from 'react';
import './HomePage.css';
import {Link} from 'react-router-dom';
import BookBoxBig from "../../components/book-box-big";
import {Icon } from 'antd';
import PodcastCard from '../../components/Podcast-card';


class HomePage extends React.Component {
    data = [
        { id: 1,
            cover: 'romanPic/ناتور دشت.jpg',
            title: 'ناتور دشت',
            author: 'جی.دی.سلینجر',
            publisher: 'نشر چشمه',
            price: '750000 تومان'
        },
        { id: 2,
            cover: 'romanPic/۱۹۸۴.jpg',
            title: '۱۹۸۴',
            author: 'جورج اورول',
            publisher: 'نشر چشمه',
            price: '45000 تومان'
        },
        { id: 3,
            cover: 'romanPic/بریت‌ماری اینجا بود.jpg',
            title: 'بریت‌ماری اینجا بود',
            author: 'دومينيك ژانيكو',
            publisher: 'نشر چشمه',
            price: '12000 تومان',
        },
        { id: 4,
            cover: 'romanPic/تنها در پاریس.jpg',
            title: 'تنها در پاریس',
            author: 'آیزاک نیوتن',
            publisher: 'نشر آوا',
            price: '27000 تومان'
        },
        { id: 5,
            cover: 'romanPic/داستان دو شهر.jpg',
            title: 'داستان دو شهر',
            author: 'مجتبی احمدوند',
            publisher: 'نشر نور',
            price: '25000 تومان'
        },
        { id: 6,
            cover: 'romanPic/داستان‌های پس از مرگ.jpg',
            title: 'داستان‌های پس از مرگ',
            author: 'دومينيك ژانيكو',
            publisher: 'نشر چشمه',
            price: '21000 تومان'
        },
        { id: 7,
            cover: 'romanPic/دختری که رهایش کردی.jpg',
            title: 'دختری که رهایش کردی',
            author: 'مارتین کوهن',
            publisher: 'نشر طلا',
            price: '25300 تومان'
        },
        { id: 8,
            cover: 'romanPic/دوئل و چند داستان دیگر.jpg',
            title: 'دوئل و چند داستان دیگر',
            author: 'شارون ام. کای',
            publisher: 'نشر یاد',
            price: '225000 تومان'
        },
        { id: 9,
            cover: 'romanPic/عقاید یک دلقک.jpg',
            title: 'عقاید یک دلقک',
            author: 'مجتبی احمدوند',
            publisher: 'نشر چشمه',
            price: '25020 تومان'
        },
        { id: 10,
            cover: 'romanPic/مزرعه حیوانات.jpg',
            title: 'مزرعه حیوانات',
            author: 'مارتین کوهن',
            publisher: 'نشر فردا',
            price: '25000 تومان'
        },
        { id: 1,
            cover: 'falsafePic/آشنایی با فلسفه هنر.jpg',
            title: 'آشنایی با فلسفه هنر',
            author: 'دومينيك ژانيكو',
            publisher: 'نشر چشمه',
            price: '12000 تومان'
        },
        { id: 2,
            cover: 'falsafePic/الفبای فلسفه.jpg',
            title: 'الفبای فلسفه',
            author: 'آیزاک نیوتن',
            publisher: 'نشر آوا',
            price: '27000 تومان'
        },
        { id: 3,
            cover: 'falsafePic/تاریخچه‌ی کوتاهی از فلسفه.jpg',
            title: 'تاریخچه‌ی کوتاه فلسفه',
            author: 'مجتبی احمدوند',
            publisher: 'نشر نور',
            price: '25000 تومان'
        },
        { id: 4,
            cover: 'romanPic/jozazkol.jpg',
            title: 'جز از کل',
            author: 'پیمان خاکسار',
            publisher: 'نشر چشمه',
            price: '281000 تومان'
        },
        { id: 7,
            cover: 'falsafePic/غروب بت‌ها یا فلسفیدن با پتک.jpg',
            title: 'غروب بت‌ها ',
            author: 'مجتبی احمدوند',
            publisher: 'نشر چشمه',
            price: '25020 تومان'
        }
        ];

    podcastData=[
        {
            id: 1,
            cover:'podcastCover/pbplus.jpg',
            title:'Bplus Podcast',
            issue:'خلاصه کتاب',
            talker:'علی بندری'
        },
        {
            id: 2,
            cover:'podcastCover/pchanelb.png',
            title:'ChannelB Podcast',
            issue:'رویدادهای واقعی از رسانه های معتبر',
            talker:'علی بندری'
        },
        {
            id: 3,
            cover:'podcastCover/pgap.jpg',
            title:'Gap Podcast',
            issue:'مصاحبه',
            talker:'عآندرانیک تیموریان'
        },{
            id: 4,
            cover:'podcastCover/pfoot.jpg',
            title:'Fooball Podcast',
            issue:'فوتبال',
            talker:'چگوارا'
        },
        {
            id: 5,
            cover:'podcastCover/pketab.png',
            title:'Ketab Podcast',
            issue:'روخوانی کتاب',
            talker:'مهراد'
        },
        {
            id: 6,
            cover:'podcastCover/pstar.jpg',
            title:'Start Podcast',
            issue:'درخشنده ها',
            talker:'آقای درخشان'
        },
        {
            id: 7,
            cover:'podcastCover/pseda.png',
            title:'Seda Podcast',
            issue:'موزیک و دوبله',
            talker:'شایان ناسزاوار'
        },
        {
            id: 2,
            cover:'podcastCover/pchanelb.png',
            title:'ChannelB Podcast',
            issue:'رویدادهای واقعی از رسانه های معتبر',
            talker:'علی بندری'
        }
    ];

    render() {
        return (
            <div className="flex-container">
      {/*----------------------big icons top-----------------*/}
                <div className='big-icons-holder'>
                    <Link to='/falsafe' >
                        <div>
                            <img src='./topsvg/yang.svg' className='big-icon'/>
                            <span className='icon-title'> فـلـسفـی </span>
                        </div>
                    </Link>
                    <Link to='/daneshgahi' >
                        <div>
                            <img src='./topsvg/004-student.svg' className='big-icon'/>
                            <span className='icon-title'> دانشگاهی </span>
                        </div>
                    </Link>
                    <Link to='/roman'>
                        <div>
                            <img src='./topsvg/002-book.svg' className='big-icon'/>
                            <span className='icon-title'>داستان و رمان </span>
                        </div>
                    </Link>
                    <Link to='/podcast'>
                        <div>
                            <img src='./topsvg/003-podcasttt.svg'  className='big-icon'/>
                            <span className='icon-title' >پادکست ها </span>
                        </div>
                    </Link>
                    <Link to='/'>
                        <div>
                            <img src='./topsvg/001-androiddd.svg' className='big-icon'/>
                            <span className='icon-title'> اپلیکیشن </span>
                        </div>
                    </Link>
                    <Link to='/'>
                        <div>
                            <img src='./topsvg/002-appleee.svg' className='big-icon'/>
                            <span className='icon-title'> اپلیکیشن </span>
                        </div>
                    </Link>
                    <Link to='/'>
                        <div>
                            <img src='./topsvg/headphones.svg' className='big-icon'/>
                            <span className='icon-title'>کتاب های صوتی </span>
                        </div>
                    </Link>
                </div>

                <Link to='/' className='home-title-holder'>
                        <Icon type="left" className='title-arrow'/>
                        <h2 className='home-titles'> محبوب ترین های ماه </h2>
                </Link>

                <div className="flex-container">
                    {this.data.map(
                        (item)=> (
                            <BookBoxBig title={item.title}
                                        cover={item.cover} author={item.author}
                                        publisher={item.publisher}
                                        price={item.price}
                            />
                        )
                    )}
                </div>
                {/*--------------secthion falsafi---------------*/}
                <div style={{width:'100%', display:'block', height:'20px'}}> </div>


                <Link to='/falsafe' target='_top' className='home-title-holder'>
                    <Icon type="left" className='title-arrow'/>
                    <h2 className='home-titles'> کتاب های فلسفی </h2>
                </Link>

                 <div className='flex-container'>
                     {
                         this.data.map(
                             (item,index) => {
                                 if (index < 5) {
                                     return (
                                         <BookBoxBig
                                            title={item.title} price={item.price}
                                            cover={item.cover} author={item.author}
                                            publisher={item.publisher}
                                         />
                                     )
                                 }
                             }
                         )
                     }
                </div>
                {/*-----------section podcast--------------*/}
                <div style={{width:'100%', display:'block', height:'20px'}}> </div>

                <Link to='/podcast' target='_top' className='home-title-holder'>
                    <Icon type="left" className='title-arrow'/>
                    <h2 className='home-titles'> پادکست ها </h2>
                </Link>
                <div style={{width:'100%', display:'block', height:'20px'}}> </div>

                <div className='flex-container'>
                    {
                        this.podcastData.map(
                            (item, index)=>{
                                if (index <3 ) {
                                    return (
                                            <PodcastCard
                                                title={item.title} isue={item.issue}
                                                cover={item.cover} talker={item.talker}
                                            />
                                    )
                                }
                            }
                        )
                    }
                </div>

                {/*-----------section daneshgahi--------------*/}
                <div style={{width:'100%', display:'block', height:'20px'}}> </div>

                <Link to='/daneshgahi' target='_top' className='home-title-holder'>
                    <Icon type="left" className='title-arrow'/>
                    <h2 className='home-titles'> کتاب های دانشگاهی </h2>
                </Link>

                <div className='flex-container'>
                    {
                        this.data.map(
                            (item,index) => {
                                if (index >8 && index <14) {
                                    return (
                                        <BookBoxBig
                                            title={item.title} price={item.price}
                                            cover={item.cover} author={item.author}
                                            publisher={item.publisher}
                                        />
                                    )
                                }
                            }
                        )
                    }
                </div>
            </div>
        )
    }
}

export default HomePage;