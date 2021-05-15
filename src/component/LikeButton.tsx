import React, { useState } from "react";

const LikeButton = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }

    return (
        <span className="likeButton" onClick={handleClick}><span className="heart"><i className="fas fa-heart"></i></span>{count}</span>
    )
}

export default LikeButton;