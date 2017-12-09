import HelloWorld from '@/components/HelloWorld'
import Todo from '@/components/Todo'
import Posts from '@/components/Posts'

export default function Routes () {
  return [
    {
      path: '/',
      name: 'Home',
      component: HelloWorld
    },
    {
      path: '/todo',
      name: 'Todo',
      component: Todo
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts
    }
  ]
}
