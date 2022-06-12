import { db } from '../utils'
import {
  collection,
  query,
  getDocs,
  doc,
  getDoc,
  DocumentSnapshot,
  DocumentData,
} from 'firebase/firestore'

export interface Question {
  id: string
  question: string
  answer: string
  A: string
  B: string
  C: string
  D: string
}

export interface Quiz {
  info: {
    id: string
    image: string
    title: string
    questionsCount: string
    description: string
    time: string
  }
  questions: Array<Question>
}

export interface QuizReq {
  id: string
}

export const getQuizService = async ({ id }: QuizReq): Promise<Quiz> => {
  // get meta data
  const docRef = doc(db, 'categories', id)
  const docSnapshot: DocumentSnapshot<DocumentData> = await getDoc(docRef)
  const data: DocumentData | undefined | Quiz = docSnapshot.data()

  // get questions collection
  const q = query(
    collection(db, `categories`, 'K8ynKpXliXOxuMRJEwc4', 'questions'),
  )
  const qureySnapshot = await getDocs(q)
  const questions: Array<Question> = []
  qureySnapshot.docs.forEach(doc => {
    questions.push({
      id: doc.id,
      question: doc.data().question,
      answer: doc.data().answer,
      A: doc.data().A,
      B: doc.data().B,
      C: doc.data().C,
      D: doc.data().D,
    })
  })

  return {
    info: {
      id: docSnapshot.id,
      image: data?.image,
      title: data?.title,
      questionsCount: data?.questionsCount,
      description: data?.description,
      time: data?.time,
    },
    questions: questions,
  }
}
