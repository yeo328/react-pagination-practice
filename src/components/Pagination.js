import '../css/Pagination.css';
import { Component } from 'react';

class Pagination extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    pageClick=(page)=>{
        // alert('페이지클릭 ' +page) //이벤트 걸리는지 확인
        //매개변수 page 받아서 몇페이지를 눌렀는지 확인되어야함 -> 문제가있음 클릭을 안해도 그냥 모든 페이지번호가 호출되버림 1,2,3,4 
        //onClick함수에 ()=> 이것만 쓰면 강제호출 막아줌
        //이제 클릭된 번호를 App.js 에 넘겨줘야함 그다음 페이지에 맞는 배열데이터를 postlist한테 넘겨야함 
        this.props.setCurrentPage(page)//App가 넘긴 함수
    }

    prevPage=()=>{
        alert('이전 버튼 클릭 ')
        //현재페이지가 뭔지 알아야함 
        console.log('현재페이지 : ' + this.props.currentPage)
        const {currentPage} = this.props

        if(currentPage-1 <1 ){
            alert('이동불가!')
            return //1일때는 못가게 리턴으로 끝내버리기 
        }
        this.props.setCurrentPage(currentPage-1)
    }
    nextPage=()=>{
        alert('다음 버튼 클릭 ')

        const {currentPage, total, postPerPage} = this.props
        const endPage = Math.ceil(total/postPerPage) // 4 
        if(currentPage+1 > endPage){
            alert('이동불가')
            return
        }
        this.props.setCurrentPage(currentPage+1)
        }


    render(){

        const{total, postPerPage} = this.props
                //10,3
                //3,3,3,1 = 총 4페이지
                console.log('total : ' +total)
                console.log('postPerPage : ' +postPerPage)
        const endPage = Math.ceil(total/postPerPage)
        //자바스크립트에서는 3.3 그럼 올림(Math.ceil())시켜서 4를 만들어줘야함

        let pageNumbers=[] //게시글정보가 바뀌기 때문에 페이지번호 갱신작업을 해줘야함
        for(var i=1; i<=endPage; i++){
            pageNumbers.push(i)
        }
        console.log(pageNumbers) // [1,2,3,4] 페이지 번호 확인

        const result = pageNumbers.map(
            (page)  => (<span key = {page} id='page'
                        className={ this.props.currentPage===page ? 'active' : '' } 
                        onClick={()=>this.pageClick(page)}>{page}</span>) 
        )

        return(
            <div id='pagination'>
                <div id='pagenation-inner'>
                    {/* <button className='side-btn' onClick={this.boforePage}>이전</button> */}
                    <span id='page' onClick={this.prevPage}>&lt;</span>
                    {result}
                    {/* <button className='side-btn' onClick={this.afterPage}>다음</button> */}
                    <span id='page' onClick={this.nextPage}>&gt;</span>

                </div>
            </div>
        )
    }
}

export default Pagination;