import React from 'react'
import styles from './item.module.css'

interface ItemProps{
    name:string;
    price:number;
    description:string;
}

const Item:React.FC<ItemProps> = ({name,price,description}) => {
  return (
    <div className={styles.menu_item}>
      <div className={styles.menu_header}>
        <span className={styles.name}>{name}</span>
        <span className={styles.dots}></span>
        <span className={styles.price}>${price}</span>
      </div>
      <p className={styles.description}>{description}</p>
    </div>

  )

}

export default Item