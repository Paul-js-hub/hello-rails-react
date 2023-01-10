import React from 'react';
import { getGreetings } from '../../redux/greetings/greetings';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Greetings = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.greetings)
    const { pending } = data
    useEffect(() =>{
      if(pending){
        dispatch(getGreetings())
      }
    }, [])
  return (
    <div>
      {data.greetings.map(greeting => {
        return <p>{greeting.title}</p>
      })}
    </div>
  )
}

export default Greetings
