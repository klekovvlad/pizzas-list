import Pizza from '../modals/pizzas'
import './styles.css'
import React, { FC, useState } from 'react'

const initState = {
    title: '',
    price: '',
    img: ''
}

interface AddPizzaFormProps {
    addPizza: (newPizza: Pizza) => void
}

const AddPizzaForm: FC<AddPizzaFormProps> = ({ addPizza }) => {

    const [newPizza, setNewPizza] = useState<{title: string, price: string, img: string}>(initState)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setNewPizza({
            ...newPizza,
            [name]: value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        
        const {title, price, img} = newPizza

        if(title && price && img) {
            addPizza({
                title,
                img,
                price: Number(price),
                id: Date.now()
            })

            setNewPizza(initState)
        }
    }

    console.log(newPizza)

    return (
        <form>
            <input type="text" name='title' placeholder='Название' onChange={handleChange} value={newPizza.title} />
            <input type="text" name='price' placeholder='Стоимость' onChange={handleChange} value={newPizza.price} />
            <input type="text" name='img' placeholder='Изображение' onChange={handleChange} value={newPizza.img} />
            <button type='submit' onClick={handleSubmit}>+ Добавить в меню</button>
        </form>
    )
}

export default AddPizzaForm