import { useQuery } from '@tanstack/react-query';
import Select, { components } from 'react-select';
import { fetchAllBrands } from '../../mockBrands.model';
import SearchIcon from '@mui/icons-material/Search';
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

  const CustomInput = (props) => (
    <div className={styles['custom-input-wrapper']}>
      <SearchIcon className={styles['search-icon']} />
      <components.Input {...props} />
    </div>
  );

  return (
    <Select
      options={options}
      components={{ Input: CustomInput }}
      styles={{
        container: (provided) => ({
          ...provided,
          flex: 1,
          zIndex: 9999,
        }),
        control: (provided) => ({
          ...provided,
          height: '34px', // Adjust height for better appearance
          minHeight: '34px',
          display: 'flex',
          alignItems: 'center',
          paddingLeft: '8px', // Spacing for the icon
          borderRadius: '6px', // Slightly rounded corners
        }),
        valueContainer: (provided) => ({
          ...provided,
          padding: '0 8px',
        }),
        input: (provided) => ({
          input: (provided) => ({
            ...provided,
            marginLeft: '32px', // Adjust input spacing to account for the icon
            marginTop: '3px', // Move text down slightly
          }), // Spacing between the icon and text
        }),
        menu: (provided) => ({
          ...provided,
          zIndex: 9999,
        }),
        indicatorSeparator: (provided) => ({
          ...provided,
          marginTop: '4px', // Ensure the separator is aligned within the box
          marginBottom: '4px',
          height: 'calc(100% - 8px)', // Keep it inside the box
        }),
        indicatorsContainer: (provided) => ({
          ...provided,
          marginRight: '4px', // Ensure proper spacing on the right
        }),
      }}
      placeholder="Search..."
    />
  );
}
