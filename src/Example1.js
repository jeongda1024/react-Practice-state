import React from 'react';
import { useState } from 'react';
import './style.css';

function Time() {
  const [time, setTime] = useState(0); // time의 초기값을 0 으로 설정한다는 뜻.
  const [cnt, setCnt] = useState(0);
  const onClick = () => {
    //클릭할 때 마다 횟수 증가
    setTime(time + 1); // 변화되는 값
    //10회가 되었을 때 횟수 초기화
    if (time === 9) {
      setCnt(cnt + 1);
      setTime(0);
    }
  };
  return (
    <div>
      <button onClick={onClick}>{time}</button>
      <p>10배수값 : {cnt}</p>
    </div>
  );
}

export default Time;
