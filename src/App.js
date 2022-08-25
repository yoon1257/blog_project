import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let post = "우리동네 맛집"
  let [subject, setSubject] = useState(["남자코트추천","돈까스 맛집", "경양식 맛집"]) //a는 변수라고 생각하고 b는 state 변경을 도와주는 함수 
  let [like, setLike] = useState([0,0,0]);//0 = 저장해놓을 값
  let [modal,setModal] = useState(false)

 

  return (
    <div className="App">
      <div className= "nav-bar">
        <h4>블로그임</h4>
      </div>

      <button onClick={()=>{
        let paste = [...subject];
        paste = paste.sort()
        setSubject(paste)
      }}>정렬</button>

      {/* <div className='list'>
        <h4>{subject[0]}<span onClick={() => {setLike(like+1)}}>👍</span>{like}</h4>

        <button onClick={()=>{
          let copy = [...subject];
          copy[0] = "여자코트추천";
          setSubject(copy);
        }}>button</button>
        <p>2월 16일 발행</p>
      </div>

      <div className='list'>
        <h4>{subject[1]}</h4>
        <p>2월 16일 발행</p>
      </div>
      

      <div className='list'>
        <h4 onClick={()=>{setModal(!modal)}}>{subject[2]}</h4>
        <p>2월 16일 발행</p>
      </div> */}

      {
        subject.map(function(a,i){
          return(<div className='list' key={i}>
          <h4>{subject[i]}<span onClick={() => {
            let copy  =[...like]
            copy[i] = copy[i]+1 
            setLike(copy)
          }}>👍</span>{like[i]}</h4>
          <p>2월 16일 발행</p>
        </div> //a는 데이터의 값, i는 반복문을 돌때마다 증가하는 정수
              //  그래서 a만 넣어줘도 되고 subjue변수에 i를 붙여 하나하나 증가하게 사용햐도 된다

            
          )
        })
      }
   
    </div>
  );
}


function Modal(){
  return(
    <div className = "modal">
    <h4>제목</h4>
    <p>날짜</p>
    <p>상세내용</p>
  </div>
  )
}

export default App;
