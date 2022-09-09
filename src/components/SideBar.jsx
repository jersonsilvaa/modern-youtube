import React from 'react'
import { categories } from '../utils/constans'

import '../styles/components/SideBar.css'

const SideBar = () => (
    <div className="sidebar">
    <section className="sidebar__section">
        { categories.map((category) => (
            <button className='button__category'>
                <span className='color__icon'>{ category.icon }</span>
                <span>{ category.name }</span>
            </button>
        )) }
    </section>
    <p>Todos los derechos reservados © DevSilva</p>
</div>
)

export default SideBar