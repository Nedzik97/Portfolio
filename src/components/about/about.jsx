import styles from "./about.module.scss";

export const About = () => {
  return (
    <div>
      <h2>Hi, I'm Valerii Nedozym</h2>
      <p>
        A <span>Frontend Developer</span>. I Help Sturtups <span>Launch</span>{" "}
        and <span>Grow</span> Their Products. I like designing user-friendly and
        visually pleasing interfaces while also ensuring performance and
        accessibility.
      </p>
      <div className={styles.aboutDowload}>
        <a href="/public/123.jpg" download className={styles.buttonDowload}>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="24"
            viewBox="0 0 30 32"
          >
            <title>download</title>
            <path
              fill="#92d79a"
              d="M0.941 27.922h28.235v3.137h-28.235v-3.137zM16.627 18.78l9.523-9.525 2.218 2.218-13.31 13.311-13.31-13.31 2.218-2.22 9.523 9.522v-17.522h3.137v17.525z"
            ></path>
          </svg>
          <span className={styles.buttonDowloadText}>Dowload CV</span>
        </a>
      </div>
    </div>
  );
};
