import { MyHeader } from "./styles";

interface Props {
  person: {
    name: string,
    img: string
  }
}

export function Header({ person }: Props) {
  return (
    <MyHeader>
      <div>
        <img src={person.img} alt="Pessoa do perfil" />
      </div>

      <h1>{person.name}</h1>
    </MyHeader>
  )
}