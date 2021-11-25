import axios from "axios";
import {useState, useEffect} from "react";
import '../../components/Card/Card';
import Card from "../../components/Card/Card";
import "./HomePage.css";

const HomePage = () => {
    const [content, setContent] = useState([]);

      const fetchHeros = async () => {
          const {data} = await axios.get(
              `http://homologacao3.azapfy.com.br/api/ps/metahumans?api_key=${process.env.REACT_APP_API_KEY}`
          );

        setContent(data);
      }

      useEffect(() => {
        fetchHeros();
        //eslint-disable-next-line
      },[])
    

    return (
        <div>
            <span className="homePage">Lista dos Heróis</span>
            <div className="herosPage">
                { content && content.map((c) => 
                    <Card 
                        key={c.id} 
                        id={c.id} 
                        name={c.name}
                        powerstats={c.powerstats}
                        imagesmd={c.images.md}
                        
                    />)}
            </div>
            
        </div>
    );
};

export default HomePage;
