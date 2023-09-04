import { produce } from 'immer'
const configStore = (set, get, api) => ({
    storedParams: [],

    addParam: (data) => set(produce((draft) => {
      draft.configStore.storedParams.push(data);
    })),

    removeParam: (index) =>set(produce((draft) =>{
        draft.configStore.storedParams.splice(index, 1)
    })),

    patchParam: (index, field, value) => set(produce((draft)=> {
        draft.configStore.storedParams[index][field]= value
    }))
})

export default configStore