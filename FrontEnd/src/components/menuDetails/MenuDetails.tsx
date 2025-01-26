import React from 'react'
import styles from './MenuDetails.module.css'
import Item from '../item/item'
import drink1 from '../../assets/drinks1.png'
import drink2 from '../../assets/drinks2.png'


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
            <div className={styles.sideimg}>
                <div className={styles.leftimg}></div>
            </div>
            <div className={styles.displayContainer}>
                <div className={styles.menuItemContainer}>
                    <div className={styles.titleSec}>
                        <div className={styles.img}><img src={drink1} alt="" /></div>
                        <div className={styles.title}><span className={styles.border}>
                        </span> <span className={styles.titleName}> {selectedMenu?.menudiscription} </span> <span className={styles.border}></span></div>
                    </div>
                    <div className={styles.menu_grid}>
                        {selectedItem && selectedItem.map((item, index) => (
                            <Item name={item.foodName}
                                price={item.price}
                                description={item.foodDiscription} index={index} />
                        ))
                        }
                    </div>
                    <div className={styles.menuimage}><img src={drink2} alt="" /></div>
                </div>
            </div>
            <div className={styles.sideimg}>
                <div className={styles.rightimg}></div>
            </div>
        </div>
    )
}

export default MenuDetails