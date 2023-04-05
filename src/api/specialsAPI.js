import greeksalad from "../assets/greek-salad.jpg";
import bruschetta from "../assets/bruchetta.png";
import lemondessert from "../assets/lemon-dessert.jpg";

const specials = [
    {
        id: 1,
        name: "Greek Salad",
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        price: 12.99,
        image: greeksalad,
    },
    {
        id: 2,
        name: "Bruschetta",
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        price: 5.99,
        image: bruschetta,
    },
    {
        id: 3,
        name: "Lemon Dessert",
        description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        price: 5.00,
        image: lemondessert,
    }
];

export const fetchSpecials = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(specials);
        }, 1000);
    });
};
