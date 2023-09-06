import { MyMain } from "./styles"

interface Link {
  id: number,
  link: string,
  text: string
}

interface Props {
  link: Link[]
}

export function Links({ link }: Props) {
  return (
    <MyMain>
      {
        link.map(line => {
          return (
            <a key={line.id} href={line.link} target="_blank">{line.text}</a>
          )
        })
      }
    </MyMain>
  )
}