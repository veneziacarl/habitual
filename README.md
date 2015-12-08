Habitual is a habit tracking app.

Now the command npm run build runs Webpack in production mode, which minimizes the bundle file automatically and
the command npm run dev runs the Webpack in the watch mode.


TODO:
[] complete HabitRow component
[] complete HabitDetails component
[] complete HabitStatus component
[] complete HabitUpdate component
[] complete HabitDelete component
[] write tests
[] add styling
[] create user log in


current issue:
habits props are not being set properly, but are being handed down correctly. They are initialized as an empty array and the AJAX get method is not properly filling the array.
