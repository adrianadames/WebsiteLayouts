import styled from 'styled-components';

let OuterContainer = styled.div`
    border:1px dashed black;
    height:100%;
    min-height:100vh;
    display: flex;
    flex-direction: column;
`;

let Header = styled.header`
    background: rgb(32,32,32);
    border:5px solid orange;
`;

let ContentContainer = styled.div`
    flex-grow:1;
    display:flex;
`;

let Article = styled.article`
    border:5px solid red;
    background: rgb(52, 53, 54);
    flex-grow:1;
`;

let LeftSidebar = styled.aside`
    border:5px solid blue;
    background: black;
    width:20%; 
`;

let RightSidebar = styled.aside`
    border:5px solid green;
    background: black;
    width:20%;
`;

let Footer = styled.footer`
    background: rgb(32,32,32);
    border:5px solid purple;
`;

function HolyGrailFlex() {
    return (
        <OuterContainer>
            <Header>
                header
            </Header>
            <ContentContainer>
                <LeftSidebar>
                    left sidebar
                </LeftSidebar>
                <Article>
                    article
                </Article>
                <RightSidebar>
                    right sidebar
                </RightSidebar>
            </ContentContainer>
            
            <Footer>
                footer
            </Footer>
        </OuterContainer>
    )
}

export default HolyGrailFlex