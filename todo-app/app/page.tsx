"use client";
import { DeleteIcon } from "@chakra-ui/icons";
import {
  Button,
  ChakraProvider,
  Checkbox,
  Container,
  HStack,
  Input,
  ColorModeScript,
  extendTheme,
  useColorMode
} from "@chakra-ui/react";
import { Heading, Box, Text } from "@chakra-ui/react";
import { useState } from "react";

const config= {
  initialColorMode:'light',
  useSystemColorMode:'false',
}

const theme=extendTheme({
  config,
})

export default function Page() {
  const { toggleColorMode } = useColorMode();
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([
    {
      todoText: "UI Design",
      completed: false,
    },
    {
      todoText: "Q1 tasks",
      completed: false,
    },
  ]);

  const checkedHandler = (currentTodo: any) => {
    let newTodo = todos.map((t) => {
      if (t.todoText == currentTodo.todoText) {
        t.completed = !t.completed;
      }
      return t;
    });
    setTodos(newTodo);
  };

  const addTodoHandler = () => {
    if (todo) {
      let newTodo = { todoText: todo, completed: false };
      let newTodos = [newTodo, ...todos];
      setTodos(newTodos);
      setTodo("");
    }
  };

  const deleteHandler = (currTodo: any) => {
    let newTodos = todos.filter((t) => {
      return t.todoText != currTodo.todoText;
    });
    setTodos(newTodos);
  };
  return (
    <>
      <ChakraProvider>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />

        <Box
          w="100&"
          height="100vh"
          bgGradient="linear(red.100 0%, orange.100 25%, yellow.100 50%)"
        >
          <Container>
            <Button onClick={toggleColorMode}>click me</Button>
            <Heading
              as="h1"
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
              fontSize="5xl"
              fontWeight="extrabold"
              py="3"
              textAlign="center"
            >
              Todo APP
            </Heading>
            <Input
              type="text"
              size="md"
              placeholder="Write todo here"
              color="teal"
              _placeholder={{ color: "inherit" }}
              value={todo}
              onChange={(e: any) => {
                setTodo(e.target.value);
              }}
              onKeyDown={(e) => e.key === "Enter" && addTodoHandler()}
            />
            <Button
              p={4}
              my="2"
              width="100%"
              color="white"
              fontWeight="bold"
              borderRadius="md"
              bgGradient="linear(to-r, teal.500, green.500)"
              _hover={{
                bgGradient: "linear(to-r, red.500, yellow.500)",
              }}
              type="submit"
              onClick={addTodoHandler}
            >
              Add
            </Button>
            <Box maxWidth="500px" m="auto">
              {todos.map((todo: any) => {
                return (
                  <>
                    <HStack spacing="10px" key={todo.todoText} mb="2">
                    <Checkbox colorScheme='green'
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => {
                          checkedHandler(todo);
                        }}
                      />
                      <Text width="90%" 
                      style={{
                        textDecoration:
                        todo.completed? 'line-through':'none'
                      }}
                      >{todo.todoText}</Text>
                      <DeleteIcon
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          deleteHandler(todo);
                        }}
                      />
                    </HStack>
                  </>
                );
              })}
            </Box>
          </Container>
        </Box>
      </ChakraProvider>
    </>
  );
}
