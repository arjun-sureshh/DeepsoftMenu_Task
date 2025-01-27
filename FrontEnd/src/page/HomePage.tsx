import React, { useLayoutEffect, useState } from 'react'
import styles from './HomePage.module.css'
import NavBar from '../components/navBar/NavBar'
import Banner from '../components/banner/banner'
import Menu from '../components/menu/Menu'
import MenuDetails from '../components/menuDetails/MenuDetails'
import About from '../components/about/about'
import axios from 'axios'

interface menulistProps {
  menuname: string;
  menudiscription: string;
  _id: string;
}

interface fooditemsProps {
  foodName: string;
  foodDiscription: string;
  price: number;
  menuId: string;
  _id: string;
}

const HomePage: React.FC = () => {

  const [menulist, setMenulist] = useState<menulistProps[]>([])
  const [fooditems, setFooditems] = useState<fooditemsProps[]>([])
  const [selectedMenu, setSelectedMenu] = useState<menulistProps | null>(null)


  // useeffect for fetch all   menulist

  useLayoutEffect(() => {

    const fetchdata = async () => {
      try {
        await axios.get("https://deepsoft-menu-task-8516t7sle-arjun-sureshs-projects.vercel.app/api/menu").then((response) => {
          console.log(response.data);
          if (response && response.status == 200 && response.data) {
            setMenulist(response.data)
            setSelectedMenu(response.data[1])
          }
        })
      } catch (error) {
        console.log(error);
      }
    }
    fetchdata();
  }, [])

  //  useeffect for fetch all fooditems

  useLayoutEffect(() => {

    const fetchfooditems = async () => {
      try {
        await axios.get("https://deepsoft-menu-task-8516t7sle-arjun-sureshs-projects.vercel.app/api/food").then((response) => {
          console.log(response.data);
          if (response && response.status == 200 && response.data) {
            setFooditems(response.data)
          }
        })
      } catch (error) {
        console.log(error);
      }
    }
    fetchfooditems();
  }, [])


  return (
    <div className={styles.container}>
      <NavBar />
      <Banner />
      <Menu menulist={menulist} selectedMenu={selectedMenu} setselectedMenu={setSelectedMenu} />
      <MenuDetails selectedMenu={selectedMenu} foodItems={fooditems} />
      <About />
    </div>
  )
}

export default HomePage