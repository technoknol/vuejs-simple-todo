import HelloWorld from '@/components/HelloWorld'
import Todo from '@/components/Todo'

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
    }
  ]
}
