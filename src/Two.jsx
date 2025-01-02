const Two = () => {
    let count=100
    function increment() {
        count=count+1;
        console.log(count);
        
         }
  return (
    <div>
        <h1>count the number {count}</h1>9
        <button onClick={increment}>increment</button>

    </div>
  )
}

export default Two


