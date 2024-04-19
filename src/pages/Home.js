import styles from "../styles/Home.module.css";
import { ArrowDownOutlined } from "@ant-design/icons";

export default function Home() {
    return (
        <div className={styles.body}>
            <div className={styles.navBar}>
                <div className={styles.nameAndLogo}>
                    <img
                        src="/logo.svg"
                        alt="logo"
                        className={styles.companyLogo}
                    />
                </div>
                <div className={styles.navLinks}>
                    <p className={styles.activeLink}>Home</p>
                    <p className={styles.link}>Services</p>
                    <p className={styles.link}>Contact</p>
                </div>
            </div>

            <div className={styles.sectionTwo}>
                <div className = {styles.sectionContent}>
                    <div>
                        <div className={styles.text}>
                            <p className={styles.header}>
                                The easiest way to generate color pallettes for
                                your web or mobile application.
                            </p>
                            <p className={styles.tagLine}>
                                Pick colors, see what they look like and click
                                to copy the hexcodes.
                            </p>
                        </div>
                        <button className={styles.button}>sample button</button>
                    </div>
                    <div>
                        <svg
                            width="481"
                            height="70vh"
                            viewBox="0 0 481 933"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M463.5 18H112.5C60.0329 18 17.5 60.533 17.5 113V113C17.5 165.467 60.033 208 112.5 208H240.5C363.659 208 463.5 307.84 463.5 431V834.75C463.5 879.347 427.347 915.5 382.75 915.5V915.5C338.153 915.5 302 879.347 302 834.75V502.25C302 423.688 238.313 360 159.75 360V360C81.1875 360 17.5 423.688 17.5 502.25V915.5"
                                stroke="#DB8E8E"
                                stroke-width="35"
                                stroke-linecap="round"
                                className={styles.wave}
                            />
                        </svg>
                    </div>
                </div>
                <ArrowDownOutlined className = {styles.icon}/>
            </div>
        </div>
    );
}
