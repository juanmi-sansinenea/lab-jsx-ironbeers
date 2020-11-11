const React = require('react');
const Layout = require('./Layout');


function RandomBeer(props) {

  return (
    <Layout>
      <div>
        { 
   
        <div>
            <img src={props[0].image_url} width="200" alt="" />
            <h3>{props[0].name}</h3>
            <h5>{props[0].tagline}</h5>
            <p>{props[0].food_pairing}</p>
            <p>{props[0].brewers_tips}</p>
        </div>
 
        }
      </div>
    </Layout>
  );
  
}
module.exports = RandomBeer;