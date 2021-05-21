import styled from "styled-components";

import React from "react";

const PostModal = () => {
  return <Container>
      <Content>
          <Header>
              <h2>Create a post</h2>
              <button><img src="/images/close-icon.svg" width="22px" alt="" /></button>
          </Header>
      </Content>
  </Container>;
};

const Container = styled.div`
  position: fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  z-index:9999;
  color:black;
  background-color: rgba(0,0,0,0.8);
`;

const Content = styled.div`
width:100%;
max-width:552px;
background-color: white;
max-height:90%;
overflow: initial;
border-radius: 5px;
position: relative;
display: flex;
flex-direction: column;
top: 32px;
margin: 0 auto;
`

const Header = styled.div`

`


export default PostModal;
