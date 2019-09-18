import React from 'react';
import BookBoxBig from '../../components/book-box-big';
import Paging from "../../components/Paging";

class Daneshgahi extends React.Component {

    data = [
        { id: 21,
            cover: 'romanPic/دوئل و چند داستان دیگر.jpg',
            title: 'دوئل و چند داستان دیگر',
            author: 'شارون ام. کای',
            publisher: 'نشر یاد',
            price: '225000 تومان'
        },
        { id: 22,
            cover: 'romanPic/عقاید یک دلقک.jpg',
            title: 'عقاید یک دلقک',
            author: 'مجتبی احمدوند',
            publisher: 'نشر چشمه',
            price: '25020 تومان'
        },
        { id: 23,
            cover: 'romanPic/مزرعه حیوانات.jpg',
            title: 'مزرعه حیوانات',
            author: 'مارتین کوهن',
            publisher: 'نشر فردا',
            price: '25000 تومان'
        },
        { id: 24,
            cover: 'romanPic/مردی به نام اوه.jpg',
            title: 'مردی به نام اوه',
            author: 'شارون ام. کای',
            publisher: 'نشر چشمه',
            price: '80000 تومان'
        },
        { id: 25,
            cover: 'romanPic/من پیش از تو.jpg',
            title: 'من پیش از تو',
            author: ' جیم ران',
            publisher: 'نشر ایلیا',
            price: '700 تومان'
        },
        { id: 26,
            cover: 'romanPic/ملت عشق.jpg',
            title: 'ملت عشق',
            author: ' پُل تامسون',
            publisher: 'نشر آواز',
            price: '25800 تومان'
        },
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
        { id: 4,
            cover: 'romanPic/jozazkol.jpg',
            title: 'جز از کل',
            author: 'پیمان خاکسار',
            publisher: 'نشر چشمه',
            price: '281000 تومان'
        },
        { id: 11,
            cover: 'romanPic/مردی به نام اوه.jpg',
            title: 'مردی به نام اوه',
            author: 'شارون ام. کای',
            publisher: 'نشر چشمه',
            price: '80000 تومان'
        },
        { id: 12,
            cover: 'romanPic/من پیش از تو.jpg',
            title: 'من پیش از تو',
            author: ' جیم ران',
            publisher: 'نشر ایلیا',
            price: '700 تومان'
        },
        { id: 13,
            cover: 'romanPic/ملت عشق.jpg',
            title: 'ملت عشق',
            author: ' پُل تاممممممسون',
            publisher: 'نشر آواز',
            price: '25800 تومان'
        },
        { id: 14,
            cover: 'romanPic/ناتور دشت.jpg',
            title: 'ناتوررر دشت',
            author: 'جی.دی.سلینجر',
            publisher: 'نشر چشمه',
            price: '850000 تومان'
        },
        { id: 15,
            cover: 'romanPic/هنر د‌رمان.jpg',
            title: 'هنر د‌رمان',
            author: ' جیم ران',
            publisher: 'نشر مهر',
            price: '16000 تومان'
        },
        { id: 16,
            cover: 'romanPic/یک بعلاوه یک.jpg',
            title: 'یک بعلاوه یک',
            author: 'مجيد پروانه پور',
            publisher: 'نشر بارسا',
            price: '8000 تومان'
        },
        { id: 17,
            cover: 'romanPic/کتاب بابا لنگ‌دراز.jpg',
            title: 'کتاب بابا لنگ‌دراز',
            author: 'سجاد باغبان‌ماهر',
            publisher: 'نشر چشمه',
            price: '11000 تومان'
        },
        { id: 18,
            cover: 'romanPic/یک داستان ساده.jpg',
            title: 'یک داستان ساده',
            author: ' جیم ران',
            publisher: 'نشر تمام ناتمام',
            price: '15000 تومان'
        },
        { id: 19,
            cover: 'romanPic/ناتور دشت.jpg',
            title: 'ناتور دشت',
            author: 'شارون ام. کای',
            publisher: 'نشر چشمه',
            price: '1999 تومان'
        },
        { id: 20,
            cover: 'romanPic/۱۹۸۴.jpg',
            title: '۱۹۸۴',
            author: 'جورج اورول',
            publisher: 'نشر چشمه',
            price: '45000 تومان'
        },
        { id: 27,
            cover: 'romanPic/ناتور دشت.jpg',
            title: 'ناتور دشت',
            author: 'جی.دی.سلینجر',
            publisher: 'نشر چشمه',
            price: '950000 تومان'
        },
        { id: 38,
            cover: 'romanPic/هنر د‌رمان.jpg',
            title: 'هنر د‌رمان',
            author: ' جیم ران',
            publisher: 'نشر مهر',
            price: '16000 تومان'
        },
        { id: 29,
            cover: 'romanPic/یک بعلاوه یک.jpg',
            title: 'یک بعلاوه یک',
            author: 'مجيد پروانه پور',
            publisher: 'نشر بارسا',
            price: '8000 تومان'
        }
    ];

    render() {
        return(
            <div className='flex-container'>
                {
                    this.data.map(
                        (item)=>(
                            <BookBoxBig title={item.title}
                                        cover={item.cover} author={item.author}
                                        publisher={item.publisher}
                                        price={item.price}
                            />
                        )
                    )
                }

                <Paging/>

            </div>
        )
    }
}

export default Daneshgahi;