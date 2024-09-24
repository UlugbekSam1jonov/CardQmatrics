import React from "react";
import Card from "./Card";
import image1 from "../assets/image1.jpg"
import image2 from "../assets/image.png"
import image3 from "../assets/image.png"
import image4 from "../assets/image.png"
import image5 from "../assets/image.png"
import image6 from "../assets/image.png"
const CardGrid = () => {
    const cards = [
        { title: "Item title", description: "A short description of the item", imageSrc: image1 },
        { title: "Card 2", description: "Bu card 2 haqida ma'lumot", imageSrc: image2 },
        { title: "Card 3", description: "Bu card 3 haqida ma'lumot", imageSrc: image3 },
        { title: "Card 4", description: "Bu card 4 haqida ma'lumot", imageSrc: image4 },
        { title: "Card 5", description: "Bu card 5 haqida ma'lumot", imageSrc: image5 },
        { title: "Card 6", description: "Bu card 6 haqida ma'lumot", imageSrc: image6 },
        { title: "Card 7", description: "Bu card 7 haqida ma'lumot", imageSrc: "/image7.jpg" },
        { title: "Card 8", description: "Bu card 8 haqida ma'lumot", imageSrc: "/image8.jpg" },
        { title: "Card 9", description: "Bu card 9 haqida ma'lumot", imageSrc: "/image9.jpg" },
    ];

    return (
    
        <div className="card-grid">
            {cards.map((card, index) => (
                <Card key={index} title={card.title} description={card.description} imageSrc={card.imageSrc} />
            ))}
        </div>
    );
};

export default CardGrid;
