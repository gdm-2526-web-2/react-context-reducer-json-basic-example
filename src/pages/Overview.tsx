import { Link, useLoaderData } from "react-router";
import type { CategoryType } from "../types";
import { useState } from "react";
import { ROUTES } from "../constants";

const Overview = () => {
  const categories = useLoaderData();
  const [activeCategories, setActiveCategories] = useState(categories);

  function filterCategories(categoryId: string) {
    if (categoryId === "all") {
      setActiveCategories(categories);
    } else {
      setActiveCategories(
        categories.filter(
          (category: CategoryType) => category.id.toString() === categoryId,
        ),
      );
    }
  }

  return (
    <div>
      <select onChange={(e) => filterCategories(e.target.value)}>
        <option value="all">All Categories</option>
        {categories.map((category: CategoryType) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>

      {activeCategories.map((category: CategoryType) => (
        <div key={category.id}>
          <h2>{category.name}</h2>
          <Link to={`${ROUTES.DETAIL}/${category.id}`}>
            View {category.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Overview;
