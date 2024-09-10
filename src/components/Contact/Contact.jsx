import styles from './Contact.module.css';

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <li className={styles.contact}>
      <p className={styles.text}>{name}: {number}</p>
      <button onClick={() => onDelete(id)} className={styles.button}>Delete</button>
    </li>
  );
};

export default Contact;
