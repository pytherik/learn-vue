enum STATUS {
  HAPPY,
  NEUTRAL,
  SAD
}

interface Invitee {
  id: number,
  name: string,
  status: STATUS
}

export {type Invitee, STATUS};