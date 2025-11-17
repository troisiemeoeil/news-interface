
import { create } from "zustand";

const useStore = create((set) => ({
    category: "general",
    changeCategory: (newCategory) => set({category: newCategory})


}));

export default useStore;