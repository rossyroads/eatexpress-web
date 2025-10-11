import CardChoice from '@/components/card';

function App() {
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center">
        <h1 className="text-3xl font-bold text-center">Welcome to p6dash!</h1>
        <div className="flex justify-evenly items-center h-72">
          <CardChoice
            pathToImage="/foodphotos/chinese_red_pork.jpg"
            pathToNavigate={'c'}
            buttonText={"I'm ordering"}
          />
          <CardChoice
            pathToImage="/foodphotos/cake_making.jpg"
            pathToNavigate={'r'}
            buttonText={"I'm cooking"}
          />
        </div>
      </div>
    </>
  );
}

export default App;
