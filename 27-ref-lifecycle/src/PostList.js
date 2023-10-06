import React, { useState, useEffect } from 'react';
import PostItem from './PostItem'; // PostItem 컴포넌트를 import

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 가짜 데이터
    const fakePosts = [
      {
        id: 1,
        title: '포스트 1',
        body: '내용 1',
      },
      {
        id: 2,
        title: '포스트 2',
        body: '내용 2',
      },
      {
        id: 3,
        title: '포스트 3',
        body: '내용 3',
      },
    ];

    // 2초 후에 가짜 데이터를 state에 저장
    setTimeout(() => {
      setPosts(fakePosts);
      setLoading(false); // 로딩 상태 종료
    }, 2000);
  }, []); // 빈 배열은 컴포넌트가 처음 마운트될 때 한 번만 실행

  return (
    <div className="post-list">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              {/* PostItem 컴포넌트를 사용하여 각 포스트 렌더링 */}
              <PostItem post={post} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
