// export const Greet = () => {
//     return (
//         <div>
//             <h2>Welcome Matthew! You have 10 unread messages</h2>
//         </div>
//     )
// }

type GreetProps = {
    name: string
    massageCount: number
    isLoggedIn: boolean
}

export default function Greet(props: GreetProps) {
    return (
        <div> 
            <h2>
                {
                    props.isLoggedIn ? 
                    `Welcome ${props.name}! You have ${props.massageCount} unread messages` : 
                    'Welcome Guest'
                }
            </h2>
        </div>
    )
}