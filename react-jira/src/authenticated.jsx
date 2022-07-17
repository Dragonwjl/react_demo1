import React from "react";
import styled from '@emotion/styled'
import { ProjectListScreen } from "../src/screens/project-list/index"
import ProjectScreen from '../src/screens/project/index'
import { useDocumentTitle } from './utils/index'
import { Route, Navigate, Routes } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'
export default function Authenticated({ isLogin, setIsLogin }) {
    useDocumentTitle("项目列表")
    return (

        <Container>
            <Header>
                <HeaderLeft>
                    <button type="link" onClick={() => window.location.href = window.location.origin}>logo</button>
                    <h2>项目</h2>
                    <h2>用户</h2>
                </HeaderLeft>
                <HeaderRight>
                    <button onClick={() => setIsLogin(!isLogin)} >登出</button>
                </HeaderRight></Header>

            <Main>
                <Router>
                    <Routes>
                        <Route path={"/projects"} element={<ProjectListScreen />} />
                        <Route path={"/projects/:projectId/*"} element={<ProjectScreen />} />
                        <Route path="*" element={<Navigate to="/projects" replace />} />
                    </Routes>
                </Router>
            </Main>
        </Container>
    )
}

const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr; 
   height: 100vh;
`

const Header = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    padding:3.2rem;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
`
const HeaderLeft = styled.div`
    display:flex;
    align-items:center;
    > * {
        margin-right:2rem
    }
`
const HeaderRight = styled.div`
    
`

const Main = styled.div`
`
