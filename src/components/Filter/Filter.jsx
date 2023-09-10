import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';
import styles from './Filter.module.css';

function Filter() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <label className={styles.label}>
      Find contacts by name
      <input className={styles.input} type="text" value={filter} onChange={handleChange} />
    </label>
  );
}

export default Filter;


// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { setFilter } from 'redux/filterSlice';

// function Filter() {
//   const filter = useSelector((state) => state.filter);
//   const dispatch = useDispatch();

//   const handleChange = (e) => {
//     dispatch(setFilter(e.target.value));
//   };

//   return (
//     <label>
//       Find contacts by name
//       <input type="text" value={filter} onChange={handleChange} />
//     </label>
//   );
// }

// export default Filter;
