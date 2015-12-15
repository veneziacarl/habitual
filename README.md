# Habitual
### habit tracking app


* `$ npm run build` runs Webpack in production mode, which minimizes the bundle file automatically
* `$ npm run dev` runs Webpack in watch mode.


**TODO:**

_phase 1_
- [x] complete Entry component
- [x] complete HabitForm component
- [x] complete HabitLabelRow component
- [x] complete HabitList component
- [x] complete HabitDetails component
- [x] switch from using `tables` to using `spans` and `divs`
- [x] complete table drop down on click animation
- [x] add delete path
- [ ] fix delete path to not have to use habit.id.id (change object being passed in)
- [ ] add edit button functionality
- [ ] change form habit type to radio button from text area
- [ ] add monthly view
- [ ] add yearly view
- [ ] add infinite scroll box

_phase 2_
- [ ] switch from Sinatra/ActiveRecord to rails
- [ ] switch to rails foundation
- [ ] add in 'skip' capability
- [ ] write tests
- [ ] create user log in


_future phases_
- [ ] add styling

*current issues:*
- [ ] issues in AJAX success for handleOpenTab: not allowing me to string interpolate (tab) might have to just do a large logic block with separate AJAX calls for different tabs

*gems that I'm not sure how to add to Gemfile yet..*
npm react-tap-event-plugin
npm material-ui
<link href='https://fonts.googleapis.com/css?family=Roboto:400,300,500' rel='stylesheet' type='text/css'> font
