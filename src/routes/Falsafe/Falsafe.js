import React from 'react';
import BookBoxBig from '../../components/book-box-big';
import Paging from '../../components/Paging';

class Falsafe extends React.Component {
         data = [
             { id: 1,
                 cover: 'falsafePic/فلسفه در شش ساعت و پانزده دقيقه.jpg',
                 title: 'فلسفه در ... ',
                 author: 'شارون ام. کای',
                 publisher: 'نشر چشمه',
                 price: '80000 تومان'
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
                 cover: 'falsafePic/گفتگوهای فلسفی.jpg',
                 title: 'گفتگوهای فلسفی',
                 author: 'دومينيك ژانيكو',
                 publisher: 'نشر چشمه',
                 price: '21000 تومان'
             },
             { id: 5,
                 cover: 'falsafePic/تسلی‌بخشی‌های‌ فلسفه‌.jpg',
                 title: 'تسلی‌بخشی‌های‌ فلسفه‌',
                 author: 'مارتین کوهن',
                 publisher: 'نشر طلا',
                 price: '25300 تومان'
             },
             { id: 6,
                 cover: 'falsafePic/عرفان و منطق.jpg',
                 title: 'عرفان و منطق',
                 author: 'شارون ام. کای',
                 publisher: 'نشر یاد',
                 price: '225000 تومان'
             },
             { id: 7,
                 cover: 'falsafePic/غروب بت‌ها یا فلسفیدن با پتک.jpg',
                 title: 'غروب بت‌ها ',
                 author: 'مجتبی احمدوند',
                 publisher: 'نشر چشمه',
                 price: '25020 تومان'
             },
             { id: 8,
                 cover: 'falsafePic/فلسفه برای نوآموزان.jpg',
                 title: 'فلسفه برای نوآموزان',
                 author: 'مارتین کوهن',
                 publisher: 'نشر فردا',
                 price: '25000 تومان'
             },
             { id: 9,
                 cover: 'falsafePic/آشنایی با فلسفه هنر.jpg',
                 title: 'آشنایی با فلسفه هنر',
                 author: 'دومينيك ژانيكو',
                 publisher: 'نشر چشمه',
                 price: '12000 تومان',
             },
             { id: 10,
                 cover: 'falsafePic/فلسفه سیاسی.jpg',
                 title: 'فلسفه سیاسی',
                 author: ' جیم ران',
                 publisher: 'نشر ایلیا',
                 price: '700 تومان'
             },
             { id: 11,
                 cover: 'falsafePic/فلسفه‌ای برای زندگی.jpg',
                 title: 'فلسفه‌ای برای زندگی',
                 author: ' پُل تامسون',
                 publisher: 'نشر آواز',
                 price: '25800 تومان'
             },
             { id: 12,
                 cover: 'falsafePic/معبد سکوت.jpg',
                 title: 'آمعبد سکوت',
                 author: 'شارون ام. کای',
                 publisher: 'نشر چشمه',
                 price: '1999 تومان'
             },
             { id: 13,
                 cover: 'falsafePic/هرمنوتیک.jpg',
                 title: 'هرمنوتیک',
                 author: ' جیم ران',
                 publisher: 'نشر مهر',
                 price: '16000 تومان'
             },
             { id: 14,
                 cover: 'falsafePic/هیچ.jpg',
                 title: 'هیچ',
                 author: 'مجيد پروانه پور',
                 publisher: 'نشر بارسا',
                 price: '8000 تومان'
             },
             { id: 15,
                 cover: 'falsafePic/پدیدارشناسی.jpg',
                 title: 'پدیدارشناسی',
                 author: 'سجاد باغبان‌ماهر',
                 publisher: 'نشر چشمه',
                 price: '11000 تومان'
             },
             { id: 16,
                 cover: 'falsafePic/پيمان پنجم.jpg',
                 title: 'پيمان پنجم',
                 author: ' جیم ران',
                 publisher: 'نشر تمام ناتمام',
                 price: '15000 تومان'
             },
             { id: 17,
                 cover: 'falsafePic/کتاب چرا عاشق می‌شویم؟.jpg',
                 title: 'چرا عاشق می‌شویم؟',
                 author: 'مجيد پروانه پور',
                 publisher: 'نشر چشمه',
                 price: '45000 تومان'
             },
             { id: 18,
                 cover: 'falsafePic/گفتگوهای فلسفی.jpg',
                 title: 'گفتگوهای فلسفی',
                 author: 'سجاد باغبان‌ماهر',
                 publisher: 'نشر تمام ناتمام',
                 price: '25000 تومان'
             },
             { id: 3,
                 cover: 'falsafePic/تاریخچه‌ی کوتاهی از فلسفه.jpg',
                 title: 'تاریخچه‌ی کوتاه فلسفه',
                 author: 'مجتبی احمدوند',
                 publisher: 'نشر نور',
                 price: '25000 تومان'
             },
             { id: 4,
                 cover: 'falsafePic/آشنایی با فلسفه هنر.jpg',
                 title: 'آشنایی با فلسفه هنر',
                 author: 'دومينيك ژانيكو',
                 publisher: 'نشر چشمه',
                 price: '21000 تومان'
             },
             { id: 5,
                 cover: 'falsafePic/تسلی‌بخشی‌های‌ فلسفه‌.jpg',
                 title: 'تسلی‌بخشی‌های‌ فلسفه‌',
                 author: 'مارتین کوهن',
                 publisher: 'نشر طلا',
                 price: '25300 تومان'
             },
             { id: 6,
                 cover: 'falsafePic/عرفان و منطق.jpg',
                 title: 'عرفان و منطق',
                 author: 'شارون ام. کای',
                 publisher: 'نشر یاد',
                 price: '225000 تومان'
             },
             { id: 7,
                 cover: 'falsafePic/غروب بت‌ها یا فلسفیدن با پتک.jpg',
                 title: 'غروب بت‌ها ',
                 author: 'مجتبی احمدوند',
                 publisher: 'نشر چشمه',
                 price: '25020 تومان'
             },
             { id: 8,
                 cover: 'falsafePic/فلسفه برای نوآموزان.jpg',
                 title: 'فلسفه برای نوآموزان',
                 author: 'مارتین کوهن',
                 publisher: 'نشر فردا',
                 price: '25000 تومان'
             },
             { id: 9,
                 cover: 'falsafePic/فلسفه در شش ساعت و پانزده دقيقه.jpg',
                 title: 'فلسفه در ... ',
                 author: 'شارون ام. کای',
                 publisher: 'نشر چشمه',
                 price: '80000 تومان'
             },
             { id: 10,
                 cover: 'falsafePic/فلسفه سیاسی.jpg',
                 title: 'فلسفه سیاسی',
                 author: ' جیم ران',
                 publisher: 'نشر ایلیا',
                 price: '700 تومان'
             },
             { id: 11,
                 cover: 'falsafePic/فلسفه‌ای برای زندگی.jpg',
                 title: 'فلسفه‌ای برای زندگی',
                 author: ' پُل تامسون',
                 publisher: 'نشر آواز',
                 price: '25800 تومان'
             },
             { id: 4,
                 cover: 'falsafePic/گفتگوهای فلسفی.jpg',
                 title: 'گفتگوهای فلسفی',
                 author: 'دومينيك ژانيكو',
                 publisher: 'نشر چشمه',
                 price: '21000 تومان'
             },
             { id: 7,
                 cover: 'falsafePic/غروب بت‌ها یا فلسفیدن با پتک.jpg',
                 title: 'غروب بت‌ها ',
                 author: 'مجتبی احمدوند',
                 publisher: 'نشر چشمه',
                 price: '25020 تومان'
             }
    ];
    render(){
        return(
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

                <Paging/>
            </div>
        )
    }
}

export default Falsafe