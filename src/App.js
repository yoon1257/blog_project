import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let post = "우리동네 맛집"
  let [subject, setSubject] = useState(["남자코트추천","돈까스 맛집", "경양식 맛집"]) //a는 변수라고 생각하고 b는 state 변경을 도와주는 함수 
  let [like, setLike] = useState(0);
  let [like2, setLike2] = useState(0);
  let [like3, setLike3] = useState(0);//0 = 저장해놓을 값

 

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

      <div className='list'>
        <h4>{subject[0]}<span onClick={() => {setLike(like+1)}}>👍</span>{like}</h4>

        <button onClick={()=>{
          let copy = [...subject];
          copy[0] = "여자코트추천";
          setSubject(copy);
        }}>button</button>

        <p>2월 16일 발행</p>
      </div>
      <div className='list'>
        <h4>{subject[1]}<span onClick={()=>{setLike2(like2+1)}}>👍</span>{like2}</h4>
        <p>2월 16일 발행</p>
      </div>
      <div className='list'>
        <h4>{subject[2]}<span onClick={()=>{setLike3(like3+1)}}>👍</span>{like3}</h4>
        <p>2월 16일 발행</p>
      </div>

    <Modal/>

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
