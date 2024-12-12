interface Note {
    text: string;
    color: string;
    date: string;
    id: number
}
export const saveStorage = (newData: Note, name: string) => {
    const localStorageData = localStorage.getItem(name)
    const data = localStorageData === null ? [] : JSON.parse(localStorageData)
    data.push(newData)
    localStorage.setItem(name, JSON.stringify(data))
}
export const saveStorageSingle = (newData: Note, name: string) => {
    localStorage.setItem(name, JSON.stringify(newData))
}

export const fetchStorage = (name: string): Note[] | null => {
    return JSON.parse(localStorage.getItem(name) || 'null')
}

export const deleteStorage = (name: string): void => {
    localStorage.removeItem(name)
}

export const deleteStorageSingle = (id: number, name: string): void => {
   const filtered = fetchStorage(name)?.filter((note: Note) => note.id !== id) || []
   localStorage.setItem(name, JSON.stringify(filtered))
}