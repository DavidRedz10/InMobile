//import Link from 'next/link';
//import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer } from '@chakra-ui/react';
//import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
//import { BsSearch } from 'react-icons/bs';
//import { FiKey, FiCpu} from 'react-icons/fi';
//import Image from 'next/image';
//
//
//const NavBar = () => (
//    
//    <Flex p="2" borderBottom="1px" borderColor="gray.100" alignItems="center">
//    <Box fontSize='3xl' color='blue.400' fontWeight='bold' alignItems="center"> 
//        <Image src='https://freelogo-assets.s3.amazonaws.com/sites/all/themes/freelogoservices/images/structure.jpg' width="100" height="100" alt='Logo' />
//    </Box>
//    <Box fontSize='3xl' color='blue.400' fontWeight='bold' alignItems="center" >
//    <Link href="/" paddingleft="2" >InMobile</Link>
//    </Box>
//    <Spacer></Spacer>
//    <Box>
//        <Menu>
//            <MenuButton as={IconButton} icon={<FcMenu />} variant="outlined" color="red.400" />
//            <MenuList>
//                <Link href="/" passHref>
//                    <MenuItem icon={<FcHome/>}>Home</MenuItem>
//                </Link>
//                <Link href="/search" passHref>
//                    <MenuItem icon={<BsSearch/>}>Search</MenuItem>
//                </Link>
//                <Link href="/search?purpose=for-sale" passHref>
//                    <MenuItem icon={<FcAbout/>}>Buy Property</MenuItem>
//                </Link>
//                <Link href="/search?purpose=for-rent" passHref>
//                    <MenuItem icon={<FiKey/>}>Rent Property</MenuItem>
//                </Link>
//                <Link href="/questions" passHref>
//                    <MenuItem icon={<FiCpu/>}>Inteligencia Artificial</MenuItem>
//                </Link>
//            </MenuList>
//        </Menu>
//    </Box>
//    </Flex>
//
//
//)
//
//export default NavBar;

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import NavItem from "./NavItem";
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer } from '@chakra-ui/react';

const MENU_LIST = [
  { text: "Search", href: "/search" },
  { text: "Sale", href: "/search?purpose=for-sale" },
  { text: "Rent", href: "/search?purpose=for-rent" },
  { text: "AI", href: "/questions" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className="nav">
      <Link legacyBehavior href={"/"}>
          <a>
            <h1 className="logo" >CodeWithMarish</h1>
          </a>
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;