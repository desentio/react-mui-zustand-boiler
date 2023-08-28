

import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import staticStore from './staticStore'
import blogStore from './blogStore'
import filterStore from './filterStore'

const useStore = create(
  devtools(
    (set, get, api) => ({
      staticStore: { ...staticStore(set, get, api) },
      blogStore: { ...blogStore(set, get, api) },
      filterStore: { ...filterStore(set, get) },
    })
  )
)

export default useStore
