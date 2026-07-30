"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/FloatingChat.module.css";
import WhatsApp from "./WhatsApp";


export default function FloatingChat() {
  return (
    <div className={styles.wrapper}>
      {/* Message Box */}
      <div className={styles.card}>
        <div className={styles.header}>
          <Image  
             src="/dark/assets/imgs/icon-fav.png"
            alt="logo"
            width={63}
            height={57}
          />

          <div>
            <h4>
              Hey, we've noticed you're interested <span>🤗</span>
            </h4>

            <p>Hi! How can I assist you?</p>

            <small>W3web Team</small>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className={styles.buttons}>
        <Link
          href="https://app.memate.com.au/requestdemo"
          target="_blank"
          className={styles.btn}
        >
          📅 Get In Touch
        </Link>

        <button className={styles.btn}>
          💬 Chat with us
        </button>
      </div>

      {/* Bottom Icons */}
      <div className={styles.icons}>
        <a
          href="https://wa.me/9814930250"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.whatsapp}
        >
            <WhatsApp />
        </a>

     
      </div>
    </div>
  );
}