"use client";
import Image from "next/image";
import styles from "./Avatar.module.css";

export default function Avatar({src, alt, size = 40}:{src?:string; alt?:string; size?:number}){
  const srcToUse = src || "/images/avatar-default.png";
  return (
    <div className={styles.wrapper} style={{width:size, height:size}}>
      <Image src={srcToUse} alt={alt || "avatar"} width={size} height={size} className={styles.img} />
    </div>
  );
}