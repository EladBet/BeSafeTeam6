import SearchIcon from '@mui/icons-material/Search';
import { useQuery } from '@tanstack/react-query';
import Select from 'react-select';
import { fetchAllBrands } from '../../services/api';
import styles from './Search.module.css';

export default function Search() {
  const { data } = useQuery({
    queryKey: ['fetchAllBrands'],
    queryFn: fetchAllBrands,
  });

  const options = data?.map((obj) => ({
    value: obj.id,
    label: obj.name,
  }));

  return (
    <div className={styles.parent}>
      <SearchIcon className={styles.searchIcon} />
      <Select
        options={options}
        styles={{
          container: (provided) => ({
            ...provided,
            flex: 1,
            zIndex: 40,
          }),
        }}
        placeholder="Search..."
      />
    </div>
  );
}
