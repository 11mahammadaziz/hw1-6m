import { create } from 'zustand';

const useCountStore = create((set) => ({
    count: 0,
    
    incrementNum: () => {
        set((state) => ({
            count: state.count < 15 ? state.count + 1 : state.count
        }));
    },

    decrementNum: () => {
        set((state) => ({
            count: state.count > 0 ? state.count - 1 : state.count
        }));
    },

    incrementFiveNum: () => {
        set((state) => ({
            count: state.count + 5 <= 15 ? state.count + 5 : 15
        }));
    },

    decrementFiveNum: () => {
        set((state) => ({
            count: state.count - 5 >= 0 ? state.count - 5 : 0
        }));
    },
}));

export default useCountStore;
