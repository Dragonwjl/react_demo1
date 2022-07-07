import React, { Component } from "react";
import {connect} from "react-redux"
import { TopicItem, TopicWrapper } from "../style";

 class Topic extends Component {
    render() {
        console.log("topicList",this.props.list);
        const {list} = this.props
        return (
            <TopicWrapper>
               {
					list.map((item) => (
						<TopicItem key={item.get('id')}>
							<img
								className='topic-pic'
								src={item.get('imgUrl')}
								alt=''
							/>
							{item.get('title')}
						</TopicItem>
					))
				}
            </TopicWrapper>
        )
    }
}

export default connect(
    state => ({
        list: state.home.get('topicList'),
    }),
    {
        
    }
)(Topic)


