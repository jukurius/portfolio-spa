"use client";
import styles from "@/assets/scss/components/hobbies.module.scss";
import bass from "@/assets/images/hobbies/bass.jpg";
import drums from "@/assets/images/hobbies/drums.jpg";
import coding from "@/assets/images/hobbies/coding.jpg";
import gym from "@/assets/images/hobbies/gym.jpg";
import snowboarding from "@/assets/images/hobbies/snowboarding.jpg";
import Image from "next/image";

const array = [
  {
    img: bass,
    alt: "Bass guitar",
    title: "Playing bass",
    text: "I play the bass primarily for my own enjoyment. I started playing the bass in 2023.",
  },
  {
    img: coding,
    alt: "Coding",
    title: "Programming",
    text: "In my free time, I enjoy coding and learning new programming techniques. I find satisfaction in solving problems within the realm of programming.",
  },
  {
    img: gym,
    alt: "Kettlebell",
    title: "Workout",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ea deleniti aperiam ab beatae magni, asperiores cumque repellendus enim debitis?",
  },
  {
    img: drums,
    alt: "Drumset",
    title: "Playing drums",
    text: "I began playing the drums in 2017. These days, I find myself playing less, both on the drums and bass, mostly for my own pleasure.",
  },
  {
    img: snowboarding,
    alt: "Snowboarding",
    title: "Snowboarding",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ea deleniti aperiam ab beatae magni, asperiores cumque repellendus enim debitis?",
  },
];

function generateUniqueKey(): string {
  const dateStr = Date.now().toString(36);

  const randomStr = Math.random().toString(36).substring(2, 8);

  return `${dateStr}-${randomStr}`;
}

const renderGroups = (array: any) => {
  const itemsPerGroup = 3;
  const sliderItems = [];

  for (let i = 0; i < array.length; i += itemsPerGroup) {
    const group = array.slice(i, i + itemsPerGroup);
    const groupDiv = (
      <div key={generateUniqueKey()} className={styles.hobbies_grid_group}>
        {group.map((item: any, index: number) => (
          <div key={index} className={styles.hobbies_grid_item}>
            <Image src={item.img} alt={item.alt} width={1920} height={1080} />{" "}
            <div className={styles.text_content}>
              <h3>{item?.title}</h3>
              <p>{item?.text}</p>
            </div>
          </div>
        ))}
      </div>
    );
    sliderItems.push(groupDiv);
  }
  return sliderItems;
};

const Hobbies = () => {
  return (
    <section className={styles.hobbies_wrapper}>
      <div className={styles.title_section}>
        <h2>My freetime activities</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
          veniam dignissimos perferendis voluptatum adipisci earum neque, iure
          libero aut minus?
        </p>
      </div>

      <div className={styles.hobbies_grid_container}>
        {/* {array.map((item, index) => (
          <div className={styles.hobbies_grid_item}>
            <Image
              key={index}
              src={item.img}
              alt={item.alt}
              width={1920}
              height={1080}
            />
          </div>
        ))} */}
        {renderGroups(array)}
      </div>
    </section>
  );
};

export default Hobbies;
