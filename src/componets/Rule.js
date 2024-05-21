import React from 'react'
import styled from 'styled-components'

const Rule = () => {
    return (
        <RuleContainer>
            <h2>How to play dice game</h2>
            <div className="text">
                <ul>
                    <li>Select any number</li>
                    <li>Click on dice image</li>
                    <li>after click on dice if selected number is equal to dice number you
                        will get same point as dice</li>
                    <li>if you get wrong guess then 2 point will be dedcuted</li>
                </ul>
            </div>
        </RuleContainer>
    )
}

export default Rule


const RuleContainer = styled.div`
    width: 800px;
    margin: 0 auto;
    margin-top: 40px;
    border-radius: 10px;
    background-color: #fbf1f1;
    padding: 20px;
    h2{
        font-size: 24px;

    }
    .text{
        margin-top: 24px;
    }
`;