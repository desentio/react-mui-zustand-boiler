import {produce} from 'immer'

const filterStore = (set, get) => ({
    data: [
        {
            parameter: "",
            operator: "",
            text: ""
        }
    ],
    filter: {},

    addDataFilter: () => set(produce(draft => {
        const filter = {
            parameter: "",
            operator: "",
            text: ""
        }
        draft.filterStore.data.push(filter)
        draft.filterStore.filter = filter
    })),

    removeDataFilter: (idx) => set(produce(draft => {
        if(!draft.filterStore.data[idx]) return
        draft.filterStore.data.splice(idx, 1)
        console.log("REMOVE INDEX", idx, draft.filterStore.data)
    })),

    setValueFilter: (val, key, idx) => set(produce(draft => {
        draft.filterStore.filter[key] = val

        if(!draft.filterStore.data[idx]) return
            draft.filterStore.data[idx][key] = val
    })),
})

export default filterStore