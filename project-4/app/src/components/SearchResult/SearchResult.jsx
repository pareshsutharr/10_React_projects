import React from 'react'
import styled from 'styled-components';
import { BASE_URL } from '../../App';
// import { Button } from '../../../../../project-3/src/styled/Button';
import {Button , Container} from '../../App'
const SearchResult = ({data}) => {
  return (
    <FoodsCardContainer>
      <FoodContainer>
        {data?.map((food)=>(
            <FoodCard key={food.name}>
                <div className="food_image">
                    <img src={BASE_URL+food.image} alt="" />
                </div>
                <div className="food_info">
                    <div className="info">
                        <h1>{food.name}</h1>
                        <p>{food.text}</p>
                    </div>
                    <Button>₹{food.price.toFixed(2)}</Button>
                </div>
            </FoodCard>
        ))}
      </FoodContainer>
    </FoodsCardContainer>
  )
}

export default SearchResult;

const FoodsCardContainer = styled.section`
    background-image: url("/bg.png");
    background-size: cover;
    min-height: calc(100vh - 210px);
`;
const FoodContainer = styled.div`
display: flex;
row-gap: 32px;
column-gap: 20px;
padding: 20px;
flex-wrap: wrap;
justify-content: center;
`;

const FoodCard = styled.div`

border: 1px solid #ffffffbb;
background: url(.png),
radial-gradient(
    90.16% 143.01% at 15.32% 21.04%,
    rgba(165,239,255,0.2) 0%
    rgba(1180,191,244,0.08447917) 77.08%,
    rgba(70,144,213,0) 100%
)
;

background-blend-mode: overlay,normal;
backdrop-filter: blur(13.1843px);
border-radius: 20px;
width: 340px;
display: flex;
padding: 10px;
height: fit-content;

.food_info{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    h3{
        font-size: 16px;
        font-weight: 500;
        margin-top: 8px;
    }
    p{
        margin-top: 4px;
        font-size: 12px;
    }
    button{
        font-size: 12px;
    }
}
`;
