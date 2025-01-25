import React, { useState } from 'react'
import styles from './MenuDetails.module.css'
import SideImg from '../sideimg/SideImg'
import leftsideImage from '../../assets/leftsideImg-removebg-preview.png'
import rightsideImage from '../../assets/rightSideImg-removebg-preview.png'
import Item from '../item/item'
import drink1 from '../../assets/drinks1.png'


interface fooditemsProps {
    foodName: string;
    foodDiscription: string;
    price: number;
    menuId: string;
    _id: string;
}

interface menulistProps {
    menuname: string;
    menudiscription: string;
    _id: string;
}

interface MenuDetailsProps {

    selectedMenu: menulistProps | null;
    foodItems: fooditemsProps[];
}



const MenuDetails: React.FC<MenuDetailsProps> = ({ selectedMenu, foodItems }) => {



    const selectedItem = selectedMenu && selectedMenu._id
        && foodItems.filter(item => item.menuId === selectedMenu._id);
    console.log(selectedItem);


    return (
        <div className={styles.container}>
            <div  className={styles.sideimg}>
            <div className={styles.leftimg}></div>
            </div>
            <div className={styles.displayContainer}>
                <div className={styles.menuItemContainer}>
                    <div className={styles.titleSec}>
                        <div className={styles.img}><img src={drink1} alt="" /></div>
                        <div className={styles.title}><span className={styles.border}>
                            </span> {selectedMenu?.menudiscription} <span className={styles.border}></span></div>
                    </div>
                    <div className={styles.menu_grid}>
                        {selectedItem&& selectedItem.map((item, index) => (
                            <Item name={item.foodName}
                                price={item.price}
                                description={item.foodDiscription} />
                        ))
                    }
                    </div>
                </div>
            </div>
            <div  className={styles.sideimg}>
            <div className={styles.rightimg}></div>
            </div>
        </div>
    )
}

export default MenuDetails