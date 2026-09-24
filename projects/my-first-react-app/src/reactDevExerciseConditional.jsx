
// exercise 1

// function Item({ name, isPacked }) {
//     return (
//         <li className="item">
//             {isPacked ? name + " ✅" : name + " ❌"}
//         </li>
//     );
// }

// export default function PackingList() {
//     return (
//         <section>
//             <h1>Sally Ride's Packing List</h1>
//             <ul>
//                 <Item
//                     isPacked={true}
//                     name="Space suit"
//                 />
//                 <Item
//                     isPacked={true}
//                     name="Helmet with a golden leaf"
//                 />
//                 <Item
//                     isPacked={false}
//                     name="Photo of Tam"
//                 />
//             </ul>
//         </section>
//     );
// }



function Item1({ name1, importance }) {
  return (
    <li className="item">
      {name1}
      {importance > 0 && <i> (Importance: {importance})</i>}
    </li>
  );
}

export default function PackingList1() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item1 importance={9} name1="Space suit" />
        <Item1 importance={0} name1="Helmet with a golden leaf" />
        <Item1 importance={6} name1="Photo of Tam" />
      </ul>
    </section>
  );
}


