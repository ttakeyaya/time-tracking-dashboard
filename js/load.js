const loadJSON = async (path)=> {
  let response = await fetch(path);
  let json = await response.json();
  return json;
};

const getDataBy = (timeframe, data)=>{
  return data.map(elem =>{
    return{
      "title":elem.title,
      timeframes: elem.timeframes[timeframe]
    };
  });
};

export{loadJSON, getDataBy};