import React, { useEffect } from "react";
import "./App.css";
import { useState  } from "react";


const  App= ()=> {
 

  const [city, setcity] = useState([]);
  const [search, setsearch] = useState("lahore");
  const [waether, setwaether] = useState([]);
useEffect (()=>{
          const  fetchapi = async () =>{
           const url =`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=ba2aa5f340e2ac959451f46a299028a7`
           const  res = await  fetch(url);
           const resjson = await res.json();
          setcity(resjson.main)
          setwaether(resjson.sys)
         }
         fetchapi();
           

} ,[search] )



const change = (event)=>{
  setsearch(event.target.value)
}


  return (
<>
<input className="form-control bg-light" placeholder="city name" onChange={change} />


{!city?(
  
  
  <div>
    
    <section className="vh-100" >
    
  <div className="container py-5 h-100">

    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-8 col-lg-6 col-xl-4">

        <div className="card" >
          <div className="card-body p-4">

            <div className="d-flex">
              <h2 className="flex-grow-1">city not found</h2>
              <h6></h6>
            </div>

            <div className="d-flex flex-column text-center mt-5 mb-4 justify-content-center">
              <h3 className="d "> 0 °cel </h3>
              <span className="small" ><b>humidity 0</b></span>
            </div>

            <div className="d-flex align-items-center">
              <div className="flex-grow-1" >
                <div><i className="fas fa-wind fa-fw" ></i> <span className="ms-1"> tem min 0
                  </span></div>
                <div><i className="fas fa-tint fa-fw" ></i> <span className="ms-1"> temp max 0 </span>
                </div>
                <div><i className="fas fa-sun fa-fw" ></i> <span className="ms-1"> <b>country NA </b></span>
                </div>
              </div>
              <div>
              
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu1.webp"
                  width="100px" alt="iamge" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>

  </div>
</section>

  </div>

):
(
  <div>
    
    <section className="vh-100" >
    
  <div className="container py-5 h-100">

    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-8 col-lg-6 col-xl-4">

        <div className="card" >
          <div className="card-body p-4">

            <div className="d-flex">
              <h2 className="flex-grow-1">{search}</h2>
              <h6></h6>
            </div>

            <div className="d-flex flex-column text-center mt-5 mb-4 justify-content-center">
              <h3 className="d "> {city.temp} °cel </h3>
              <span className="small" ><b>humidity {city.humidity}</b></span>
            </div>

            <div className="d-flex align-items-center">
              <div className="flex-grow-1" >
                <div><i className="fas fa-wind fa-fw" ></i> <span className="ms-1"> tem min {city.temp_min}
                  </span></div>
                <div><i className="fas fa-tint fa-fw" ></i> <span className="ms-1"> temp max {city.temp_max} </span>
                </div>
                <div><i className="fas fa-sun fa-fw" ></i> <span className="ms-1"> <b>country {waether.country} </b></span>
                </div>
              </div>
              <div>
                {city.temp >= 20?(<img src={require('./image/hot.png')}
                  width="100px" alt="iamge" />):(<img src={require('./image/cold.webp')}
                  width="100px" alt="iamge" />)}
                
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>

  </div>
</section>

  </div>
)
} 

   
   </>
  );
}

export default App;
