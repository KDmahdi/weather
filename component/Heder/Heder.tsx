"use client";
import { useState } from "react";
import styles from "./heder.module.css";

// اینجا به تایپ‌اسکریپت فهموندیم که onSearch یه تابعه که یه متن (string) می‌گیره
export default function Heder({ onSearch }: { onSearch: (city: string) => void }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      onSearch(searchTerm);
    }
  };


  const handleKeyDown= (e: any) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoSection}>
        <span style={{ fontSize: "30px" }}>☁️</span>
        <span className={styles.logoText}>AuraWeather</span>
      </div>

      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search for a city... e.g., tehran,ir"
          className={styles.searchInput}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className={styles.searchButton} onClick={handleSearch}>
          🔍
        </button>
      </div>

      <div className={styles.rightSection}>
        <button className={styles.menuButton}>⋮⋮</button>
        <button className={styles.speakButton}>Speak Now</button>
      </div>
    </header>
  );
}