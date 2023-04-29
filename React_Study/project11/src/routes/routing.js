import { createBrowserRouter } from 'react-router-dom' // 중괄호는 구조분해 할당할 때 key 값으로 찾아오게 된다.
import MainPage from '../pages/main'
import TodoPage from '../pages/todo'

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage/>
    },
    {
        path: '/todo/:todoId',
        element: <TodoPage/>
    },
])

export default router

/*
export 로 시작하는 것은 키값으로 데이터를 찾아야하기 때문에 중괄호를 써서 export 해줘야 한다. 키값 => { } -> import 해줘야 한다.
괄호안의 데이터값은 export 했던 변수명과 동일하다.

export default 되어있을 때는 키값으로 데이터를 가져오지 않아도 된다.

export 하는 이유는 모듈화 하기 위해서이다.
 - 모듈화 하는 이유는 : routing.js를 다른데서 쓸려고 export 하고, App.js 에서 가져다 쓰려고 하니 import를 해주는것이다.

 App.js 라이브러리의 설정들만 있다.
 Routing.js 는 이동정보만 있다.

 export default router 이라고하면, 디폴트로 "router" 이것만 지정해서 이 한개만 내보내준다. 
 디폴트를 안해주면, 몽땅 가져와야 하고, 몽땅중(객체)에서 필요한것을 찾는 고차함수등을 써줘야 한다.

 routing.js 에 주소를 명시하고, 그 명시한 주소를 app.js 에서 가져다 쓴다.

 App.js 에 RouterProvider 로 routing.js 에서 명시한 주소를 가져오도록 표기한다. 
 RouterProvider 라이브러리를 쓰려면 위에 import 로 명시해줘야 한다. import router from './routes/routing';


components, pages, routes, styles 이런 컴포넌트들은 ----> App.js 로 모이게 된다. 그리고 ------> index.js 로 갔다가 ---->
public/index.html 로 해서 브라우저에 보여지게 된다.

App.js 는 최상위 모임장소

import { RouterProvider } from 'react-router-dom'; 여기에서 라이브러리에 중괄호 { } 로 쳐져있는것은,
{ RouterProvider } 이것은, react-router-dom 이라는 라이브러리에서 가져올때 default 로 해당 함수 한개만 가져온게 아니라,
react-router-dom 이라는 라이브러리를 export 로 전체의 함수 여러개를 가져왔으므로,
객체로 되었으므로 중괄호 { RouterProvider } 으로 표현하게 되었다.

react-router-dom 이라는 라이브러리에서 안에있는 함수를 가져오려면, export default 해놓은것이 아니고, export 만 해놓은거라
여러값을 가져오므로, 우리는 가져다 쓸때 중괄호를 써서 객체로 가져와서 쓰게 된다.

라우팅 연결하기
- path 에 URL 넣고
- element 에 요소 넣으면 된다.

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello world!</div>
    },
]);


*/

