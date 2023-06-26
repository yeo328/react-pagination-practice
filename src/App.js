import './App.css';
import { Component } from 'react';
import PostList from './components/PostList';
import Pagination from './components/Pagination';

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      postlist:[ //게시글 목록
        {no:10, title:'title-10', writer:'kim', writeDate:'2023-06-10' },
        {no:9, title:'title-9', writer:'lee', writeDate:'2023-06-08' },
        {no:8, title:'title-8', writer:'park', writeDate:'2023-03-10' },
        {no:7, title:'title-7', writer:'choi', writeDate:'2023-03-01' },
        {no:6, title:'title-6', writer:'jeong', writeDate:'2023-02-10' },
        {no:5, title:'title-5', writer:'yeo', writeDate:'2023-02-02' },
        {no:4, title:'title-4', writer:'song', writeDate:'2023-01-30' },
        {no:3, title:'title-3', writer:'cha', writeDate:'2023-01-25' },
        {no:2, title:'title-2', writer:'kim', writeDate:'2023-01-14' },
        {no:1, title:'title-1', writer:'kim', writeDate:'2023-01-04' }
      ],
      postPerPage : 3 ,//페이지당 개수
      currentPage : 1 
    }
  }

  setCurrentPage=(page)=>{
    //상태값에 현재페이지 1 설정해주기 
    // alert('넘어온 페이지 번호 : '+page)
    this.setState({
      currentPage:page 
    })
    // 이제 페이지번호 상태 바뀌는거 확인되면 화면에 페이지당 게시글 목록 갯수 설정해줘야함. 
  }

  currentPostList=(postlist)=>{
    const {postPerPage, currentPage} = this.state
    const startIndex = (currentPage-1) * postPerPage; 
    const endIndex =  startIndex+postPerPage;
    const slicedList = postlist.slice(startIndex, endIndex);//전체 배열에서 추출해서 return
    //slice메서드로 시작인덱스 부터 끝인덱스까지 추출
    //slice(0,3) //0이상 3미만 0,1,2 == 1페이지 글 3개 
    //slice(3,6) //3이상 6미만 3,4,5 == 2페이지 글 3개
    //slice(6,9) //6이상 9미만 6,7,8 == 3페이지 글 3개
    //slice(9,12) //9이상 12미만 9,10,11 == 4페이지 글 3개 => 11부터 없으니까 게시글은 하나만 찍힘 
    return slicedList;
  }

  prevPage=()=>{
    alert('이전페이지 App')
    this.setState({
      currentPage : this.state.currentPage-1
    })
  }
  nextPage=()=>{
    alert(' 다음페이지 App')
    this.setState({
      currentPage : this.state.currentPage+1
    })
  }
  render(){
    const {postlist, postPerPage, currentPage} = this.state
    //비구조할당
    return(
       <div id='App'>
         <PostList 
        //1단계  postlist={postlist} 그다음 페이지번호에 맞는 페이지당 게시글 목록 
        postlist={this.currentPostList(postlist)}/>
        <Pagination total={postlist.length}
                     postPerPage={postPerPage}
                     currentPage={currentPage}
                     setCurrentPage={this.setCurrentPage}//페이지네이션에 현재페이지 상태 넘김
                     prevPage={this.prevPage}
                     nextPage={this.nextPage}
                     />
       </div>
    )
  }
}

export default App;