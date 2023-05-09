import React, { useState } from "react";
import Head from "next/head";
import { Inter } from "next/font/google";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";

import TimePicker from "@/components/TimePicker";

import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

dayjs.extend(localizedFormat);

export default function Home() {
  const [dateAndTime, setDateAndTime] = useState(dayjs().format());

  const handleTimeChange = (updatedDateAndTime) => {
    setDateAndTime(updatedDateAndTime);
  };

  return (
    <>
      <Head>
        <title>React Time Picker</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <p>Selected date and time: {dayjs(dateAndTime).format("L LT")}</p>

        <TimePicker dateAndTime={dateAndTime} onChange={handleTimeChange} />
      </main>
    </>
  );
}
