import React from 'react'
import styles from './Menu.module.css'


interface menulistProps {
  menuname: string;
  menudiscription: string;
  _id: string;
}

interface MenuProps {
  menulist: menulistProps[];
  selectedMenu: menulistProps | null;
  setselectedMenu: React.Dispatch<React.SetStateAction<menulistProps | null>>
}

const Menu: React.FC<MenuProps> = ({ menulist, selectedMenu, setselectedMenu }) => {
  return (
    <div className={styles.container}>
      {menulist.length >= 1 && menulist.map((menu, index) => (
        <button className={`${styles.items} ${selectedMenu?._id == menu._id ? styles.active : undefined}`} key={index} onClick={() => setselectedMenu(menu)}  >{menu.menuname}</button>
      ))
      }
    </div>
  )
}

export default Menu