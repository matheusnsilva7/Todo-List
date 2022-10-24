import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import links from "./data";

import classes from "./Nav.module.css";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <nav>
      <div>
        <button
          className={classes.btn}
          onClick={() => setShowLinks(!showLinks)}
        >
          <div className={classes["btn-icon"]}></div>
        </button>
        <div>
          <div
            className={
              showLinks
                ? `${classes.background} ${classes["show-Background"]}`
                : classes.background
            }
            onClick={() => setShowLinks(false)}
          ></div>
          <div
            className={
              showLinks
                ? `${classes.links} ${classes["show-links"]}`
                : classes.links
            }
          >
            <div
              className={classes.exit}
              onClick={() => setShowLinks(false)}
            ></div>
            <ul>
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li onClick={() => setShowLinks(false)} key={id}>
                    <Link href={url}>{text}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
