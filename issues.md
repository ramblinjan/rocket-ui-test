# Planning

- Does anything like this feature exist?
- What's the fastest way to get a broken version of it in front of my face?
- What do I need to know before I:
  - Define APIs for the component / feature / set of components
  - Write even one failing test
  - Map single input state to a result (single passed test / minimum single piece of feature)
- What are the actual implementation steps going to look like?

* Launch views exist -- want to "expand" -- user should perceive launch view changing vs. creating a new piece of the view
* Only one launch is viewable at a time (sounds like a single redux state property)
  - Do launches have unique ID? (flight number)
* We will need to fetch data from spacex api

## Data Fetching

Things to copy and change to rocket:

- Launch service
- Actions
- Reducer (and make sure to combine in root)

# Implementation

# To improve

## Maybe in scope

- Does react dev tools need additional setup?
- storybook
- gitignore

## General things to document

- prettier
