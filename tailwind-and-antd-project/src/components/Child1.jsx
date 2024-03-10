import { useSelector } from 'react-redux';
import SubChild1 from './SubChild1';

const Child1 = () => {
    const value = useSelector((state) => state.count.value);
    return (
        <div>Child1 {value}
            <SubChild1 />
        </div>
    )
}

export default Child1