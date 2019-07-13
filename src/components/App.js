import React, { Component } from 'react'
import styled from 'styled-components'
import Header from './Header/Header.component'
import background from '../images/background.svg'
import Container from './Global/Container.style';
import Main from './Global/Main.style';
import Sidebar from './Sidebar/Sidebar.component'
import Jobs from './Jobs'

const Root = styled.div`
  transition: .25s ease;
  min-height: 100vh;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center top;
`

const MainContainer = styled(Container)`
  display: flex;
  justify-content: space-between;

  >div:first-child {
    width: 990px;
  }
  >div:last-child {
    width: 320px;
  }
`

class App extends Component {
  render() {
    return(
      <Root>
        <Header />
        <MainContainer>
          <Main>
            <Jobs/>
          </Main>
          <Sidebar/>
        </MainContainer>
      </Root>
    )
  }
}

export default App