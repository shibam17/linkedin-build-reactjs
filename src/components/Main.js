import styled from "styled-components";
import React from "react";

const Main = () => {
  return (
    <Container>
      <ShareBox>
        share
        <div>
          <img src='/images/user.svg' alt='' />
          <button>Start a Post</button>
        </div>
        <div>
          <button>
            <img src='/images/photo-icon.svg' alt='' />
            <span>Photos</span>
          </button>
          <button>
            <img src='/images/video-icon.svg' alt='' />
            <span>Videos</span>
          </button>
          <button>
            <img src='/images/event-icon.svg' alt='' />
            <span>Events</span>
          </button>
          <button>
            <img src='/images/article-icon.svg' alt='' />
            <span>Articles</span>
          </button>
        </div>
      </ShareBox>
      <div>
        <Article>
          <SharedActor>
            <a>
              <img src='/images/user.svg' alt='' />
              <div>
                <span>Title</span>
                <span>Info</span>
                <span>Date</span>
              </div>
            </a>
            <button>
              <img src="/images/elipse.svg" alt=""  width= "25px"/>
            </button>
          </SharedActor>
        </Article>
      </div>
    </Container>
  );
};

// Styling`

const Container = styled.div`
  grid-area: main;
`;

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0/ 15%), 0 0 0 rgb(0 0 0/20%);
`;

const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: white;
  div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 50px;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      font-weight: 600;

      & > img {
        width: 25px;
        margin: 0 4px 0 -2px;
      }

      & > span {
        color: #70b5f9;
      }
    }
    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 15px 16px;
      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }
      button {
        margin: 4px 0;
        flex-grow: 1;
        border-radius: 35px;
        padding-left: 16px;
        border: 1px solid rgba(0, 0, 0, 0.16);
        text-align: left;
      }
    }
    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 4px;
    }
  }
`;

const Article = styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`;

const SharedActor = styled.div`
padding-right:40px;
flex-wrap:nowrap;
padding:14px 16px 0;
margin-bottom:8px;
align-items:center;
display:flex;
a{
  margin-right:12px;
  display:flex;
  flex-grow:1;
  overflow:hidden;
  text-decoration:none;

  img{
    width:48px;
    height:48px;
  }
  &> div{
    display:flex;
    flex-direction:column;
    flex-grow:1;
    flex-basis:0;
    margin-left:8px;
    overflow: hidden;
    span{
      text-align:left;
      &:first-child{
        font-size:14px;
        font-weight:700;
        color:rgba(0, 0, 0, 1);
      }
      & :nth-child(n+1){
        font-size:12px;
        color:rgba(0, 0, 0, 0.6);
      }
    }
  }
}

button{
  position: absolute;
  right:12px;
  top:0;
  background:transparent;
  border:none;
  outline:none;
  
}
`

export default Main;
