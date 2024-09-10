import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import styles from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <input
      type="text"
      value={filter}
      onChange={(e) => dispatch(changeFilter(e.target.value))}
      className={styles.input}
      placeholder="Search contacts"
    />
  );
};

export default Filter;
