# Intro to Web Development - Lesson 2
### Overview

This post is the second in a series of lessons that I wrote for and teach at VandyApps, the Computer Science club at Vanderbilt University. These sessions will focus on the fundamentals of web development, including HTML, CSS, and Javascript.

This lesson will cover:

  - Javascript
  - Hosting

### Javascript

Today, we'll start working with **Javascript**, the language of the web. Javascript is the main programming language used on the web. Unlike HTML and CSS, Javascript is turing complete, and thus can be used to make full applications. Almost all websites on the internet use some form of Javascript, and learning Javascript will be a good step towards making our *own* web applications.

##### Types

Let's start by covering the main types available in Javascript:

* Number
* String
* Boolean
* Function
* Object

There's a couple others, but these are the important ones. **Numbers** are 64-bit floating point values, similar to `double` in Java. **Strings** are sequences of characters, similar to strings in any other language, but with support for internationalization built in. Although Strings are a distinct type, they can be used like objects in Javascript, and thus you can do things like `"VandyApps".length`, which would return `9`. **Booleans** in Javascript are somewhat unique, in that every single value can be converted to a boolean. So although the possible values consist only of `true` and `false`, almost every value other than `0`, empty strings, and null values converts to `true`.

##### Variables

Javascript is **weakly** and **dynamically** typed, which means two different things. Dynamically typed refers to the fact that variables in Javascript are simply declared by the `let` keyword. No type declaration is required or accepted.

Example:
```javascript
let x = 5;
```

Weakly typed refers to the fact that variables are implicitly converted by the language. In the example below, x is automatically converted to a string.

Example:
```javascript
let x = 5;
x = x + 2;
console.log("5 + 2 is " + x);
```

This can be helpful, as it avoids the verbosity some other languages have when converting types, it can also be very harmful as it introduces sources of error into your code.

Now, what's important to keep in mind as you're learning about Javascript is that Javascript is a **prototypical** language. This is very different from object-oriented languages that you may have covered in your CS classes, or functional languages you may have heard about elsewhere. This means that Javascript does not have classes in the traditional sense, but instead provides similar functionality through **object prototypes**. However, with the advent of ES6 in 2015, syntax similar to other languages can be used to define classes in Javascript.

### Hosting

Now that we know HTML, CSS, and Javascript, we've acquired the fundamentals required to build a basic web application. You can now make a website in **Visual Studio Code**, and open the file in your web browser to view the website. You may be wondering, however, how you can make this website visible to everybody else. After all, you can't send a link to a local file on your computer to your friends.

Luckily, there's a free solution to make hosting your website super simple and super easy. Check out [**Github Pages**](https://pages.github.com/)! Github pages makes hosting your website as simple as saving your code. The [website](https://pages.github.com/) has a guide to uploading your code, and I highly recommend you check it out.

### Next Week

Next week, we'll be starting to make use of our newly-acquired skills to make a **web app**. We'll be working together on our long-term project for this session. Now that we've gained all these skills, we're ready to have some serious fun.