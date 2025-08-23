import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css";

export default function StarRating({ noOfStars = 5 }) {
    const [currentRating, setCurrentRating] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState(0);

    function handleClick(getCurrentIndex) {
        setCurrentRating(getCurrentIndex);
         
    }

    function handleMouseEnter(getCurrentIndex) {
    setHoveredIndex(getCurrentIndex);
    }

    function handleMouseLeave() {
    setHoveredIndex(currentRating);
    }

    return (
    <div className="star-rating">
        {[...Array(noOfStars)].map((_, index) => {
        index += 1;

        return (
            <FaStar
            key={index}
            className={index <= (hoveredIndex || currentRating) ? "active" : "inactive"}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
            />
        );
        })}
    </div>
    );
}
