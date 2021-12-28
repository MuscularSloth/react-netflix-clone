import styled from "styled-components/macro";

export const Container = styled.div`
    disolay: flex;
    padding: 70px 56px;
    margin: auto;
    max-width: 1000px;
    flex-direction: column;

    @media (max-width: 1000px){
        padding: 70px 30px;
    }
`;

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
    grid-gap: 15px;

    @media (max-width: 1000px){
        grid-template-column: repeat(auto-fill, minmax(150px, 1fr));
    }
`;

export const Column = styled.ul`
    display: flex;
    flex-direction: column;
    text-align: left;
    list-style: none;
    padding-left: 0;
`;
export const Link = styled.a`
    color: #757575;
    text-decoration: none;
    transition: color .4s ease;
`;

export const ListItem = styled.li`
    font-size: 14px;
    margin-bottom: 20px;

    &:hover ${Link} {
        color: #FFFFFF;
      }
`;

export const Title = styled.p`
    font-size: 16px;
    color: #757575;
    margin-bottom: 40px;
`;

export const Text = styled.p`
    font-size: 16px;
    color: #757575;
    margin-bottom: 40px;
`;

export const Break = styled.p`
    flex-basis: 100%;
    height: 0;
`;