import { Container, Grid, TextField } from "@mui/material";
import RecipeItem from "../../components/recipe-item";
import { useEffect, useState } from "react";
import noRecipes from "../../assets/images/undraw_no_data_re_kwbl.svg";
import spinner from "../../assets/images/bouncing-circles.svg";


export default function Recipes() {
    const [recipes, setRecipes] = useState([]);
    const [searchItem,setSearchItem]= useState("");
    const [loading, setLoading]= useState(false);

    const searchRecipes = () => {
        setLoading(true);
        //prepare url
        const url =new URL ('https://api.spoonacular.com/recipes/complexSearch');
        url.searchParams.append('apiKey', process.env.REACT_APP_SPOONACULAR_API_KEY);
        //fetch recipes from API
        url.searchParams.append("query",searchItem);
        //Add the query parameter 

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                //update the recipes state
                setRecipes(data.results);
                //console.log(data);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(()=> setLoading(false))
    }
   
    useEffect(searchRecipes,[]);

    return (
        <Container sx={{ my: "2rem" }}>
            <TextField color="success" fullWidth
                id="outlined-basic"
                label="Enter a keyword to search recipe and hit enter"
                variant="outlined"
                value={searchItem}
                onChange={(event) => setSearchItem(event.target.value)}
                onKeyDown={event => event.key == "Enter"  && searchRecipes()}
                />

            <Grid sx={{ mt: "1rem" }} container spacing={3}>
               {loading ?
               <Container sx={{display:"flex", justifyContent:"center"}}>
                <img src={spinner} width ="40%" />
               </Container>
                : recipes.length >0 ? recipes.map((recipe)=> <RecipeItem key={recipe.id} title= {recipe.title} image={recipe.image}/>) : (
                <Container sx={{display:"flex", justifyContent:"center"}}>
                    <img src={noRecipes} width="20%"/>
                </Container>
               )}
            </Grid>
        </Container>
    );
}