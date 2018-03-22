import styled from 'styled-components'

const CoverBase = styled.div`
  position: absolute;
  width: 100%;
  height: 100%
  top: 0%;
  z-index: 1;

  @keyframes slide-down {
    100% {
      height: 0;
    }
  }

  &::after {
    height: 0;
  }
`

const Cover1 = styled(CoverBase)`
  animation: slide-down 2.0s ease 1.5s forwards;
  background-color: rgba(0, 0, 0, 1);
  z-index: 10;
`
const Cover2 = styled(CoverBase)`
  animation: slide-down 2.0s ease 2.0s forwards;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 5;
`

const Cover3 = styled(CoverBase)`
  animation: slide-down 2.0s ease 2.5s forwards;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 2;
`

const Section = styled.section`
`

const Header = styled.header`
  line-height: 100px;
  height: 100px;
`

const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -1000;
  background-image: url(/static/udon.jpg);
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  animation: fade-out 2.0s ease 3.5s forwards;

  @keyframes fade-out {
    100% {
      filter: blur(10px) brightness(30%);
    }
  }

  &::after {
    filter: blur(10px) brightness(30%);
  }
`

const Body = styled.div`
  height: 100%;
`

const PageName = styled.p`
  color: white;
  margin-left: 20px;
  position: absolute;
  top: -20px;
  font-size: 1.2rem;
`

const LinkItem = styled.span`
  width: 14%;
  height: 100%;
  text-align: center;
  display: inline-block;
  transition: background-color 0.5s;
  color: white;
  z-index: 20;

  &:hover {
    background-color: black;
    transition: background-color 1s;
  }
`

const LinkGroup = styled.div`
  display: inline-block;
  background: rgba(0, 0, 0, 0.1);
  padding-right: 50%;
  width: 100%;
  text-align: right;
`

const P = styled.p`
  position: fixed;
  color: white;
  top: 45%;
  left: 45%;
  z-index: -10;
  text-align: center;
  vertical-align: center;
`

export default () => (
  <Body>
    <Background />
    <Cover1>
      <P>
        うどんが，好き
      </P>
    </Cover1>
    <Cover2 />
    <Cover3 />
    <Section>
      <Header>
        <PageName>maxmellon.tokyo</PageName>
        <LinkGroup>
          <LinkItem>About</LinkItem>
          <LinkItem>Environment</LinkItem>
          <LinkItem>Articles</LinkItem>
          <LinkItem>Activities</LinkItem>
          <LinkItem>Projects</LinkItem>
        </LinkGroup>
      </Header>
    </Section>
  </Body>
)
