import SearchIcon from '@mui/icons-material/Search';
import { useQuery } from '@tanstack/react-query';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';
import { fetchAllBrands } from '../../services/api';
import styles from './Search.module.css';

export default function Search() {
  const navigate = useNavigate();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['fetchAllBrands'],
    queryFn: fetchAllBrands,
  });

  const options = data?.map((brand) => ({
    value: brand._id,
    label: brand.name,
  }));
  const handleChange = (selectedOption) => {
    if (selectedOption) {
      const url = `/brands/${selectedOption.value}`;
      navigate(url);
    }
  };
  // Render loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Render error state
  if (isError) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div className={styles.parent}>
      <SearchIcon className={styles.searchIcon} />
      <Select
        options={options}
        onChange={handleChange}
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
