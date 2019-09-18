import React from 'react';
import './PodcastCard.css';
import { Rate } from 'antd';
import { Icon } from 'antd';
import { Popover } from 'antd';
import {Link} from 'react-router-dom';


class PodcastCard extends React.Component {
    render() {
        return(
            <div className='podcast-box'>
                <Link to='/'>
                    <img className='podcast-img' src={this.props.cover}/>
                    <h3 className='podcast-title'>{this.props.title}</h3>
                </Link>
                <Rate allowHalf defaultValue={3.5} />
                <Popover content={this.props.issue} title={this.props.talker} trigger="click">
                    <Icon type="info-circle" className="info-podcasr"  />
                </Popover>
                <Icon type="shopping-cart" className='shopping-podcast' />

                <div>

                </div>
            </div>
        )
    }
}


export default PodcastCard