import css from "./Home.module.css"


export default function Home() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>
        Phonebook manager
      </h1>
    </div>
  );
}