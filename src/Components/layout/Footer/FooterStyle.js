import styled from 'styled-components';
export const FooterWrapper = styled.div`
    background-color: ${({ theme }) => theme.Dash.TopbarBG};
    color: ${({ theme }) => theme.Dash.FooterColor};
    height: 32px;
    margin-top: 10px;
    text-align: center;
    padding-top: 5px;
    font-size: 12px;
    letter-spacing: 0.65px;
`;