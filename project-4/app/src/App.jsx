import { useEffect } from 'react';
import { useState} from 'react';
import styled from 'styled-components';
import SearchResult from './components/SearchResult/SearchResult';

export const BASE_URL = "http://localhost:9000";
const App = () => {

const [data,setData] = useState(null);
const [filterData,setFilterData] = useState(null);
const [loading,setloading] = useState(false);
const [selectedBtn,setSelectedBtn] = useState("all");
const [error,setError] = useState(null);

const filterfood=(type)=>{
  if(type === "all"){
    setFilterData(data);
    setSelectedBtn("all");
    return
  }
  const filter = data?.filter((food)=>
    food.type.toLowerCase().includes(type.toLowerCase())
 );
 setFilterData(filter);
 setSelectedBtn(type);

}

const SearchFood=(e)=>{
  const searchValue = e.target.value;
  if(searchValue === ""){
    setFilterData(null);
  }

  const filter = data?.filter((food)=>
    food.name.toLowerCase().includes(searchValue.toLowerCase())
 );

  setFilterData(filter);

}

useEffect(()=>{
  const fetchFoodData = async()=>{
    setloading(true);
     try{
       const response = await fetch(BASE_URL);
       const json = await response.json();
       setData(json);
       setFilterData(json)
       setloading(false);
     }catch(error){
         setError("Unable to load data ");
     }
 };
 fetchFoodData()
},[])

console.log(data)


if(error) return <div>{error}</div>
if(loading) return <div>Loading....</div>

  return <>
  <Container>
    <TopContainer>
      <div className='logo'>
          <img src="/Foody Zone.svg" alt="" />
      </div>
      <div className='search'>
        <input onChange={SearchFood} type="text" placeholder='Search Food'/>
      </div>
    </TopContainer>
    <FilterContainer>
      <Button onClick={()=>filterfood("all")}>All</Button>
      <Button onClick={()=>filterfood("breakfast")}>Breakfast</Button>
      <Button onClick={()=>filterfood("lunch")}>Lunch</Button>
      <Button onClick={()=>filterfood("dinner")}>Dinner</Button>
    </FilterContainer>
  </Container>
  <SearchResult data={filterData}/>
  </>
};

export default App;

export const Container = styled.div`
max-width: 1200px;
margin: 0 auto;
background-color:#323334;

`;
const TopContainer = styled.section`
min-height: 140px;
display: flex;
align-items: center;
justify-content: space-between;
padding: 16px;

.search{
  input{
    background-color: transparent;
    color: white;
    border: 1.5px solid red;
    outline: none;
    padding: 10px 14px;
    font-size: 16px;
  }
}

`;

const FilterContainer = styled.section`
justify-content: center;
display: flex;
gap: 12px;
padding-bottom:40px;
`;

export const Button = styled.button`
background-color: #ff4343;
border-radius:5px;
padding: 6px 12px;
border: none;
color: white;
cursor: pointer;
&:hover{
  background-color: #f01818;
}
`;

