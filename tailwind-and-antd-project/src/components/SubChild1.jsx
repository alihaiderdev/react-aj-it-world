import { useSelector } from 'react-redux';

const SubChild1 = () => {
    const value = useSelector((state) => state.count.value);
    return (
        <div>SubChild1 {value}</div>
    )
}

export default SubChild1