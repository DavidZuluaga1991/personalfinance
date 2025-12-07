// "use client";
// import styled from "styled-components";

// const Overlay = styled.div`
//   position: fixed;
//   inset: 0;
//   background: rgba(0,0,0,0.4);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   z-index: 50;
// `;

// const ModalBox = styled.div`
//   background: #fff;
//   padding: 24px;
//   border-radius: 18px;
//   width: 90%;
//   max-width: 380px;
//   box-shadow: 0 4px 12px rgba(0,0,0,0.15);
// `;

// export default function AddTransactionModal({ open, onClose }) {
//   if (!open) return null;

//   return (
//     <Overlay onClick={onClose}>
//       <ModalBox onClick={(e) => e.stopPropagation()}>
//         <h2 className="font-semibold mb-4">Add Transaction</h2>

//         <form className="flex flex-col gap-3">
//           <input className="border rounded-md p-2" placeholder="Name" />
//           <input className="border rounded-md p-2" placeholder="Amount" />
//           <input className="border rounded-md p-2" placeholder="Category" />

//           <button className="p-2 rounded-md bg-indigo-600 text-white">
//             Save
//           </button>
//         </form>
//       </ModalBox>
//     </Overlay>
//   );
// }
