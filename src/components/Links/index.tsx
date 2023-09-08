import { MyMain } from "./styles"
import { LinkedinLogo, InstagramLogo, TwitterLogo } from "@phosphor-icons/react";

interface Link {
  id: number,
  link: string,
  social: string
}

interface Props {
  link: Link[]
}

export function Links({ link }: Props) {
  return (
    <MyMain>
      {
        link.map(line => {
          if (line.social === 'LinkedIn') {
            return (
              <a key={line.id} href={line.link} target="_blank">
                <LinkedinLogo size={32} />
                {line.social}
              </a>
            )
          }

          if (line.social === 'Instagram') {
            return (
              <a key={line.id} href={line.link} target="_blank">
                <InstagramLogo size={32} />
                {line.social}
              </a>
            )
          }

          if (line.social === 'Twitter') {
            return (
              <a key={line.id} href={line.link} target="_blank">
                <TwitterLogo size={32} />
                {line.social}
              </a>
            )
          }
        })
      }
    </MyMain>
  )
}