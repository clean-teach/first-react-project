import React from 'react';
import qs from 'qs';

const profileData = {
    velopert : {
        name: '김민준',
        description: `Frontend Enfineer @ Laftel INC. 재밌는 것만 골라서 하는 개발자! 
         (파라미터를 사용하여, 한페이지 내부의 일부 내용을 업로드 하는 방식)`
    },
    gildong: {
        name: '홍길동',
        description: '심심하면 불려지는 전래동화의 주인공 (파라미터를 사용하여, 한페이지 내부의 일부 내용을 업로드 하는 방식)'
    }
};

function Profile({match, location}) {
    const {username} = match.params;
    const profile = profileData[username];

    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true
    });
    const detail = query.detail === 'true'; // 쿼리의 파싱결과값은 문자열
    
    console.log(match);
    console.log(location);

    if(!profile) {
        return <div>존재하지 않는 유저입니다.</div>
    }
    return (
        <div>
            <h3>{username} ({profile.name})</h3>
            <p>{profile.description}</p>
            {detail && <p>Query 를 받아와서 조건부로 보여주는 추가 정보</p>}
        </div>
    );
}

export default Profile;