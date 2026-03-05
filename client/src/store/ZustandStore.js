import { create } from "zustand"

export const useSorte = create((set) => ({

    movies: [],
    isLoading: false,
    error: null,
    searchQuery: "",
    seatSelections: {},

    setMovies: (movies) => set({ movies }),
    setSearchQuery: (value) => set({ searchQuery: value }),
    setLoading: (boolean) => set({ isLoading: boolean }),
    setError: (message) => set({ error: message }),
    selectSeat: (movieId, seatNumber) => set((state) => {
        const updatedSelections = {
            ...state.seatSelections,
            [movieId]: seatNumber
        }
        localStorage.setItem("movieSeats", JSON.stringify(updatedSelections))
        return { seatSelections: updatedSelections }
    }),
    loadSeatSelectionsFromStorage: () => {
        const stored = localStorage.getItem("movieSeats");
        if (stored) {
            try {
                const parsed = JSON.parse(stored)
                set({ seatSelections: parsed })
            } catch (error) {
                console.error(error.message)
            }
        }
    }


}))