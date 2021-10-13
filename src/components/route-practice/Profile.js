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
    },
    subRoute1 : {
        name: '서브라우트 1',
        description: `서브 라우트는, 라우트 내부의 라우트를 만드는것을 의미합니다. 이 작업은 그렇게 복잡하지 않습니다. 그냥 컴포넌트를 만들어서 그 안에 또 Route 컴포넌트를 렌더링하시면 됩니다.`
    },
    subRoute2: {
        name: '서브라우트 2',
        description: 'Route 컴포넌트에서는 component 대신에 render 가 사용되었는데요, 여기서는 컴포넌트가 아니라, JSX 자체를 렌더링 할 수 있습니다. JSX 를 렌더링하는 것이기에, 상위 영역에서 props 나 기타 값들을 필요하면 전달 해 줄 수있습니다.'
    },
    subRoute3: {
        name: '서브라우트 3',
        description: '만약에 여러분이 만들게되는 서비스에서 특정 라우트 내에 탭 같은것을 만들게 된다면, 단순히 state 로 관리하는 것 보다 서브 라우트로 관리를 하는 것을 권장드립니다. 그 이유는, setState 같은것을 할 필요도 없고, 링크를 통하여 다른 곳에서 쉽게 진입 시킬 수도 있고, 나중에 검색엔진 크롤링 까지 고려한다면, 검색엔진 봇이 더욱 다양한 데이터를 수집해 갈 수 있기 때문입니다.'
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
        return (
            <div>존재하지 않는 유저입니다.</div>
        )
    }
    return (
        <div>
            <div>
                <h3>{username} ({profile.name})</h3>
                <p>{profile.description}</p>
                {detail && <p>Query 를 받아와서 조건부로 보여주는 추가 정보</p>}
            </div>
        </div>
    );
}

export default Profile;