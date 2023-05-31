'use client'

import { ChangeEvent } from 'react'

import { useForm } from '@/hooks/useForm'

import Button from '@/components/ui/Button'

export default function ContactForm() {
  const { data } = useForm()
  const updateForm = (
    key: string,
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ) => {
    useForm.setState({
      data: {
        ...data,
        [key]: e.target.value,
      },
    })
  }
  return (
    <form className="mx-auto max-w-sm space-y-5">
      <fieldset className="flex flex-col space-y-2">
        <label htmlFor="name">_name:</label>
        <input
          className="h-10 rounded-lg border-primary-100 bg-primary-820 px-4 placeholder:text-primary-300 placeholder-shown:border-primary-500 hocus:border-primary-100 focus:ring-2 focus:ring-primary-100/30"
          id="name"
          type="text"
          placeholder="Jhon Doe"
          value={data.name}
          onChange={(e) => updateForm('name', e)}
        />
      </fieldset>
      <fieldset className="flex flex-col space-y-2">
        <label htmlFor="email">_email:</label>
        <input
          className="h-10 rounded-lg border-primary-100 bg-primary-820 px-4 placeholder:text-primary-300 placeholder-shown:border-primary-500 hocus:border-primary-100 focus:ring-2 focus:ring-primary-100/30"
          id="email"
          type="text"
          placeholder="example@email.com"
          value={data.email}
          onChange={(e) => updateForm('email', e)}
        />
      </fieldset>
      <fieldset className="flex flex-col space-y-2">
        <label htmlFor="message">_message:</label>
        <textarea
          className="rounded-lg border-primary-100 bg-primary-820 p-4 scrollbar-thin placeholder:text-primary-300 placeholder-shown:border-primary-500 hocus:border-primary-100 focus:ring-2 focus:ring-primary-100/30"
          id="message"
          placeholder="say something..."
          rows={4}
          value={data.message}
          onChange={(e) => updateForm('message', e)}
        />
      </fieldset>
      <Button type="submit">enviar-mensagem</Button>
    </form>
  )
}
