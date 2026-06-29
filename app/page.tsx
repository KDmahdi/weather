import Heder from "@/component/Heder/Heder";
import styles from "./styled.module.css"
export default function Home() {
  const statsData = [
    { title: 'Wind', value: '24', unit: 'km/h', accentColor: '#C154F3' },
    { title: 'Humidity', value: '15', subValue: '75%', accentColor: 'rgba(255, 255, 255, 0.3)' },
    { title: 'Humidity', value: '16', subValue: '68%', accentColor: 'rgba(255, 255, 255, 0.3)' },
    { title: 'Air Quality', value: '75', subValue: '18', accentColor: '#4CA1F6' },
  ];
  return (
    <main className={styles.main1}>
    <Heder/>
      <div className={styles.weatherWrapper} style={{
        paddingLeft: "0px",
        paddingRight: "0px",
        width: "100%"
      }}>

        {/* بخش سمت چپ */}
        <div className={styles.leftSection} style={{
          marginLeft: "30px"
        }}>
          <h1 className={styles.cityName}>London</h1>
          <p className={styles.subtitle}>
            Search for a city weather details<br />
            and other data here.
          </p>
          <button className={styles.outlineBtn}>
            Search 1 <span className={styles.btnIcon}>+</span>
          </button>
        </div>


        {/* ترکیب دو تا کلاس با هم برای افکت شیشه‌ای */}
        <div className={`${styles.centerCard} ${styles.glassEffect}`}>
          <div className={styles.weatherImage}>
            <img src="/02-partly-cloudy.svg" alt="Weather condition" />
          </div>
          <div className={styles.temperatureBox}>
            <span className={styles.tempNumber}>18</span>
            <span className={styles.tempUnit}>°C</span>
          </div>
          <div className={styles.extraDetails}>
            20km/h
          </div>
        </div>

        {/* بخش سمت راست */}
        <div className={styles.rightSection} style={{
          marginRight: " 30px"
        }}>
          <h3 className={styles.featureTitle}>Jaw-dropping Feature</h3>
          <p className={styles.featureDesc}>
            Fall with new features, fastest and best,<br />
            access animations and glorious style<br />
            lost up to online and weather data.
          </p>
          <button className={styles.outlineBtn}>
            <span className={styles.btnIcon}>❖</span> Any feature
          </button>
        </div>

      </div>
      <div className={styles.container}>
        {statsData.map((stat, index) => (
          <div key={index} className={styles.glassBox}>
            {/* عنوان */}
            <h3 className={styles.title}>{stat.title}</h3>

            {/* بخش مقادیر عددی */}
            <div className={styles.valueContainer}>
              <div className={styles.mainValue}>{stat.value}</div>

              {stat.unit && <span className={styles.unit}>{stat.unit}</span>}

              {stat.subValue && (
                <div className={styles.subValue}>
                  {stat.subValue}
                </div>
              )}
            </div>

            {/* خط رنگی پایین باکس */}
            <div
              className={styles.accentBar}
              style={{ backgroundColor: stat.accentColor }}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
