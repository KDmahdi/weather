"use client";
import styles from "./heder.module.css"
export default function Heder() {
  return (
    <header className={styles.header} style={{}} >
      {/* بخش اول: لوگو */}
      <div className={styles.logoSection} >
        <span style={{ fontSize: "30px" }}>☁️</span>
        <span className={styles.logoText}>AuraWeather</span>
      </div>

      {/* بخش دوم: باکس سرچ */}
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search for a city... e.g., Tokyo, London"
          className={styles.searchInput}
        />
        <button className={styles.searchButton}>
          🔍
        </button>
      </div>

      {/* بخش سوم: دکمه سمت راست */}
      <div className={styles.rightSection}>
        <button className={styles.menuButton}>⋮⋮</button>
        <button className={styles.speakButton}>Speak Now</button>
      </div>
    </header>
  )
}