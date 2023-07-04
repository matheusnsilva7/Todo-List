import { useRouter } from "next/router";
import Link from "next/link";

import classes from "./Nav.module.css";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav>
      <div className={classes.links}>
        <ul>
          <li>
            <Link href="/">
              <svg
                className={router.asPath === "/" ? classes.active : " "}
                width="24"
                height="22"
                viewBox="0 0 24 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.9804 9.41203C22.9804 9.41203 22.9785 9.41018 22.9766 9.40832L12.9536 0.727106C12.6983 0.48382 12.364 0.346392 11.9898 0.34082C11.636 0.346392 11.3017 0.48382 11.0724 0.703892L1.01965 9.41203C0.630576 9.75375 0.512648 10.2988 0.734576 10.7761C0.930505 11.1995 1.38365 11.4447 1.84979 11.4447H3.64286V20.034C3.64286 20.931 4.37086 21.659 5.26786 21.659H9.21429C9.72686 21.659 10.1429 21.243 10.1429 20.7304V15.0011C10.1429 14.8312 10.2803 14.6947 10.4493 14.6947H13.5507C13.7197 14.6947 13.8571 14.8312 13.8571 15.0011V20.7304C13.8571 21.243 14.2731 21.659 14.7857 21.659H18.7321C19.6301 21.659 20.3571 20.931 20.3571 20.034V11.4447H22.1502C22.6164 11.4447 23.0695 11.1995 23.2654 10.7761C23.4874 10.2988 23.3694 9.75375 22.9804 9.41203Z"
                  fill="white"
                />
              </svg>
            </Link>
          </li>
          <li>
            <Link href="/week">
              <svg
                className={router.asPath === "/week" ? classes.active : " "}
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 -960 960 960"
                width="20"
              >
                <path d="M576.225-240Q536-240 508-267.775q-28-27.774-28-68Q480-376 507.775-404q27.774-28 68-28Q616-432 644-404.225q28 27.774 28 68Q672-296 644.225-268q-27.774 28-68 28ZM216-96q-29.7 0-50.85-21.5Q144-139 144-168v-528q0-29 21.15-50.5T216-768h72v-96h72v96h240v-96h72v96h72q29.7 0 50.85 21.5Q816-725 816-696v528q0 29-21.15 50.5T744-96H216Zm0-72h528v-360H216v360Zm0-432h528v-96H216v96Zm0 0v-96 96Z" />
              </svg>
            </Link>
          </li>
          <li>
            <Link href="/goals">
              <svg
                className={router.asPath === "/goals" ? classes.active : " "}
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 -960 960 960"
                width="20"
              >
                <path d="M293-281 123-451l51-51 119 119 51 51-51 51Zm204-1L327-451l51-51 119 119 288-289 51 51-339 339Zm0-203-51-51 136-136 51 51-136 136Z" />
              </svg>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
