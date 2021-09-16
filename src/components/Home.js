import React, { useEffect } from 'react';

function Home({history}) {
  const goBack = () => {
    history.goBack();
  };
  const goHome = () => {
    history.push('/');
  };
  useEffect(() => {
    console.log(history);
    const unblock = history.block('정말 떠나실건가요?');
    return () => {
      unblock();
    }
  }, [history]);
  
  return (
      <div>
        <div>
          <button onClick={goHome}>홈으로</button>
          <button onClick={goBack}>뒤로가기</button>
        </div>
        <p>안녕하세요! 첫 화면 입니다!</p>
      </div>
  );
}

export default Home;