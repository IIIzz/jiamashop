export class TaoGrab {
  title: string
  icon: string
  remainTime: number
  imgUrl: string
}

export class TaoSale {
  title: string
  icon: string 
  decr: string
  imgUrl: string
}

export class TaoBriefProduct {
  title : string
  imgUrl : string
  price : string
}

export class TaoProduct {
  type: string
  imgUrl: string | null
  title : string
  country: string | null
  count : number | null
  price : string  | null
  attachs: string[] | null
  products : TaoBriefProduct[] | null | undefined
}