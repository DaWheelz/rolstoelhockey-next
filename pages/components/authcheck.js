import { useRouter } from 'next/router'

const user = '';
const token = typeof window !== "undefined" && localStorage.getItem('token');

export const checkUserAuthentication = () => {
    if(!token) {
      return { auth: null };
    } else return {auth:true};
  };

export const AuthCheck = (props) => {
  const router = useRouter()
  const isJWTValid = checkUserAuthentication() // you need to implement this. In this example, undefined means things are still loading, null means user is not signed in, anything truthy means they're signed in

  if (typeof window !== 'undefined' && user === null) router.push('/')

  if(!user) return <Loading /> // a loading component that prevents the page from rendering
   
  return props.children
}