import styles from "../styles/Home.module.css";
import {
    ArrowDownOutlined,
    MenuOutlined,
    GithubOutlined,
} from "@ant-design/icons";
import { ColorPicker, Spacem, message } from "antd";
import { useState, useRef } from "react";

export default function Home() {
    const [navBarColor, setNavBarColor] = useState("#ffffff");
    const [bodyColor, setBodyColor] = useState("#fffbf4");
    const [primaryColor, setPrimaryColor] = useState("#525252");
    const [secondaryColor, setSecondaryColor] = useState("#525252");
    const [buttonColor, setButtonColor] = useState("#ff6188");
    const [buttonTextColor, setButtonTextColor] = useState("#fffbf4");
    const [navLinkColor, setNavLinkColor] = useState("#525252");
    const [accentsColor, setAccentsColor] = useState("#ff6188");
    const [graphicsColor, setGraphicsColor] = useState("#ff6188");
    const [linksColor, setLinksColor] = useState("#ff6188");
    const [footerColor, setFooterColor] = useState("#000000");
    const [footerTextColor, setFooterTextColor] = useState("#ffffff");
    const sectionThreeRef = useRef(null);

    const scrollToSection = () => {
        if (sectionThreeRef.current) {
            sectionThreeRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    const colorChange = (color, object) => {
        switch (object) {
            case "nav":
                setNavBarColor(color);
                break;
            case "navLink":
                setNavLinkColor(color);
                break;
            case "body":
                setBodyColor(color);
                break;
            case "primary":
                setPrimaryColor(color);
                break;
            case "secondary":
                setSecondaryColor(color);
                break;
            case "links":
                setLinksColor(color);
                break;
            case "buttons":
                setButtonColor(color);
                break;
            case "buttonText":
                setButtonTextColor(color);
                break;
            case "graphics":
                setGraphicsColor(color);
                break;
            case "accents":
                setAccentsColor(color);
                break;
            case "footer":
                setFooterColor(color);
                break;
            case "footerContent":
                setFooterTextColor(color);
                break;
        }
    };

    return (
        <div className={styles.body} style={{ backgroundColor: bodyColor }}>
            <div
                className={styles.navBar}
                style={{ backgroundColor: navBarColor }}
            >
                <div className={styles.nameAndLogo}>
                    <img
                        src="/static/images/Logo.svg"
                        alt="logo"
                        className={styles.companyLogo}
                    />
                </div>
                <div
                    className={styles.navLinks}
                    style={{ color: navLinkColor }}
                >
                    <p className={styles.activeLink}>Home</p>
                    <p className={styles.link}>Services</p>
                    <p className={styles.link}>Contact</p>
                    <MenuOutlined className={styles.burger} />
                </div>
            </div>

            <div className={styles.sectionTwo}>
                <div className={styles.sectionContent}>
                    <div className={styles.sectionContentInnerDiv}>
                        <div className={styles.text}>
                            <p
                                className={styles.header}
                                style={{ color: primaryColor }}
                            >
                                The easiest way to generate color pallettes for
                                your web or mobile application.
                            </p>
                            <p
                                className={styles.tagLine}
                                style={{ color: secondaryColor }}
                            >
                                Pick colors, see what they look like and put
                                them in your CSS.{" "}
                                <span
                                    className={styles.linkBody}
                                    style={{ color: linksColor }}
                                >
                                    This
                                </span>{" "}
                                is an example of a link.
                            </p>
                        </div>
                        <button
                            className={styles.button}
                            style={{
                                backgroundColor: buttonColor,
                                color: buttonTextColor,
                            }}
                        >
                            sample button
                        </button>
                    </div>
                    <div>
                        <svg
                            width="481"
                            height="70vh"
                            viewBox="0 0 481 933"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={styles.graphic}
                        >
                            <path
                                d="M463.5 18H112.5C60.0329 18 17.5 60.533 17.5 113V113C17.5 165.467 60.033 208 112.5 208H240.5C363.659 208 463.5 307.84 463.5 431V834.75C463.5 879.347 427.347 915.5 382.75 915.5V915.5C338.153 915.5 302 879.347 302 834.75V502.25C302 423.688 238.313 360 159.75 360V360C81.1875 360 17.5 423.688 17.5 502.25V915.5"
                                stroke="#DB8E8E"
                                stroke-width="35"
                                stroke-linecap="round"
                                className={styles.wave}
                                style={{ stroke: graphicsColor }}
                            />
                        </svg>
                    </div>
                </div>
                <div>
                    <svg
                        width="300" height="227"
                        viewBox="0 0 340 227"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className = {styles.mobileGraphic}
                    >
                        <path
                            d="M7.5 7V177.75C7.5 200.808 26.1921 219.5 49.25 219.5H61.5C77.7924 219.5 91 206.292 91 190V183C91 170.574 80.9264 160.5 68.5 160.5V160.5C56.0736 160.5 46 150.426 46 138V54C46 28.0426 67.0426 7 93 7V7C118.957 7 140 28.0426 140 54V123C140 176.295 183.205 219.5 236.5 219.5H309C322.255 219.5 333 208.755 333 195.5V195.5C333 182.245 322.255 171.5 309 171.5H257C215.026 171.5 181 137.474 181 95.5V36.5C181 20.2076 194.208 7 210.5 7V7C226.792 7 240 20.2076 240 36.5V111.25C240 127.128 252.872 140 268.75 140V140C284.628 140 297.5 127.128 297.5 111.25V42.5C297.5 22.8939 313.394 7 333 7V7"
                            stroke="black"
                            stroke-width="14"
                            stroke-linecap="round"
                            style={{ stroke: graphicsColor }}
                        />
                    </svg>
                </div>
                <ArrowDownOutlined
                    className={styles.icon}
                    style={{ color: accentsColor }}
                    onClick={scrollToSection}
                />
            </div>

            <div className={styles.sectionThree} ref={sectionThreeRef}>
                <div className={styles.colorPickerDiv}>
                    <p className={styles.colorTitle}>Body</p>
                    <ColorPicker
                        defaultValue={bodyColor}
                        size="large"
                        showText
                        onChange={(color) => {
                            colorChange(color.toHexString(), "body");
                        }}
                    />
                </div>
                <div className={styles.colorPickerDiv}>
                    <p className={styles.colorTitle}>Navbar</p>
                    <ColorPicker
                        defaultValue={navBarColor}
                        size="large"
                        showText
                        onChange={(color) => {
                            colorChange(color.toHexString(), "nav");
                        }}
                    />
                </div>
                <div className={styles.colorPickerDiv}>
                    <p className={styles.colorTitle}>Nav Links</p>
                    <ColorPicker
                        defaultValue={navLinkColor}
                        size="large"
                        showText
                        onChange={(color) => {
                            colorChange(color.toHexString(), "navLink");
                        }}
                    />
                </div>
                <div className={styles.colorPickerDiv}>
                    <p className={styles.colorTitle}>Primary Text</p>
                    <ColorPicker
                        defaultValue={primaryColor}
                        size="large"
                        showText
                        onChange={(color) => {
                            colorChange(color.toHexString(), "primary");
                        }}
                    />
                </div>
                <div className={styles.colorPickerDiv}>
                    <p className={styles.colorTitle}>Secondary Text</p>
                    <ColorPicker
                        defaultValue={secondaryColor}
                        size="large"
                        showText
                        onChange={(color) => {
                            colorChange(color.toHexString(), "secondary");
                        }}
                    />
                </div>
                <div className={styles.colorPickerDiv}>
                    <p className={styles.colorTitle}>Links</p>
                    <ColorPicker
                        defaultValue={linksColor}
                        size="large"
                        showText
                        onChange={(color) => {
                            colorChange(color.toHexString(), "links");
                        }}
                    />
                </div>
                <div className={styles.colorPickerDiv}>
                    <p className={styles.colorTitle}>Buttons</p>
                    <ColorPicker
                        defaultValue={buttonColor}
                        size="large"
                        showText
                        onChange={(color) => {
                            colorChange(color.toHexString(), "buttons");
                        }}
                    />
                </div>
                <div className={styles.colorPickerDiv}>
                    <p className={styles.colorTitle}>Button Text</p>
                    <ColorPicker
                        defaultValue={buttonTextColor}
                        size="large"
                        showText
                        onChange={(color) => {
                            colorChange(color.toHexString(), "buttonText");
                        }}
                    />
                </div>
                <div className={styles.colorPickerDiv}>
                    <p className={styles.colorTitle}>Graphics</p>
                    <ColorPicker
                        defaultValue={graphicsColor}
                        size="large"
                        showText
                        onChange={(color) => {
                            colorChange(color.toHexString(), "graphics");
                        }}
                    />
                </div>
                <div className={styles.colorPickerDiv}>
                    <p className={styles.colorTitle}>Accents</p>
                    <ColorPicker
                        defaultValue={accentsColor}
                        size="large"
                        showText
                        onChange={(color) => {
                            colorChange(color.toHexString(), "accents");
                        }}
                    />
                </div>
                <div className={styles.colorPickerDiv}>
                    <p className={styles.colorTitle}>Footer</p>
                    <ColorPicker
                        defaultValue={footerColor}
                        size="large"
                        showText
                        onChange={(color) => {
                            colorChange(color.toHexString(), "footer");
                        }}
                    />
                </div>
                <div className={styles.colorPickerDiv}>
                    <p className={styles.colorTitle}>Footer Content</p>
                    <ColorPicker
                        defaultValue={footerTextColor}
                        size="large"
                        showText
                        onChange={(color) => {
                            colorChange(color.toHexString(), "footerContent");
                        }}
                    />
                </div>
            </div>

            <div
                className={styles.footer}
                style={{
                    backgroundColor: footerColor,
                }}
            >
                <p
                    className={styles.footerText}
                    style={{
                        color: footerTextColor,
                    }}
                >
                    Made by Ahmad Saad
                </p>
                <a
                    href="https://github.com/saadpocalypse"
                    target="_blank"
                    style={{
                        color: footerTextColor,
                    }}
                >
                    <GithubOutlined className={styles.githubIcon} />
                </a>
            </div>
        </div>
    );
}
