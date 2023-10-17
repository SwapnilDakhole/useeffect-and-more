import { useEffect, useState } from 'react';

const Home = () => {
  const [state, setState] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      await fetch(
        `https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setData(data);
        });
    }
    getData();
  }, [state]);
  return (
    <div>
      <button
        onClick={() => {
          setState(state + 1);
        }}
        className='btn'
      >
        Click me {state}
      </button>
      {data.map((element, index) => {
        return (
          <div key={index} className='parent'>
            <h4>{element.firstName}</h4>
            <h4>{element.lastName}</h4>
            <h4>{element.email}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
