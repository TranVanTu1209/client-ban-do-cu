import React, { useState } from 'react';
import classes from './Sidebar.module.css';
import ComputerIcon from '@material-ui/icons/Computer';
import HeadsetIcon from '@material-ui/icons/Headset';
import LaptopChromebookIcon from '@material-ui/icons/LaptopChromebook';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import SidebarItem from './SidebarItem/SidebarItem';
import SidebarItemCategories from './SidebarItemCategories/SidebarItemCategories';

const Sidebar = () => {
  const [sidebarItems] = useState([
    {
      id: 'cate1',
      Icon: PhoneAndroidIcon,
      title: "Điện thoại - Máy tính bảng"
    },
    {
      id: 'cate2',
      Icon: ComputerIcon,
      title: "Điện tử - Điện lạnh"
    },
    {
      id: 'cate3',
      Icon: HeadsetIcon,
      title: "Phụ kiện - Thiết bị số"
    },
    {
      id: 'cate4',
      Icon: LaptopChromebookIcon,
      title: "Laptop - Thiết bị IT"
    },
    {
      id: 'cate5',
      Icon: PhoneAndroidIcon,
      title: "Điện thoại - Máy tính bảng"
    },
    {
      id: 'cate6',
      Icon: ComputerIcon,
      title: "Điện tử - Điện lạnh"
    },
    {
      id: 'cate7',
      Icon: HeadsetIcon,
      title: "Phụ kiện - Thiết bị số"
    },
    {
      id: 'cate8',
      Icon: LaptopChromebookIcon,
      title: "Laptop - Thiết bị IT"
    },
    {
      id: 'cate9',
      Icon: PhoneAndroidIcon,
      title: "Điện thoại - Máy tính bảng"
    },
    {
      id: 'cate10',
      Icon: ComputerIcon,
      title: "Điện tử - Điện lạnh"
    }
  ]);
  const [showSidebarItemCategories, setShowSidebarItemCategories] = useState(false);
  const showSubCateHandler = () => setShowSidebarItemCategories(true);
  const hideSubCateHandler = () => setShowSidebarItemCategories(false);

  const sidebarItemsMarkup = sidebarItems.map(item => <SidebarItem openTab={showSubCateHandler} key={item.id}
    closeTab={hideSubCateHandler} id={item.id} Icon={item.Icon} title={item.title}
  />);

  return (
    <div className={classes.Sidebar} >
      { sidebarItemsMarkup}
      {
        showSidebarItemCategories && <SidebarItemCategories openTab={showSubCateHandler} closeTab={hideSubCateHandler} />
      }
    </div>
  );
}

export default Sidebar;
