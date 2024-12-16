'use server'

import connectToDb from './connectToDb'
import { User, UserWithoutId, Notes } from './models'
import { revalidatePath } from 'next/cache'
import bcrypt from 'bcryptjs'
import { redirect } from 'next/navigation'
import type { Notes as NotesType } from './models'

export const addUser = async (formData: UserWithoutId) => {
  const { username, email, password, img, isAdmin } = formData
  const hashedPassword = await bcrypt.hash(password, 5)
  try {
    connectToDb()
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
      isAdmin,
    })
    await newUser.save()
    console.log('saved' + newUser)
    revalidatePath('/')
  } catch (err) {
    console.log(err)
  }
}

export const deleteUser = async (formData: FormData) => {
  const id = formData.get('_id')

  try {
    await connectToDb()
    await User.findOneAndDelete({ _id: id })
    revalidatePath('/dashboard')
    console.log({ message: `Deleted user ${id}` })
    return { message: `Deleted user ${id}` }
  } catch (err) {
    return { message: 'Failed to delete user'+err }
  }
}

export const updateUser = async (formData: FormData) => {
  const _id = formData.get('_id')
  const username = formData.get('username')
  const email = formData.get('email')
  const img = formData.get('img')
  const isAdmin = formData.get('isAdmin')

  try {
    await connectToDb()
    await User.findOneAndUpdate(
      { _id: _id },
      {
        username: username,
        email: email,
        img: img,
        isAdmin: isAdmin === 'true' ? Boolean(true) : Boolean(false),
      }
    )
    revalidatePath(`/dashboard`)

    return { message: `Updated user ${_id}` }
  } catch (err) {
    return { message: 'Failed to update to db'+err }
  } finally {
    redirect('/')
  }
}

export const addNote = async (data: NotesType) => {
  console.log(data)
  try {
    await connectToDb()
    const newNote = new Notes(data)
    await newNote.save()
    revalidatePath('/dashboard')
    console.log('Note saved:', newNote)
  } catch (err) {
    console.error('Failed to save note:', err)
  }
}

export const getAllNotes = async () => {
  try {
    await connectToDb()
    const notes = await Notes.find({}).lean()
    return notes
  } catch (err) {
    console.log(err)
  }
}

export const deleteNoteId = async (formData: FormData) => {
  const id = formData.get('_id')

  try {
    await connectToDb()
    await Notes.findOneAndDelete({ _id: id })
    revalidatePath('/dashboard')
    return { message: `Deleted record ${id}` }
  } catch (err) {
    return { message: 'Failed to delete record'+err }
  }
}