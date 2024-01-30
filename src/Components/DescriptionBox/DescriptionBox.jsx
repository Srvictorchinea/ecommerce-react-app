import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
          corrupti maxime. Ipsum tenetur ex tempore ipsa sapiente eveniet at
          debitis cupiditate ab? Omnis, quas velit alias facere neque possimus
          id.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
          nihil quasi ea fugiat ipsa corporis eum laborum autem quas natus
          magnam, dolorum vero adipisci incidunt earum nobis dolores temporibus
          minus!
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
