import { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

import { FilterMaterial } from '@/interfaces/redux';
import { filterRobots } from '@/redux/robots/robots.actions';

import * as styles from './FilterGroupStyles';

const FilterGroup = () => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState<FilterMaterial>('all');

    const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        dispatch(filterRobots(e.target.value, filter));
    };
    const onFilterChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setFilter(e.target.value as FilterMaterial);
        dispatch(filterRobots(search, e.target.value as FilterMaterial));
    };

    return (
        <div css={styles.container}>
            <div css={styles.inputContainer}>
                <input
                    type='search'
                    placeholder='Search by name'
                    value={search}
                    onChange={onSearch}
                />
            </div>
            <div css={styles.selectContainer}>
                <select name='material' value={filter} onChange={onFilterChange}>
                    {filterMaterials.map((material: FilterMaterial) => (
                        <option key={material} value={material}>
                            {material}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

const filterMaterials: FilterMaterial[] = [
    'all',
    'Soft',
    'Plastic',
    'Fresh',
    'Steel',
    'Rubber',
    'Wooden',
    'Granite',
    'Concrete',
    'Cotton',
    'Metal',
    'Frozen'
];

export default FilterGroup;
