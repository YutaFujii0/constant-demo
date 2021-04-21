# Reproduce Procedure

1. run `rails s` command and start server
2. In your browser, request http://localhost:3000/  You'll probably see dogs and cats list.
3. In DogsController, comment this out and save

```
dogs.push({ name: 'Hachi' })
```

4. In CatsController, comment this out and save

```
cats.push({ name: 'Pudding' })
```

5. Reload the page, and you will **sometimes** see either dogs/cats is not listed, when the error is occurred.
6. If you don't see the bug, comment those lines in and reload. And retry these process.

## Bugs

### Unable to autoload constant Api::One::Two::CatsController, expected /constant-demo/app/controllers/api/one/two/cats_controller.rb to define it

