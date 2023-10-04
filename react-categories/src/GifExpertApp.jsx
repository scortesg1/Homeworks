import { useState } from "react";
import "./App.css";
import AddCategory from "./components/AddCategory"
import GifGrid from "./components/GifGrid"


function GifExpertApp() {
  const [categories, setCategories] = useState(["Zodiac"]);

  const onAddCategory = (evt) => {
    setCategories(list => [...list, category])
  };

  return (
    <>
      <h1>GifExpert</h1>
      <AddCategory onAddCategory={onAddCategory}></AddCategory>
      <ol>
        {
          categories.map(
            (category, key) =>
            {
              return <GifGrid category={category} key={key}></GifGrid>
            }
          )
        }
      </ol>
      
    </>
  );
}

export default GifExpertApp;
