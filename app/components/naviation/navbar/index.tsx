import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import styles from  "./../../../styles/style.module.css";
import Button from "./Button";


const Navbar = ({ toggle }: { toggle: () => void }) => {
  return (
    <>
      <div className= {styles.navbar} >
        <div className={styles.container_hader}>
          <div className="flex justify-between items-center h-full">
            <Logo />
            <button
              type="button"
              className="inline-flex items-center md:hidden"
              onClick={toggle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#000"
                  d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
                />
              </svg>
            </button>
            <ul className="hidden md:flex gap-x-6 text-black ">
              <li>
                <Link href="/">
                  <p>Home</p>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <p>Services</p>
                </Link>
              </li>
              <li>
                <Link href="/casestudy"> 
                  <p>Case Studies</p>
                </Link>
              </li>
              <li>
                <Link href="/aboutus">
                  <p>About Us</p>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <p>Blog</p>
                </Link>
              </li>
              <li>
                <Link href="/contacts">
                  <p>Contacts</p>
                </Link>
              </li>
            </ul>
            <div className="hidden md:block">
              <Button />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;