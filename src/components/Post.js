//수정과 같이 CRUD 기능이 필요없기 때문에 상태값이 필요가 없다. 
//그래서 클래스형말고 함수형으로 써도됨
import '../css/Post.css'

function Post(props){
    return(
        <div id='post'>
            <span>{props.no}</span>
            <span>{props.title}</span>
            <span>{props.writer}</span>
            <span>{props.writeDate}</span>
        </div>
    )
}

export default Post;