import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Parota',
        description: 'Finest and soft bread',
        price: 50,
    },
    {
        id: 'm2',
        name: 'Chicken Biryani',
        description: 'A Indian specialty!',
        price: 100,
    },
    {
        id: 'm3',
        name: 'Mutton Briyani',
        description: 'Tasty, raw, meaty',
        price: 150,
    },
    {
        id: 'm4',
        name: 'Chicken 65',
        description: 'Healthy...and spicy...',
        price: 80,
    },
    {
        id: 'm5',
        name: 'Egg Kalaki',
        description: 'Tasty... and Juicey...',
        price: 30,
    }

];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((meal) => (
        <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    ));

    return (
        <section className={classes.meals}>
            <Card>
                <ul>{mealsList}</ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;