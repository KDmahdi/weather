"use client";
import { useState, useEffect } from 'react';
import Heder from "@/component/Heder/Heder";
import styles from "./styled.module.css";

export default function Home() {
  const [weatherData, setWeatherData] = useState<any>(null);

  const fetchWeather = async (city: string) => {
    try {
      const res = await fetch(`/api/weather?city=${city}`);
      const data = await res.json();

      console.log("API Response:", data);

      if (data?.success && data?.response?.[0]) {
        // تغییرات اصلی اینجاست: استفاده از periods[0] جای ob
        const currentPeriod = data.response[0]?.periods?.[0];
        const place = data.response[0]?.place;

        setWeatherData({
          city: place?.name || city,
          temp: currentPeriod?.tempC || '--',
          // اسم دقیق متغیر باد رو از روی عکست برداشتم
          wind: currentPeriod?.windSpeedKPH || '--',
          humidity: currentPeriod?.humidity || '--',
          // وضعیت هوا (مثل Mostly Sunny)
          condition: currentPeriod?.weather || '--'
        });
      } else {
        alert("شهر پیدا نشد یا اسمش رو اشتباه تایپ کردی!");
      }
    } catch (error) {
      console.error("خطا در دریافت اطلاعات:", error);
    }
  };

  useEffect(() => {
    // همون لندن به عنوان پیش‌فرض بمونه
    fetchWeather("london,uk");
  }, []);

  const statsData = [
    { title: 'Wind', value: weatherData?.wind || '--', unit: 'km/h', accentColor: '#C154F3' },
    { title: 'Humidity', value: weatherData?.humidity || '--', subValue: '%', accentColor: 'rgba(255, 255, 255, 0.3)' },
    // { title: 'Condition', value: weatherData?.condition || '--', subValue: '', accentColor: 'rgba(255, 255, 255, 0.3)' },
    { title: 'Air Quality', value: '75', subValue: '18', accentColor: '#4CA1F6' },
  ];

  return (
    <main className={styles.main1}>
      <Heder onSearch={fetchWeather} />

      <div className={styles.weatherWrapper} style={{ paddingLeft: "0px", paddingRight: "0px", width: "100%" }}>
        <div className={styles.leftSection} style={{ marginLeft: "30px" }}>
          <h1 className={styles.cityName}>{weatherData ? weatherData.city : "Loading..."}</h1>
          <p className={styles.subtitle}>
            Search for a city weather details<br />
            and other data here.
          </p>
        </div>

        <div className={`${styles.centerCard} ${styles.glassEffect}`}>
          <div className={styles.weatherImage}>
            <img src="/02-partly-cloudy.svg" alt="Weather condition" />
          </div>
          <div className={styles.temperatureBox}>
            <span className={styles.tempNumber}>{weatherData?.temp || "--"}</span>
            <span className={styles.tempUnit}>°C</span>
          </div>
          <div className={styles.extraDetails}>
            {weatherData?.wind || "--"} km/h
          </div>
        </div>

        <div className={styles.rightSection} style={{ marginRight: "30px" }}>
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
            <h3 className={styles.title}>{stat.title}</h3>
            <div className={styles.valueContainer}>
              <div className={styles.mainValue}>{stat.value}</div>
              {stat.unit && <span className={styles.unit}>{stat.unit}</span>}
              {stat.subValue && <div className={styles.subValue}>{stat.subValue}</div>}
            </div>
            <div className={styles.accentBar} style={{ backgroundColor: stat.accentColor }} />
          </div>
        ))}
      </div>
    </main>
  );
}