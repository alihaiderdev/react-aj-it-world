import { useSelector } from 'react-redux';

const SubChild2 = () => {
    const value = useSelector((state) => state.count.value);
    return (
        <div>SubChild2 {value}
        </div>
    )
}

export default SubChild2