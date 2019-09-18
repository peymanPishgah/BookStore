import React from 'react';
import { Pagination } from 'antd';

class Paging extends React.Component {
    state = {
        current: 1,
    };

    onChange = page => {
        console.log(page);
        this.setState({
            current: page,
        });
    };

    render() {

        return(
            <div className='pagination-style'>
                <Pagination current={this.state.current} onChange={this.onChange} total={50} />
            </div>
        )

    }
}

export default Paging;