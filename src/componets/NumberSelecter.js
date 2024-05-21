import styled from "styled-components"

const NumberSelecter = ({ setError, error, selectedNumber,setSelectedNumber }) => {

  const arrNumber = [1, 2, 3, 4, 5, 6];

  const NumberSelecterHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  }
  return (
    <>
      <NumberSelecterContainer>
        <p className="error">{error}</p>
        <div className="flex">
          {
            arrNumber.map((value, i) => (
              <Box isSelected={value == selectedNumber}
                key={i}
                onClick={() => NumberSelecterHandler(value)}>{value}</Box>
            ))}
        </div>
        <p>Select Number</p>
      </NumberSelecterContainer>
    </>
  );
};

export default NumberSelecter

const NumberSelecterContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: end;
    .flex{
      display: flex;
      gap: 24px;
    }
    p{
      font-size: 24px;
      font-weight: 600;
    }
    .error{
      color: red;
    }
`;


const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 600;
  border-radius: 5px;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
`;
