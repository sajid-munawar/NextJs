"use client";
import { ChakraProvider, HStack, List, ListItem } from "@chakra-ui/react";
import { Heading, Box, Text } from "@chakra-ui/react";
import { useState } from "react";

export default function Page() {
  const [todos, setTodos] = useState([
    {
      todoText: "Abc",
      completed: false,
    },
    {
      todoText: "gef",
      completed: true,
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

  return (
    <>
      <ChakraProvider>
        <Heading as="h1" style={{ textAlign: "center" }} color="red" pt="1em">
          Todo App
        </Heading>
        <Box maxWidth="500px" bg="gray" m="auto">
          {todos.map((todo: any) => {
            return (
              <>
                <HStack spacing="10px">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onClick={() => {
                      checkedHandler(todo);
                    }}
                  />
                  <Text>{todo.todoText}</Text>
                </HStack>
              </>
            );
          })}
        </Box>
      </ChakraProvider>
    </>
  );
}
