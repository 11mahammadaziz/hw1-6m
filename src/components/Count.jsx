import useCountStore from '../store/useCountStore';

export const Count = () => {
    const count = useCountStore(s => s.count);
    const {
        incrementNum,
        decrementNum,
        incrementFiveNum,
        decrementFiveNum
    } = useCountStore();

    return (
        <div>
            <button onClick={() => incrementNum()}>+1</button>
            <button onClick={() => decrementNum()}>-1</button>
            <button onClick={() => incrementFiveNum()}>+5</button>
            <button onClick={() => decrementFiveNum()}>-5</button>
            <h2>
                {count}
            </h2>
        </div>
    )
}
