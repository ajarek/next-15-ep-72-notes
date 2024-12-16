'use client'

import { Button } from '@/components/ui/button'
import { deleteNoteId } from '@/lib/action'


const DeleteNote = ({ _id }: { _id: string }) => {
  return (
    
      <form
        action={async (formData) => { await deleteNoteId(formData) }}
        className=' '
      >
        <input
          type='hidden'
          name='_id'
          value={_id}
        />

        <Button
          size={'icon'}
          className='bg-transparent shadow-none hover:border-2 hover:border-red-500  hover:bg-transparent rounded-full p-0'
          type='submit'
        >
         ❌
        </Button>
      </form>
   
  )
}
export default DeleteNote