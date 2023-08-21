"use client";
import classNames from "classnames";
import { useEffect } from "react";

import styles from "./styles.module.css";

const Applique = () => {
  const addConstance = (e: any) => {
    console.log("move");
    Object.assign(document.documentElement, {
      style: `
          --move-y: ${-(e.clientX - window.innerWidth / 2) * 0.005}deg;
          --move-x: ${(e.clientY - window.innerHeight / 2) * 0.005}deg;
          `,
    });
  };
  useEffect(() => {
    document.addEventListener("mousemove", addConstance);
    return () => document.removeEventListener("mousemove", addConstance);
  }, []);
  return (
    <section className={styles.layers}>
      <div className={styles.layers__container}>
        <div
          className={classNames(styles.layers_item, styles.laye_1)}
          style={{
            backgroundImage: "url('img/demo/bg.png')",
          }}
        ></div>
        <div
          className={classNames(styles.layers_item, styles.laye_2)}
          style={{ backgroundImage: "url('img/demo/glow.png')" }}
        ></div>
        <div className='layers_item laye-canvas'>
          <canvas className='rain'></canvas>
        </div>
        <div
          className={classNames(styles.layers_item, styles.laye_3)}
          style={{ backgroundImage: "url('img/demo/glow-big.png')" }}
        ></div>
        <div
          className={classNames(styles.layers_item, styles.laye_4)}
          style={{ backgroundImage: "url('img/demo/grass.png')" }}
        ></div>
        <div
          className={classNames(styles.layers_item, styles.laye_5)}
          style={{ backgroundImage: "url('img/demo/hero.png')" }}
        ></div>
        <div
          className={classNames(styles.layers_item, styles.laye_6)}
          style={{ backgroundImage: "url('img/demo/foliage01.png')" }}
        ></div>
        <div
          className={classNames(styles.layers_item, styles.laye_7)}
          style={{ backgroundImage: "url('img/demo/foliage.png')" }}
        ></div>
      </div>
    </section>
  );
};

export default Applique;
