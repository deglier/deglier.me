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
    name: 'Jonathan Davis',
    email: 'jonathan-davis@gmail.com',
    message:
      'Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. Learned a few nice tips. Thanks!',
  },
}

export const useForm = create<FormState & FomActions>((set) => ({
  ...initialState,
  resetForm: () => set(initialState),
}))
