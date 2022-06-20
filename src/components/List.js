import Cat from "./Cat";

const List = () => {
  const catList = [
    {
      image:
        "https://i.pinimg.com/originals/af/37/54/af3754293e36740068bb6983aeb941d0.jpg",
      name: "catty",
      age: "5 months",
    },
    {
      image: "https://pbs.twimg.com/media/Ez-AaifWYAIiFSQ.jpg",
      name: "Nono",
      age: "2 months",
    },
    {
      image:
        "https://sowarhazina.com/wp-content/uploads/2019/09/%20%D9%82%D8%B7%D8%B7%20%D8%B5%D8%BA%D9%8A%D8%B1%D8%A9%20%D9%83%D9%8A%D9%88%D8%AA.jpg",
      name: "Meow",
      age: "1 months",
    },
    {
      image:
        "https://image.winudf.com/v2/image1/Y29tLmFwcGlubWludXRlcy5hbmRyb2lkNWU5YTJjOTg5NDY1Nl9zY3JlZW5fMF8xNTkxMjk4MTU5XzA2Mw/screen-0.jpg?h=500&fakeurl=1&type=.jpg",
      name: "Angry!",
      age: "1 Year",
    },
  ];

  const cats = catList.map((cat) => {
    return <Cat image={cat.image} name={cat.name} age={cat.age} />;
  });

  return <div className="cat-container">{cats}</div>;
};

export default List;
