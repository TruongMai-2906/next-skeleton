import styles from '../header/Header.module.scss'
import { doGet } from '../../utilities/api';
import { useEffect, useState } from 'react';
import { TodoEntity } from '../../models/entity/Todo';
export interface HeaderProps {

}

const Header = (props: HeaderProps) => {

  const [todo, setTodo] = useState<TodoEntity>();
  
  useEffect(() => {
    console.log('here');
    (async () => {
  
      const resp = await doGet('https://jsonplaceholder.typicode.com/todos/1');
      console.log(resp.data);
      
      setTodo(resp.data);
    })();
  }, [])

  return (
    <div className={styles["root"]}>
      <div>Header</div>
      <div>
        id: {todo?.id}
      </div>
      <div>
        userId: {todo?.userId}
      </div>
      <div>
        title: {todo?.title}
      </div>
      <div>
        completed: {todo?.completed ? "true" : "false"}
      </div>
    </div>
  );
}

export default Header;