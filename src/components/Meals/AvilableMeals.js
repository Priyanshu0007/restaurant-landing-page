import React, { useEffect, useState } from 'react'
import Card from '../UI/Card';
import classes from "./AvilableMeals.module.css"
import MealItem from './MealItem/MealItem';
function AvilableMeals() {
  const [meals,setMeals]=useState([]);
  const [isLoading,setIsLoading]=useState(true);
  const [httpError,setHttpError]=useState();
  useEffect(()=>{
    const fetchMeals= async()=>{
      setIsLoading(true);
      const response=await fetch("https://food-app-b8b01-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json");
      if(!response.ok){
        throw new Error("Something went wrong");
      }
      const responseData=await response.json();
      const loadedMeals=[];
      for (const key in responseData) {
          loadedMeals.push({
            id:key,
            name:responseData[key].name,
            description:responseData[key].description,
            price:responseData[key].price,
          });  
        }
        setMeals(loadedMeals);
        setIsLoading(false);
      }
     
        fetchMeals().then().catch((error)=>{
          setIsLoading(false);
          setHttpError(error.message);
        });
  },[]);
  if(isLoading){
    return <section className={classes.MealsLoading}>Loading...</section>
  }
  if(httpError){
    return <section className={classes.MealsError}>{httpError}</section>
  }
    const mealsList=meals.map(meal=><MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price}/>);
  return (
    <section className={classes.meals}>
        <Card>
        <ul>
            {mealsList}
        </ul>
        </Card>
    </section>
  )
}

export default AvilableMeals