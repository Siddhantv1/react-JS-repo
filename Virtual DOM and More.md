
# `what we will learn`

createRoot is a method, and we will learn what it solely does behind the structure.
It compares main DOM, Virtual DOM, and does make only little changes in copies of virtual DOM.

- React team also learned the fact that, new algorithm can be designed for UI updation itself, to automate the task. so, they developed, **React Fiber**
---


## React Fiber
React team was made to increase sustainability of "Looking good" factor of websites, i.e. Animations, Gestures, etc.

> Fiber introduces novel concepts, its a little difficult to understand.

### 🤝Reconciliation:-
The algorithm, which React uses to differentiate one Tree with another to identify the **changes** made there.

>	this algo's basically the dude who's called Virtual DOM, handling all the stuff behind the scenes. 

#### 💡 how?
1. When you render a React application tree of nodes describing the app is saved in memory.
2. With every update happening in the `setState`,  a new Tree is generated, comparing with the old tree what all new changes are made.


### Update:-
 Update is basically a change in data used to render a React App, usually known as `setState.`
 Instead of Saving -> then updating, it simply re-rendering the site. ✅saves memory


 ### Props in React:-
  Props is a method, known as properties, which is made for reusability of components or divs and things into the site source

  even, we can customize the props, in such a way that each component of the Same type, would include a different set of values and data
   (e.g. : stories of different people on Instagram)

   > here's how to do it:

   <Card/>