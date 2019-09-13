interface IData {
  id: number;
  title: string;
  author: string;
  price: number;
  img: string;
}

export default class BookStoreService {
  public data: IData[] = [
    {
      id: 1,
      title: 'Production-Ready Microservices',
      author: 'Susan J. Fowler',
      price: 32,
      img: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg',
    },
    {
      id: 2,
      title: 'Release It!',
      author: 'Michael T. Nygard',
      price: 45,
      img: 'https://images-na.ssl-images-amazon.com/images/I/419zAwJJH4L._SX415_BO1,204,203,200_.jpg',
    },
  ];

  public getBooks(): Promise<IData[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(this.data), 400);
    });
  }
}
