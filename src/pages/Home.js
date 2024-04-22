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
                        src="/logo.svg"
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
                                    Here
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
