해당 형식을

```
  <UpdateTodoDialog
    todoId={todoId}
    open={isUpdateTodoDialogOpen}
    onOpenChange={setIsUpdateTodoDialogOpen}
  />
```

다음 형식으로 변경하기 (성능 상의 이점)

```
  {isUpdateTodoDialogOpen && (
    <UpdateTodoDialog
      todoId={todoId}
      open={isUpdateTodoDialogOpen}
      onOpenChange={setIsUpdateTodoDialogOpen}
    />
  )}
```

