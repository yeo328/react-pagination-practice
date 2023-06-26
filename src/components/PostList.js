import '../css/PostList.css';
import { Component } from 'react';
import Post from './Post';

class PostList extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        const result = this.props.postlist.map(
            (data)=>(<Post key={data.no}
                no={data.no} title={data.title}
                writer={data.writer} writeDate={data.writeDate}/>)
        )
        return(
            <div id='post-list'>

                {result}
            </div>
        )
    }
}

export default PostList;