import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import { Menu, Icon, Button, Input } from 'antd';
import HomePage from './routes/homePage';
import Falsafe from './routes/Falsafe';
import Footer from './components/footer';
import Roman from './routes/Roman';
import Daneshgahi from './routes/Daneshgahi/Daneshgahi';
import BookPage from './routes/BookPage';
import Podcast from './routes/Podcast';

const { Search } = Input;
const { SubMenu } = Menu;

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            collapsed: true,
        };
    }
    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    render(){
        return (
            <div className="App">
                <Router>
                {/*------------------top header*/}
                <div className='top-header'>
                    <Link className='top-header-item' to='/'>صفحه اول</Link>
                    <Link className='top-header-item' to='/' style={{color:'yellow'}}>دانلود اپلیکیشن</Link>
                    <Link className='top-header-item' to='/'>هدیه</Link>
                    <Link className='top-header-item' to='/'>راهنمایی</Link>
                    <Link className='top-header-item' to='/'>کیف پول</Link>
                    <Link className='top-header-item' to='/'>درباره ما</Link>
                    <Link className='top-header-item' to='/'>تماس با ما</Link>
                    <Link style={{flex:'3'}} className='top-header-item' to='/' target="_top">اگر کتاب مورد نظر را پیدا نکردید اینجا سفارش دهید</Link>
                </div>
                {/*------------------ header*/}
                <header className="header-container">
     {/*--------------------------------colaps menu start------*/}
                    <div className='menu-icon'>
                        <div style={{ width: 140 }}>
                            <Button type="white" onClick={this.toggleCollapsed}
                                    style={{ marginBottom: 14, textDecoration:"none" }}>
                                <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
                            </Button>
                            <Menu style={{backgroundColor:" rgba(0, 150, 136, 0.81)", marginRight:"27px"}}
                                  defaultSelectedKeys={['0']}
                                  defaultOpenKeys={['']}
                                  mode="inline"
                                  theme="dark"
                                  inlineCollapsed={this.state.collapsed}>

                                <SubMenu key="sub1" title={<span style={{marginRight:'-15px'}}>عمومی</span>}>
                                    <ul className="menu-list">
                                        <Link to='/falsafe'><li className="list-item"> فلسفه </li></Link>
                                        <Link to='/'><li className="list-item"> اقتصاد </li></Link>
                                        <Link to='/roman'><li className="list-item"> رمان </li></Link>
                                        <Link to='/'><li className="list-item"> تاریخ </li></Link>
                                        <Link to='/'><li className="list-item"> داستان </li></Link>
                                        <Link to='/'><li className="list-item"> روانشناسی </li></Link>
                                        <Link to='/'><li className="list-item"> دین و عرفان </li></Link>
                                    </ul>
                                </SubMenu>
                                <SubMenu key="sub2" title={<span style={{marginRight:'-15px'}}>پرفروش</span>}>
                                    <ul className="menu-list">
                                        <Link to='/'><li className="list-item"> علمی </li></Link>
                                        <Link to='/roman'><li className="list-item"> آموزشی </li></Link>
                                        <Link to='/'><li className="list-item">داستان و رمان</li></Link>
                                        <Link to='/'><li className="list-item">ادبیات </li></Link>
                                    </ul>
                                </SubMenu>
                                <SubMenu key="sub3" title={<span style={{marginRight:'-15px'}}>درسی</span>}>
                                    <ul className="menu-list">
                                        <Link to='/daneshgahi'><li className="list-item"> دانشگاه </li></Link>
                                        <Link to='/'><li className="list-item"> دبیرستان </li></Link>
                                        <Link to='/'><li className="list-item"> پایان نامه </li></Link>
                                        <Link to='/'><li className="list-item"> کمک درسی </li></Link>
                                        <Link to='/'><li className="list-item"> کنکور </li></Link>
                                    </ul>
                                </SubMenu>
                                <SubMenu key="sub4" title={<span style={{marginRight:'-15px'}}>انگلیسی</span>}>
                                    <ul className="menu-list">
                                        <Link to='/'><li className="list-item"> درسی </li></Link>
                                        <Link to='/'><li className="list-item">داستان </li></Link>
                                        <Link to='/'><li className="list-item">عمومی</li></Link>
                                    </ul>
                                </SubMenu>
                                <SubMenu key="sub5" title={<span style={{marginRight:'-15px'}}>کودکان</span>}>
                                    <ul className="menu-list">
                                        <Link to='/'><li className="list-item"> درسی </li></Link>
                                        <Link to='/'><li className="list-item"> آموزشی </li></Link>
                                        <Link to='/'><li className="list-item"> رنگ آمیزی</li></Link>
                                        <Link to='/'><li className="list-item"> کمک بهداشتی </li></Link>
                                    </ul>
                                </SubMenu>
                                <SubMenu key="sub6" title={<span style={{marginRight:'-15px'}}>نشریات</span>}>
                                    <ul className="menu-list">
                                        <Link to='/'><li className="list-item"> مجله </li></Link>
                                        <Link to='/'><li className="list-item">روزنامه </li></Link>
                                        <Link to='/'><li className="list-item">تخصصی</li></Link>
                                        <Link to='/'><li className="list-item">نقد</li></Link>
                                    </ul>
                                </SubMenu>
                            </Menu>
                        </div>
                    </div>
                    {/*----------colaps menu END------------*/}
                    <div className='header-icons-holder'>
                        <Link className='nav-item' to='/'><Icon className='nav-item-icon' type="home" /></Link>
                        <Link className='nav-item' to='/'><Icon className='nav-item-icon' type="shopping-cart" /></Link>
                        <Link className='nav-item' to='/'><Icon className='nav-item-icon' type="user-add" /></Link>
                        <Link className='nav-item' to='/'><Icon className='nav-item-icon' type="share-alt" /></Link>

                    </div>
                    {/*----------------search box            */}
                    <div className="search-box">
                        <div>
                            <Button style={{backgroundColor:'black',position:'absolute',
                                width:'110px',zIndex:'100', border:'none', color:'white'}} icon="search">
                                Search
                            </Button>
                            <Search
                                placeholder="                      نام نویسنده یا کتاب را جست و جو کنید "
                                onSearch={value => console.log(value)}
                                style={{ width: '100%', height:'30px'}}
                            />
                        </div>
                    </div>
                    {/*----------------LOGO---------            */}
                    <Link className='logo-box' to='/'>
                    </Link>
                </header>
                {/*-----------------header END------------            */}

                {/*------------------main part------------*/}
                        <main className="main-container">
                            <Switch>
                                <Route path='/' exact component={HomePage}/>
                                <Route path='/falsafe' component={Falsafe}/>
                                <Route path='/roman' component={Roman}/>
                                <Route path='/daneshgahi' component={Daneshgahi}/>
                                <Route path='/book-page' component={BookPage}/>
                                <Route path='/roman' componet={Roman}/>
                            </Switch>
                        </main>

                        <footer>
                            <Footer/>
                        </footer>
                    </Router>

            </div>
        );
    }
}

export default App;




