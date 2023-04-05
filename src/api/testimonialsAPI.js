import customer1PP from '../assets/customer1.jpg';
import customer2PP from '../assets/customer2.jpg';
import customer3PP from '../assets/customer3.jpg';

const testimonials = [
    {
        id: 1,
        name: "Jhon Doe",
        text: "Little Lemon has the best food in town! I can't get enough of their delicious dishes.",
        rating: [1, 1, 1, 1, 1],
        profilePicture: customer1PP,
    },
    {
        id: 2,
        name: "Jane Smith",
        text: "The atmosphere at Little Lemon is fantastic, and the staff is always friendly and attentive.",
        rating: [1, 1, 1, 1, 0.5],
        profilePicture: customer2PP,
    },
    {
        id: 3,
        name: "Alice Brown",
        text: "I celebrated my birthday at Little Lemon, and they made it an unforgettable experience!",
        rating: [1, 1, 1, 1, 1],
        profilePicture: customer3PP,
    }
];

export const fetchTestimonials = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(testimonials);
        }, 1000);
    });
};