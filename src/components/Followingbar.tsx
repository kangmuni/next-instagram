'use client';

import useSWR from 'swr';

export default function Followingbar() {
  // 클라이언트에서 백엔드에게 사용자의 정보를 보내줘야하나? 그럴필요는 없음!
  // 로그인하면 브라우저 자체적으로 서버에게부터 응답헤더에 로그인 성공 토큰(쿠키)을 받아옴
  // 로그인이 한번 성립되면 클라이언트에서 백엔드로 자동으로 헤더에 토큰이 붙어져서 보내짐
  // 바디안에 유저이름을 별도로 명시하지 않아도 헤더 토큰 정보를 통해서 백엔드는 유저정보들을 알수 있음

  // 1. 클라이언트 컴포넌트에서 백엔드에게 api/me 사용자의 정보를 얻어옴
  // 2. 백엔드에서는 현재 로그인된 사용자의 세션 정보를 이용해서
  // 3. 백엔드에서 사용자의 상세 정보를 Sanity에서 가지고옴 (팔로잉)
  // 4. 여기에서(클라이언트 컴포넌트에서) followings의 정보를 UI에 보여줌
  // (image, username)

  const { data, isLoading, error } = useSWR('/api/me');

  console.log(data);

  return (
    <section>
      <p>Followingbar</p>
    </section>
  );
}
