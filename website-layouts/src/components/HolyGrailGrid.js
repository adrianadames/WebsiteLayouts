import styled from 'styled-components';

let OuterContainer = styled.div`
    border:1px dashed black;

    min-height:100vh;
    height:100%;

    display: grid;
    grid-template-columns: 20% 1fr 20%;
    grid-template-rows: auto 1fr auto;
`;

let Header = styled.header`
    border:5px solid orange;    
    background: rgb(32,32,32);
    grid-row:1/2;
    grid-column:1/4;
`;

let LeftSidebar = styled.aside`
    border:5px solid blue;
    background: black;
    grid-column-end:2; 
`;

let Article = styled.article`
    border:5px solid red;
    background: rgb(52, 53, 54);
    grid-row:2/3;
    grid-column:2/3;
`;

let RightSidebar = styled.aside`
    border:5px solid green;
    background: black;
    grid-row:2/3;
    grid-column:3/4;
`;

let Footer = styled.footer`
    border:5px solid purple;
    background: rgb(32,32,32);
    grid-row: 3/4;
    grid-column:1/4;
`;

function HolyGrailGrid() {
    return (
        <OuterContainer>
            <Header>
                header
            </Header>
            <LeftSidebar>
                left sidebar
            </LeftSidebar>
            <Article>
                article
            </Article>
            <RightSidebar>
                right sidebar
            </RightSidebar>
            <Footer>
                footer
            </Footer>
        </OuterContainer>
    )
};

export default HolyGrailGrid;