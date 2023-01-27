// async function getData() {
//     const res = await fetch('https://jsonplaceholder.typicode.com/todos');
//     // The return value is *not* serialized
//     // You can return Date, Map, Set, etc.
  
//     // Recommendation: handle errors
//     if (!res.ok) {
//       // This will activate the closest `error.js` Error Boundary
//       throw new Error('Failed to fetch data');
//     }
  
//     return res.json();
//   }
// export default async function TestAgain() {
//     const data = await getData();
//     let arr=[...data]
//     // console.log(arr)
//     return <main>
//         {arr.map(e=>{
//           return <div>{e.title}</div>
//         })}

//     </main>;
//   }