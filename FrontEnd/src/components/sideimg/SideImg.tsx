import React from 'react'
import styles from './SideImg.module.css'

interface SideImgProps{
    Img:string;
}

const SideImg:React.FC<SideImgProps> = ({Img}) => {
  return (
    <div className={styles.wrapper}>
     <div className={styles.imgSec}><img src={Img} alt="sideImge" /></div>
    </div>
  )
}

export default SideImg