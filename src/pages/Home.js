import styles from '../styles/Home.module.css';

export default function Home(){
    return(
        <div className = {styles.navBar}>
            <div className = {styles.nameAndLogo}>
                <img src = "/logo.svg" alt = "logo" className = {styles.companyLogo}/>
                <p className = {styles.name}>HexGen</p>
            </div>
            <div className = {styles.navLinks}>
                <p className = {styles.activeLink}>Home</p>
                <p className = {styles.link}>Services</p>
                <p className = {styles.link}>Contact</p>
            </div>
        </div>
    )
};