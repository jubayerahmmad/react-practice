// export default function Todo({ task }) {
//   return <li>Task: {task}</li>;
// }

//conditional rendering opt-1(if-else)
// export default function Todo({ task, isDone }) {
//   if (isDone) {
//     return <li>Finished: {task}</li>;
//   } else {
//     return <li>Practice: {task}</li>;
//   }
// }

//conditional rendering opt-2
// export default function Todo({ task, isDone }) {
//   if (isDone) {
//     return <li>Finished: {task}</li>;
//   }
//   return <li>Practice: {task}</li>;
// }

//conditional rendering opt-3(ternary operator)
// export default function Todo({ task, isDone }) {
//   return (
//     <>
//       <li>
//         {isDone ? "Finished" : "Practice More"}: {task}
//       </li>
//     </>
//   );
// }

//conditional rendering opt-4(ternary) &&AND operator
export default function Todo({ task, isDone }) {
  return (
    <li>
      {isDone && "Finished:"} {task}
    </li>
  );
}
