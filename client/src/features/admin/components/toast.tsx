import Toast from 'react-bootstrap/Toast';
import { useLocation, useNavigate } from 'react-router-dom';

export default function ToastGeneral() {
  const location = useLocation();
  const nav = useNavigate();
  const {message, navigateAfter} = location.state as Itoast

  return (
    <div>
        <Toast style={{margin: 'auto'}} show={true} onClose={ () => {nav(navigateAfter)}}>
          <Toast.Header>
            <strong className="me-auto">our website say</strong>
            <small></small>
          </Toast.Header>
          <Toast.Body>{message}</Toast.Body>
        </Toast>
      </div>
  );
}

interface Itoast{
    message: string,
    navigateAfter: string,
}

// import { Toast } from "react-bootstrap";
// import { useState, useRef, useEffect } from "react";

// export default function ToastGeneral() {
//   const [show, setShow] = useState(true);

//   function useOutsideAlerter(ref: any) {
//     useEffect(() => {
//       /**
//        * Close toast if clicked on outside of element
//        */
//       function handleClickOutside(event: Event) {
//         if (ref.current && !ref.current.contains(event.target)) {
//           setShow(false);
//         }
//       }
//       // Bind the event listener
//       document.addEventListener("mousedown", handleClickOutside);
//       return () => {
//         // Unbind the event listener on clean up
//         document.removeEventListener("mousedown", handleClickOutside);
//       };
//     }, [ref]);
//   }

//   const wrapperRef = useRef(null);
//   useOutsideAlerter(wrapperRef);

//   return (
//     <div className="App">
//         <Toast.Header closeButton={false}>
//           <div className="me-auto">Toast title</div>
//           <div onClick={() => setShow(false)}>Close button</div>
//         </Toast.Header>
//         <Toast.Body>Body text</Toast.Body>
//       </Toast>
//     </div>
//   );
// }
