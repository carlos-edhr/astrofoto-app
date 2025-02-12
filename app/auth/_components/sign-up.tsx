// // app/auth/signup/page.tsx
// "use client";

// import { useFormState } from "react-dom";
// import { useRouter } from "next/navigation";
// import { signUp, type FormState } from "@/actions/auth/auth";

// const initialState: FormState = null;

// export default function SignUpPage() {
//   const router = useRouter();
//   const [state, formAction] = useFormState(signUp, initialState);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 text-black">
//       <div className="p-8 bg-white rounded-lg shadow-md w-96">
//         <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>

//         {state?.message && (
//           <div className="mb-4 p-2 bg-red-100 text-red-700 rounded-md">
//             {state.message}
//           </div>
//         )}

//         <form className="space-y-4" action={formAction}>
//           {state?.message && (
//             <div
//               className={`mb-4 p-2 rounded-md ${
//                 state.success
//                   ? "bg-green-100 text-green-700"
//                   : "bg-red-100 text-red-700"
//               }`}
//             >
//               {state.message}
//             </div>
//           )}
//           <div>
//             <label className="block mb-2 text-sm font-medium">Name</label>
//             <input
//               name="name"
//               type="text"
//               className="w-full p-2 border rounded-md text-slate-200"
//               required
//             />
//           </div>
//           <div>
//             <label className="block mb-2 text-sm font-medium">Email</label>
//             <input
//               name="email"
//               type="email"
//               className="w-full p-2 border rounded-md text-slate-200"
//               required
//             />
//           </div>
//           <div>
//             <label className="block mb-2 text-sm font-medium">Password</label>
//             <input
//               name="password"
//               type="password"
//               className="w-full p-2 border rounded-md text-slate-200"
//               required
//               minLength={8}
//             />
//             <p className="text-sm text-slate-200 mt-1">Minimum 8 characters</p>
//           </div>
//           <input type="hidden" name="callbackUrl" value="/transmisiones" />
//           <button
//             type="submit"
//             className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600"
//           >
//             Create Account
//           </button>
//           {state?.message && (
//             <div className="text-red-500">{state.message}</div>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// }
