import React from "react";
import { ReactComponent  as SoftwareLogo}   from './assets/software-logo.svg'
import styled from '@emotion/styled'
import { ProjectListScreen } from "../src/screens/project-list/index"
import { Dropdown } from "antd";

export default function Authenticated () {
    return (
        <Container>
            <Header>
                <HeaderLeft>
                
                    {/* <SoftwareLogo width={"18rem"} color={"rgb(38, 132, 255)"} /> */}
                    
                    <h2>logo</h2>
                    <h2>项目</h2>
                    <h2>用户</h2>
                </HeaderLeft>
                <HeaderRight>
                    <button >登出</button>
                    {/* <Dropdown overlay={}></Dropdown> */}
                </HeaderRight></Header>

            <Main>
                <ProjectListScreen />
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
