import React, { useState } from 'react';
import {
  ChakraProvider,
  Card,
  CardBody,
  Heading,
  CardHeader,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  useToast,
  Button,
  CardFooter,
  SimpleGrid
} from '@chakra-ui/react';
import '../components/todo.css';

function Todo() {

  // Declaring new state varialbe to handle input value.
  const [todoAddInput, setTodoAddInput] = useState("");
  //Declaring a state variable to store list of todo items.
  const [todoItems, setTodoItems] = useState([]);

  //Declaring variable for raising toasts.
  const toast = useToast()

  //Declaring a function to handle add todo event.
  const addTodoItems = () => {
    if (todoAddInput) {
      setTodoItems([...todoItems, todoAddInput]);
      toast({
        title: 'Task created.',
        status: 'success',
        variant: 'subtle',
        duration: 2000,
        isClosable: true,
      });
      setTodoAddInput('');
    }
    //console.log(toast);
  }

  //Declaring a function to hadle delete todo item event.
  const deleteTodoItem = (id) => {
    const updatedTodoItems = todoItems.filter((value, index) => {
      return index !== id;
    });
    setTodoItems(updatedTodoItems);
  }

  //Declaring a function to hadle delete all todo item event.
  const deleteAllTodoItems = () => {
    console.log(todoItems);
    if (todoItems.length) {
      toast({
        title: 'All Tasks deleted.',
        status: 'info',
        variant: 'subtle',
        duration: 2000,
        isClosable: true,
      });
      setTodoItems([]);
    }
  }

  return (
    <ChakraProvider>
      <div className='container'>
        <Text fontSize='5xl' align='center'>Todo List 📃</Text>
        <div className='todo-add'>
          <InputGroup>
            <Input placeholder='Ex. Buy groceries'
              value={todoAddInput}
              onChange={(e) => setTodoAddInput(e.target.value)}></Input>
            <InputRightElement>
              <Button
                onClick={addTodoItems}
              >➕</Button>
            </InputRightElement>
          </InputGroup>
        </div>
        <div className='todo-list'>
          <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
            {
              todoItems.map((value, index) => {
                return (
                  <Card key={index}>
                    <CardBody>
                      <Text fontSize='3xl'>{value}</Text>
                    </CardBody>
                    <CardFooter>
                      <Button variant='solid' colorScheme='red' onClick={() => deleteTodoItem(index)}>
                        Delete
                      </Button>
                    </CardFooter>
                  </Card>
                )
              })
            }
          </SimpleGrid>
        </div>
        <Button
          className='delete-all'
          onClick={deleteAllTodoItems}
        >Delete all ❌</Button>
      </div>
    </ChakraProvider>
  );
}

export default Todo;
