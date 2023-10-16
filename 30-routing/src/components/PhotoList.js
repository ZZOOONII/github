import React, { useState, useEffect } from 'react';

export default function ProductPhoto() {
  const [productInfos, setProductInfos] = useState([]);

  useEffect(() => {
    // GET 요청을 보내서 데이터를 가져오기
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((data) => {
        // 데이터를 받아와서 상태에 저장
        setProductInfos(data);
      })
      .catch((error) => {
        console.error('데이터를 불러오는 동안 오류 발생:', error);
      });
  }, []);

  return (
    <div>
      {productInfos.map((photo) => (
        <div key={photo.id}>
          <p>{photo.title}</p>
          <img src={photo.thumbnailUrl} alt={photo.title} />
        </div>
      ))}
    </div>
  );
}
