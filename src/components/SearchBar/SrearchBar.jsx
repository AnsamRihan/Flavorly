import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getRecipes } from "./../../services/RecipeApi";

export default function SearchBar() {

  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Hello");

    const value = search.toLowerCase().trim();
    if (!value) return;

    try {
      setLoading(true);
      const data = await getRecipes(value);

      if (data.data.recipes.length > 0) {
        navigate(`/recipes?search=${value}`);
      } else {
        navigate("/notFound");
      }


    } catch (error) {
      console.error(error);
      navigate("/notFound");

    } finally {
      setLoading(false);
    }
  };


  return (
    <>
        <div className='mt-6 w-full bg-bg-primary rounded-[20px] py-2.5 px-2 row gap-3'>
            <div className="ps-4 center hidden sm:block">
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>

            <form onSubmit={handleSubmit} className="stack xs:flex-row gap-3 w-full" >
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search recipes, ingredients, or cuisines..."
                    className="px-4 py-2 w-full outline-none border-none focus:ring-0"
                />

                <button type="submit" className="btn-primary w-full xs:w-fit"
                disabled={loading}>
                    {loading ? "Searching..." : "Search"}
                </button>
            </form>
        </div>
    </>
  );
}