import { useState } from 'react';
import './ingredientTags.css'; // On importe le CSS

// Exemple de données initiales, à remplacer par tes props


export default function IngredientTags(props) {

  return (
    <div className="ingredients-container">
      <h3 className="ingredients-title">INGREDIENTS ON HAND</h3>
      
      <div className="tags-list">
        {props.ingredientsListItems}
        <button className="add-more-btn">
          + add more
        </button>
      </div>
    </div>
  );
}