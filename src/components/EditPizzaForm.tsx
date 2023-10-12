import Pizza from '../modals/pizzas'
import './styles.css'
import React, { FC, useState } from 'react'

interface EditPizzaFormProps {
    data: Pizza,
    updatePizza: (newPizza: Pizza) => void,
    handleToggleEdit: () => void
}

const EditPizzaForm: FC<EditPizzaFormProps> = ({ data, updatePizza, handleToggleEdit }) => {

    const [editPizza, setEditPizza] = useState<Pizza>(data)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setEditPizza({
            ...editPizza,
            [name]: value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        
        const {title, price, img} = editPizza

        if(title && price && img) {
            updatePizza(editPizza)
            handleToggleEdit()
        }
    }

    return (
        <form className='edit-form'>
            <input type="text" name='title' placeholder='Название' onChange={handleChange} value={editPizza.title} />
            <input type="text" name='price' placeholder='Стоимость' onChange={handleChange} value={editPizza.price} />
            <input type="text" name='img' placeholder='Изображение' onChange={handleChange} value={editPizza.img} />
            <button type='submit' onClick={handleSubmit}>Сохранить</button>
        </form>
    )
}

export default EditPizzaForm