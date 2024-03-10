import { useSelector } from 'react-redux';
import SubChild2 from './SubChild2';

const Child2 = () => {
    const value = useSelector((state) => state.count.value);
    return (
        <div>Child2 {value}
            <SubChild2 />
        </div>
    )
}

export default Child2