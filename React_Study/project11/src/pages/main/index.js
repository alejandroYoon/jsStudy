import React from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'

const MainPage = () => {
    const [searchParams, setSearchParms] = useSearchParams();
    console.log(searchParams.get("todoId"));
    const navigate = useNavigate();

    const onClicknavigateTodo = () => {
        // window.location.href = '/todo/3'
        // navigate(-1)
        // navigate('/todo/3')
        setSearchParms({
            todoId: 3,
            page: 5,
        })
    }


    return (
    // <></>
    <React.Fragment>
        <div>main</div>
        <div>:)</div>
        <button onClick={onClicknavigateTodo}>TodoPage로 이동</button>
        <a href='/todo/3'>TODOPAGE</a>
        <Link href="/todo/5">TODOPAGE</Link>
    </React.Fragment>
    )
} 

export default MainPage
    //<div>:(</div> // 함수형 컴포넌트는 무조건 div HTML 요소를 리턴해야 한다.


/*
라우팅 : 경로, 주소 설정하는 곳
Hook 함수를 사용하려면 앞글자는 무조건 대문자 써야한다.
custom Hook 은 앞에 꼭 use 로 시작해야 한다.

태그명이 없는 태그를 "Fragment"라고 부른다. 만약 해당 Fragment에 속성을 줄 경우 React.Fragment 라고 하면서 속성을 줄 수 있다. ?
*/