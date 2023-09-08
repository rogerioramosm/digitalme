import { Header } from "./components/Header"
import { Links } from "./components/Links"
import img from '../public/assets/person.png'

interface Link {
  id: number,
  social: string,
  link: string
}

interface Props {
  name: string,
  img: string,
  link: Link[]
}

const person: Props = {
  name: "Mr. Doguinho da Silva Santos",
  img: img,
  link: [
    {
      id: 1,
      social: "LinkedIn",
      link: "https://linkedin.com"
    },
    {
      id: 2,
      social: "Instagram",
      link: "https://instagram.com"
    },
    {
      id: 3,
      social: "Twitter",
      link: "https://twitter.com"
    },
  ]
}

export function App() {
  return (
    <>
      <Header person={person} />

      <Links link={person.link} />
    </>
  )
}