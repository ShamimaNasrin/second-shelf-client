import React from 'react';
import useTitle from '../../Hooks/useTitle';
import './Blog.css';

const Blog = () => {
    useTitle('Blog');

    const blogs = [
        {
            _id: 1,
            ques: 'Q1: What are the different ways to manage a state in a React application?',
            ans: `There are four main types of state that we need to properly manage in React apps:
            Local state: Local state is data we manage in one or another component. Local state is most often managed in React using the useState hook.
            Global state: Global state is data we manage across multiple components. Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.
            Server state: Data that comes from an external server that must be integrated with our UI state. Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.
            URL state: Data that exists on our URLs, including the pathname and query parameters.`,
        },
        {
            _id: 2,
            ques: 'Q2: How does prototypical inheritance work?',
            ans: `JavaScript inheritance is more widely known as “prototypal inheritance.” Prototypal inheritance uses the concept of prototype chaining, and it refers to the linking of objects via the prototype property. When a constructor function creates an object, it does not create it based on the constructor's prototype; instead, it creates an object linked to the constructor's prototype object. JavaScript looks for inherited properties in the prototype of the object, but also in the prototype of the prototype, and so on in the chain of prototypes. `,
        },
        {
            _id: 3,
            ques: 'Q3: What is a unit test? Why should we write unit tests?',
            ans: `A unit test verifies the behavior of a unit of software in the system. It verifies whether a small and isolated piece of the codebase called “unit” behaves as the developer intended.
            Usually, developers write unit tests first, then write the software code. This approach is known as test-driven development (TDD). In TDD, the requirements are turned into specific test cases, then the software is improved to pass the new tests. In the case of unit tests, it allows for the modification of code without affecting the functionality of other units or the software in its entirety. This makes the job easier for developers as the bugs are easy to locate at this stage, which saves time and money.
            Also, within unit test environments, the individual modules of a product become isolated from one another and have their own area of responsibility. In this scenario, tests are more reliable because they are run in a contained environment. The code too, because of said reliability, becomes reliable.`,
        },
        {
            _id: 4,
            ques: 'Q4: React vs. Angular vs. Vue?',
            ans: `Key Differences Between Angular.Js, React.Js And Vue.Js are: Angular.js is a full-fledged MVC framework that provides you with all the possibilities for out-of-the-box programming like: Templates based on HTML, Dependency injection, Ajax requests, Routing etc. 
            React.js, on the other hand, is a library that just offers the view, leaving the developer to decide how to construct the Model and Controller. The following features are provided: As an add-on to JavaScript, the JSX language, which is similar to XML, is used instead of templates.
            Vue.js is a library that allows you to create interactive web interfaces. Vue.js is primarily concerned with the ViewModel layer of the MVVM architecture. It uses two-way data bindings to attach the View and the Model. Directives and Filters abstract away the actual DOM operations and output formatting.`,
        },
    ]
    return (
        <div className='py-10'>
            <h1 className='mx-auto font-bold text-5xl text-center mb-6'>Blogs</h1>
            <div className="rounded grid grid-cols-1 gap-4 justify-center">
                {
                    blogs.map(blog => <div className='bg-secondary p-5 blog-card w-3/5 mx-auto rounded-lg' key={blog._id}>
                        <div className="card-body">
                            <h2 className="card-title">{blog.ques}</h2>
                            <p><span className='font-semibold'>Ans: </span>{blog.ans}</p>

                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Blog;