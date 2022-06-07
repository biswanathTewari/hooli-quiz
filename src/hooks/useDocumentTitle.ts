import React from 'react'

const useDocumentTitle = (title: string) => {
  const [docTitle, setDocTitle] = React.useState<string>(title)

  React.useEffect(() => {
    document.title = docTitle
  }, [docTitle])

  return [docTitle, setDocTitle]
}

export { useDocumentTitle }
