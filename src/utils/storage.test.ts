import Storage from './storage'

describe('test local storage util functions', () => {
  it('tests successful storage fetch', async () => {
    // Arrange
    const key = 'test'
    const value = 'privateKeybizan'

    // Act
    await Storage.store(key, value)

    // Assert
    expect(await Storage.get(key)).toEqual(value)
  })

  it('tests unsuccessful storage fetch', async () => {
    // Arrange
    const key = 'test'
    const value = 'privateKeybizan'

    // Act
    await Storage.store(key, value)

    // Assert
    expect(await Storage.get('test2')).toEqual(null)
  })
})
