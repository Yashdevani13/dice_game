import styled from "styled-components"

const TotalScore = ({score}) => {
    return (
        <>
            <ScoreContainer className="">
                <h1>{score}</h1>
                <p>Total Score</p>
            </ScoreContainer>
        </>
    )
}

export default TotalScore

const ScoreContainer = styled.div`
    width: 200px;
    text-align: center;
    h1{
        font-size: 95px;
        line-height: 100px;
    }
    p{
        font-size: 24px;
        font-weight: 500;
    }
`;
