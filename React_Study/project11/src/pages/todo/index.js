import React from 'react'
import { useParams } from 'react-router-dom'

const TodoPage = () => {

    const params = useParams();
    console.log(params)

    return (
    <React.Fragment>
        <div>todo</div>
        <div>여기 경로는 /pages/todo/index.js 파일 입니다.....</div>
    </React.Fragment>
    )
} 

export default TodoPage