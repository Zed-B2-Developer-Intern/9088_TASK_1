import { redirect } from 'next/navigation';

export default function Home(){
redirect('/dashboard');  //to redirect to dashboard route when visiting '/'
}