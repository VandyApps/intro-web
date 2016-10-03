# Intro to Web Development - Lesson 1
### Overview

This post is the first in a series of lessons that I wrote for and teach at VandyApps, the Computer Science club at Vanderbilt University. These sessions will focus on the fundamentals of web development, including HTML, CSS, and Javascript.

This lesson will cover:

  - Setup and Installation
  - HTML
  - CSS

### Setup and Installation

Intro to Web Development will require a text editor. If you're already familiar with a (programming) text editor, go ahead and keep using it. However, anybody who needs a text editor should look towards [Visual Studio Code](https://code.visualstudio.com/).

Download and install the [latest release for your OS](https://code.visualstudio.com/download).

For testing of our code and web development tools, we'll be using [Google Chrome](https://www.google.com/chrome/), which has great Developer Tools built in. Go ahead and install the [latest version](https://www.google.com/chrome/browser/desktop/index.html). Once again, if you're already familiar with the developer tools on another browser(such as Firefox Developer Edition), you may continue using it.

### HTML

The first thing we'll be covering in this session is HTML, which stands for **Hyper-Text Markup Language**. HTML is a markup language that defines the **structure** of pages on the web. HTML is composed of *elements*. HTML is written in plain text, and thus can be written in any text editor, such as Visual Studio Code.

Elements in HTML are defined using *tags*. This is an example of an HTML element:
```html
<h1>Hello</h1>
```

In the example, `<h1>` is a tag that defines a top-level heading element. `h1` to `h6` exist for defining headings of various sizes. `</h1>` is the corresponding closing tag, which denotes the end of the `h1` element.

### CSS

As previously stated, HTML is used only to define the meaning of the content, rather than its appearance or presentation. CSS is what's used to define appearance and layout.

In order to learn how to write CSS, it is important to understand how the **DOM** works. The DOM, or Document Object Model, is the representation of a page in your computer's memory. It combines *content* (HTML) and *style* (CSS) into one single tree-like structure.

One hint towards why CSS is so powerful lies in its name (**Cascading** Style Sheets). The cascading aspect of CSS means that the actual style for an element can be specified in many different places. This also means that CSS can be confusing to follow.