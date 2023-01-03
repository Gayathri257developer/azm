import React from 'react'
import styled from 'styled-components'
import Rating from '@mui/material/Rating';
import { useStateValue } from '../StateProvider';

const Card = ({id,image,title,price,rating}) => {
 const [{basket}, dispatch] = useStateValue();

 console.log("basket>>", basket);
 const addToBasket = (e) =>{
    e.preventDefault();

    dispatch({
        type: "ADD_TO_BASKET",
        item:{
            id,title,price,image,rating,
        }
    })
 }
    return (
    <Container>
    <Image>
    <img src={image} alt='card1'/>
    </Image>
    <Description>
    <h5> { title.slice(0,40)}...</h5>
    <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
    <p>₹ {price}</p>

   
    <button onClick={addToBasket}>
    Add to cart
    </button>
   
    </Description>
    </Container>
  )
}

const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
background-color: #fff;
z-index: 10;
&:hover{
  transform: translate(-20px, -10px);
  background-color: rgba(0,0,0,0.1);
 }
`;
const Image = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  flex: 0.3;
  img {
    width: 180px;
    height: 200px;
    transition: ease-in-out 2s;
  }

  
`;
const Description = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex: 0.7;
  h5 {
    font-size: 16px;
    font-weight: 600;
  }
  p {
    font-weight: 600;
    font-size: 18px;
  }
  button {
    width: 100%;
    height: 33px;
    background-color: #fa8900;
    border: none;
    margin: 2px;
    font-size: 16px;
    border-radius: 10px;
    cursor: pointer;
    &:hover{
      transform: scaleY(1.3);
    }
  }
  
`;


export default Card