const prefix = 'cache'

const store = async (key: string, value: any) => {
  const item = {
    value,
    timeStamp: Date.now(),
  }

  try {
    localStorage.setItem(prefix + key, JSON.stringify(item))
  } catch (err) {
    console.log(err)
  }
}

const get = async (key: string) => {
  try {
    const value: any = localStorage.getItem(prefix + key)
    const item = JSON.parse(value)

    if (!item) return null

    return item.value
  } catch (err) {
    console.log(err)
  }
}

export default { store, get }
