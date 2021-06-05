import Swal from 'sweetalert2'

export const successMessage = (message) => {
    return (
        Swal.fire({
            icon: 'success',
            title: message,
            showConfirmButton: false,
            timer: 1000
        })
    )
}

export const errorMessage = (message) => {
    return (
        Swal.fire({
            icon: 'error',
            title: message,
            showConfirmButton: false,
            timer: 5000,
            // footer: `<span>${error}</span>`
        })
    )
}

// export const confirmDialog = (message, children) =>{
//     return (
//         Swal.fire({
//             title: message,
//             showDenyButton: true,
//             showCancelButton: true,
//             confirmButtonText: `Claro!`,
//             denyButtonText: `Melhor não`,
//           }).then((result) => {
//             /* Read more about isConfirmed, isDenied below */
//             if (result.isConfirmed) {
//                ()=> children
//             //   Swal.fire('Saved!', '', 'success')
//             } else if (result.isDenied) {
//               Swal.fire('Changes are not saved', '', 'info')
//             }
//           })
//     )
// }