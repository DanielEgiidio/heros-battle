import {
    Button,
    createMuiTheme,
    TextField,
    ThemeProvider,
  } from "@material-ui/core";
  import "./Search.css";
  import SearchIcon from "@material-ui/icons/Search";
  import { useEffect, useState } from "react";
  import axios from "axios";
  import Card from "../../components/Card/Card";
  
  
  const Search = () => {
    const [searchText, setSearchText] = useState("");
    const [content, setContent] = useState([]);
  
  
    const darkTheme = createMuiTheme({
      palette: {
        type: "dark",
        primary: {
          main: "#fff",
        },
      },
    });
  
    const fetchSearch = async () => {
      const {data} = await axios.get(
          `http://homologacao3.azapfy.com.br/api/ps/metahumans?api_key=${process.env.REACT_APP_API_KEY}`
      );
  
    setContent(data);
  }
  
  useEffect(() => {
    fetchSearch();
    //eslint-disable-next-line
  },[])
  
    return (
      <div>
        <ThemeProvider theme={darkTheme}>
          <div className="search">
            <TextField
              style={{ flex: 1 }}
              className="searchBox"
              label="Search"
              variant="filled"
              onChange={(e) => setSearchText(e.target.value)}
            />
            <Button
              onClick={fetchSearch}
              variant="contained"
              style={{ marginLeft: 10 }}
            >
              <SearchIcon fontSize="large" />
            </Button>
          </div>
  
        </ThemeProvider>
        <div className="herosPage">
          {
            content.filter(c => {
              if(searchText === ""){
                return c;
              }
              else if(c.name.toLowerCase().includes(searchText.toLowerCase())){
                return c
              }
            }).
            map((c) => (
              <Card 
                id={c.id} 
                name={c.name}
                imagesmd={c.images.md}
              />
              
            ))}
        </div>
      </div>
    );
  };
  
  export default Search; 