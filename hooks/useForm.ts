import { create } from 'zustand'

type FormState = {
  data: {
    name: string
    email: string
    message: string
  }
}

interface FomActions {
  resetForm: () => void
}

const initialState: FormState = {
  data: {
    name: '',
    email: '',
    message: '',
  },
}

export const useForm = create<FormState & FomActions>((set) => ({
  ...initialState,
  resetForm: () => set(initialState),
}))
